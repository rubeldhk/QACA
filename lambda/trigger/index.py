import json
import os
import time

import boto3


ec2 = boto3.client("ec2")
ssm = boto3.client("ssm")


def handler(event, _context):
    try:
        print("Received event:", json.dumps(event))
        _validate_token(event)
        payload = _parse_payload(event)
        env = (payload.get("env") or "nonprod").strip()
        test_group = (payload.get("testGroup") or "").strip()
        locale = (payload.get("locale") or "en-CA").strip()

        _validate_inputs(env, test_group, locale)

        mode = os.environ.get("RUNNER_MODE", "start-stopped")
        print(f"Runner mode: {mode}")

        if mode == "ephemeral":
            instance_id = _launch_ephemeral_runner(env, test_group)
        else:
            instance_id = _find_or_start_runner(env)

        command_id = _send_ssm_command(instance_id, env, test_group, locale)

        response = {
            "message": "invoked",
            "mode": mode,
            "runnerInstanceId": instance_id,
            "ssmCommandId": command_id,
            "env": env,
            "testGroup": test_group,
            "locale": locale,
        }
        print("Invocation response:", json.dumps(response))
        return response
    except Exception as exc:
        print(f"Trigger failed: {exc}")
        raise


def _validate_token(event):
    expected = os.environ.get("QACA_TOKEN")
    if not expected:
        return
    if not isinstance(event, dict):
        return
    headers = event.get("headers") or {}
    if not headers:
        return
    provided = None
    for key, value in headers.items():
        if key.lower() == "x-qaca-token":
            provided = value
            break
    if provided != expected:
        raise PermissionError("Forbidden: invalid x-qaca-token")


def _parse_payload(event):
    if isinstance(event, str):
        try:
            return json.loads(event)
        except json.JSONDecodeError:
            return {}

    if not isinstance(event, dict):
        return {}

    body = event.get("body")
    if body is None:
        return event
    if isinstance(body, str):
        try:
            return json.loads(body) if body else {}
        except json.JSONDecodeError:
            return {}
    if isinstance(body, dict):
        return body
    return {}


def _validate_inputs(env, test_group, locale):
    allowed = [item.strip() for item in os.environ.get("ALLOWED_ENVS", "nonprod").split(",") if item.strip()]
    if env not in allowed:
        raise ValueError(f"env must be one of {allowed}")
    if not test_group:
        raise ValueError("testGroup is required")
    if not locale:
        raise ValueError("locale is required")


def _runner_tag_filters(env):
    filters = [
        {"Name": "tag:Project", "Values": [os.environ.get("RUNNER_TAG_PROJECT", "bloomex-ca-qa-automation")]},
        {"Name": "tag:Role", "Values": [os.environ.get("RUNNER_TAG_ROLE", "runner")]},
    ]
    if env:
        filters.append({"Name": "tag:Env", "Values": [env]})
    return filters


def _find_or_start_runner(env):
    print("Searching for runner instance.")
    instances = _describe_instances(_runner_tag_filters(env))
    if not instances:
        raise RuntimeError("No runner instance found for start-stopped mode.")

    instance = _select_instance(instances)
    instance_id = instance["InstanceId"]
    state = instance["State"]["Name"]
    print(f"Runner instance {instance_id} state: {state}")

    if state == "running":
        return instance_id
    if state == "stopped":
        print(f"Starting runner instance {instance_id}")
        ec2.start_instances(InstanceIds=[instance_id])
        _wait_for_state(instance_id, "running")
        return instance_id
    if state in {"pending", "stopping"}:
        _wait_for_state(instance_id, "running")
        return instance_id

    raise RuntimeError(f"Runner instance {instance_id} is in unexpected state: {state}")


def _select_instance(instances):
    priority = {"running": 0, "pending": 1, "stopped": 2, "stopping": 3, "shutting-down": 4, "terminated": 5}
    return sorted(instances, key=lambda inst: priority.get(inst["State"]["Name"], 99))[0]


def _wait_for_state(instance_id, desired_state, timeout_seconds=300):
    print(f"Waiting for instance {instance_id} to reach {desired_state}")
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        instances = _describe_instances([{"Name": "instance-id", "Values": [instance_id]}])
        if instances:
            state = instances[0]["State"]["Name"]
            print(f"Instance {instance_id} current state: {state}")
            if state == desired_state:
                return
        time.sleep(10)
    raise TimeoutError(f"Timed out waiting for {instance_id} to reach {desired_state}")


def _describe_instances(filters):
    response = ec2.describe_instances(Filters=filters)
    instances = []
    for reservation in response.get("Reservations", []):
        instances.extend(reservation.get("Instances", []))
    return instances


def _launch_ephemeral_runner(env, test_group):
    print("Launching ephemeral runner instance.")
    tags = [
        {"Key": "Name", "Value": f"qa-runner-{test_group}"},
        {"Key": "Project", "Value": os.environ.get("RUNNER_TAG_PROJECT", "bloomex-ca-qa-automation")},
        {"Key": "Role", "Value": os.environ.get("RUNNER_TAG_ROLE", "runner")},
        {"Key": "Env", "Value": env},
    ]
    params = {
        "ImageId": os.environ["RUNNER_AMI_ID"],
        "InstanceType": os.environ.get("RUNNER_INSTANCE_TYPE", "t3.large"),
        "IamInstanceProfile": {"Arn": os.environ["RUNNER_INSTANCE_PROFILE_ARN"]},
        "MinCount": 1,
        "MaxCount": 1,
        "SubnetId": os.environ["RUNNER_SUBNET_ID"],
        "SecurityGroupIds": [os.environ["RUNNER_SECURITY_GROUP_ID"]],
        "TagSpecifications": [{"ResourceType": "instance", "Tags": tags}],
    }
    key_name = os.environ.get("RUNNER_KEY_NAME")
    if key_name:
        params["KeyName"] = key_name
    response = ec2.run_instances(**params)
    instance_id = response["Instances"][0]["InstanceId"]
    _wait_for_state(instance_id, "running")
    return instance_id


def _send_ssm_command(instance_id, env, test_group, locale):
    template = os.environ.get(
        "RUNNER_COMMAND_TEMPLATE", "sudo /opt/qaca/run.sh --env {env} --group {testGroup} --locale {locale}"
    )
    command = template.format(env=env, testGroup=test_group, locale=locale)
    print(f"Sending SSM command to {instance_id}: {command}")
    response = ssm.send_command(
        InstanceIds=[instance_id],
        DocumentName="AWS-RunShellScript",
        Parameters={"commands": [command]},
    )
    command_id = response["Command"]["CommandId"]
    print(f"SSM command accepted: {command_id}")
    return command_id
