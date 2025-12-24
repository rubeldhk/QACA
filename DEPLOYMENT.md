# Bloomex QA Automation On-Demand Deployment (ca-central-1)

These steps assume AWS CLI v2, admin credentials, and PowerShell on Windows (commands also work in bash).

## 1) Package automation artifact
```powershell
# From repo root
$artifactZip = "automation.zip"
Compress-Archive -Path src,package.json,package-lock.json,playwright.config.ts,tsconfig.json,QAautomation.html -DestinationPath $artifactZip -Force
aws s3 cp $artifactZip s3://<ArtifactBucket>/artifacts/automation.zip
```

## 2) Upload viewer assets + runner bootstrap
```powershell
aws s3 cp QAautomation.html s3://<ArtifactBucket>/viewer/QAautomation.html
aws s3 cp viewer/status-server.js s3://<ArtifactBucket>/viewer/status-server.js
aws s3 cp viewer/sync_reports.sh s3://<ArtifactBucket>/viewer/sync_reports.sh
aws s3 cp viewer/rotate_latest_prev.sh s3://<ArtifactBucket>/viewer/rotate_latest_prev.sh
aws s3 cp runner/bootstrap.sh s3://<ArtifactBucket>/runner/bootstrap.sh
```

## 3) Deploy CloudFormation
```powershell
$stackName = "bloomex-qa-automation"
aws cloudformation deploy `
  --stack-name $stackName `
  --template-file infra/cloudformation.yml `
  --capabilities CAPABILITY_NAMED_IAM `
  --region ca-central-1 `
  --parameter-overrides `
    ProjectName=bloomex-qa-automation `
    EnvironmentName=nonprod `
    VpcId=<vpc-xxxx> `
    PublicSubnets="subnet-aaa,subnet-bbb" `
    KeyPairName="" `
    ViewerInstanceType=t3.small `
    RunnerMode=start-stopped `
    RunnerInstanceType=t3.large `
    RunnerSubnetId=<subnet-ccc> `
    RunnerSecurityGroupId=<sg-xxx> `
    RunnerAmiId=<ami-xxx> `
    RunnerInstanceProfileArn=<arn:aws:iam::<account>:instance-profile/<profile>> `
    RunnerInstanceRoleArn=<arn:aws:iam::<account>:role/<role>> `
    RunnerKeyName=""
```
Outputs to capture:
- `AlbDnsName`
- `TriggerLambdaName`
- `TriggerLambdaArn`
- `RunnerAmiIdOut`
- `RunnerSubnetIdOut`
- `RunnerSecurityGroupIdOut`
- `RunnerInstanceProfileArnOut`

## 4) Configure the viewer trigger
Ensure the viewer's `/opt/qaca-trigger.py` invokes the TriggerLambda by name (see `TriggerLambdaName` output) and passes through the Lambda payload to the UI.

## 5) Smoke test (ALB trigger)
```powershell
$alb = (aws cloudformation describe-stacks --stack-name bloomex-qa-automation --query "Stacks[0].Outputs[?OutputKey=='AlbDnsName'].OutputValue" --output text)
Invoke-RestMethod -Method Post -Uri "http://$alb/trigger" -Headers @{ 'x-qaca-token' = '<token>' } -Body (@{env='nonprod';testGroup='QAATG01';locale='en-CA'} | ConvertTo-Json) -ContentType 'application/json'
```
Use the returned `runnerInstanceId` and `ssmCommandId` for runner/SSM visibility.

```bash
curl -X POST "http://<ALB_DNS>/trigger" \
  -H "x-qaca-token: <token>" \
  -d '{"env":"nonprod","testGroup":"QAATG01","locale":"en-CA"}'
```

## 6) HTTPS (ACM + ALB)
Request/validate an ACM certificate in `ca-central-1`, then add an HTTPS listener + redirect on the ALB targeting the existing target group.

## Operational notes
- Report storage is on an attached EBS volume (`ReportsVolumeId` output). Snapshots can be scheduled via AWS Backup.
- A systemd timer on the viewer syncs the staging bucket every minute and rotates latest/prev while keeping the last N archives (default 10).
- The runner instance terminates itself after upload (InstanceInitiatedShutdownBehavior=terminate).
- Adjust defaults via CloudFormation parameters (instance sizes, retention, etc.).
