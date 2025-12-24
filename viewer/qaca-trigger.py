#!/usr/bin/env python3
import json
import os
import sys

import boto3


def main():
    expected_token = os.environ.get("QACA_TOKEN")
    provided_token = os.environ.get("HTTP_X_QACA_TOKEN") or os.environ.get("X_QACA_TOKEN")
    if expected_token and provided_token != expected_token:
        _write_json({"error": "unauthorized"}, exit_code=1)

    lambda_name = os.environ.get("TRIGGER_LAMBDA_NAME")
    if not lambda_name:
        _write_json({"error": "TRIGGER_LAMBDA_NAME not set"}, exit_code=1)

    payload = _read_payload()
    client = boto3.client("lambda", region_name=os.environ.get("AWS_REGION", "ca-central-1"))
    response = client.invoke(
        FunctionName=lambda_name,
        InvocationType="RequestResponse",
        Payload=json.dumps(payload).encode("utf-8"),
    )

    response_payload = response.get("Payload")
    body = {}
    if response_payload:
        raw = response_payload.read()
        try:
            body = json.loads(raw.decode("utf-8")) if raw else {}
        except json.JSONDecodeError:
            body = {"raw": raw.decode("utf-8", errors="replace")}

    _write_json(body)


def _read_payload():
    raw = sys.stdin.read()
    if not raw:
        return {}
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return {}


def _write_json(payload, exit_code=0):
    sys.stdout.write(json.dumps(payload))
    sys.stdout.flush()
    if exit_code:
        sys.exit(exit_code)


if __name__ == "__main__":
    main()
