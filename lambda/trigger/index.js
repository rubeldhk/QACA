const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();
const s3 = new AWS.S3();

const requiredEnv = [
  'STAGING_BUCKET',
  'ARTIFACT_BUCKET',
  'RUNNER_AMI',
  'RUNNER_INSTANCE_PROFILE',
  'RUNNER_SECURITY_GROUP',
  'RUNNER_SUBNET',
  'DEFAULT_INSTANCE_TYPE',
  'VIEWER_BASE_URL'
];

function validateEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

function buildUserData(params) {
  const {
    env,
    groupId,
    locale,
    executionId,
    reportType,
    instanceType,
    retries,
    workers,
    timeoutMs,
    artifactPath,
    videoMode,
    screenshotMode,
    traceMode,
    specPath,
    tags
  } = params;

  const stagingBucket = process.env.STAGING_BUCKET;
  const artifactBucket = process.env.ARTIFACT_BUCKET;

  const userDataScript = `#!/bin/bash\nset -euo pipefail\n\n\nexport EXECUTION_ID=${executionId}\nexport NODE_ENV=${env}\nexport NODE_locale=${locale}\nexport QA_GROUP=${groupId}\nexport REPORT_TYPE=${reportType}\nexport RETRIES=${retries}\nexport WORKERS=${workers}\nexport TEST_TIMEOUT=${timeoutMs}\nexport VIDEO_MODE=${videoMode}\nexport SCREENSHOT_MODE=${screenshotMode}\nexport TRACE_MODE=${traceMode}\nexport ARTIFACT_PATH=${artifactPath}\nexport STAGING_BUCKET=${stagingBucket}\nexport STATUS_KEY=status/${executionId}.json\nexport LATEST_KEY=status/${env}/${locale}/${groupId}/latest.json\nexport SPEC_PATH='${specPath || ''}'\nexport TAGS='${tags || ''}'\n\n# Install deps\nDNF=dnf\nif command -v yum >/dev/null; then DNF=yum; fi\n$DNF update -y\n$DNF install -y awscli unzip tar gzip nodejs jq git\n\naws s3 cp s3://${artifactBucket}/runner/bootstrap.sh /tmp/bootstrap.sh\nchmod +x /tmp/bootstrap.sh\n/tmp/bootstrap.sh\n\nshutdown -h now\n`;

  return Buffer.from(userDataScript).toString('base64');
}

async function writeStatus(executionId, statusPayload) {
  const params = {
    Bucket: process.env.STAGING_BUCKET,
    Key: `status/${executionId}.json`,
    Body: JSON.stringify(statusPayload, null, 2),
    ContentType: 'application/json'
  };
  await s3.putObject(params).promise();
}

exports.handler = async (event) => {
  validateEnv();

  if (event.requestContext && event.requestContext.http && event.requestContext.http.method === 'OPTIONS') {
    return { statusCode: 200, headers: buildCors(), body: '' };
  }

  const body = typeof event.body === 'string' ? JSON.parse(event.body || '{}') : event.body || {};
  const { env, groupId, locale, reportType = 'allure', instanceType, retries = 0, workers = 2, timeoutMs = 30000, videoMode = 'retain-on-failure', screenshotMode = 'only-on-failure', traceMode = 'retain-on-failure', artifactPath = 'artifacts/automation.zip', specPath = '', tags = '' } = body;

  if (!env || !['stage', 'prod'].includes(env)) {
    return buildError('env must be stage|prod');
  }
  if (!groupId) {
    return buildError('groupId is required');
  }
  if (!locale || !['en', 'fr'].includes(locale)) {
    return buildError('locale must be en|fr');
  }

  const executionId = `${groupId}-${Date.now()}`;
  const now = new Date().toISOString();

  const statusPayload = {
    executionId,
    env,
    locale,
    groupId,
    status: 'QUEUED',
    requestedAt: now,
    reportType,
    links: {
      stagingRoot: `s3://${process.env.STAGING_BUCKET}/staging/${env}/${locale}/${groupId}/runs/${executionId}/`,
      latestReportUrl: `${process.env.VIEWER_BASE_URL}/reports/${env}/${locale}/${groupId}/latest/index.html`,
      prevReportUrl: `${process.env.VIEWER_BASE_URL}/reports/${env}/${locale}/${groupId}/prev/index.html`
    }
  };

  await writeStatus(executionId, statusPayload);

  const userData = buildUserData({
    env,
    groupId,
    locale,
    executionId,
    reportType,
    instanceType,
    retries,
    workers,
    timeoutMs,
    artifactPath,
    videoMode,
    screenshotMode,
              traceMode,
              specPath,
              tags
            });

  const runParams = {
    ImageId: process.env.RUNNER_AMI,
    InstanceType: instanceType || process.env.DEFAULT_INSTANCE_TYPE,
    IamInstanceProfile: { Arn: process.env.RUNNER_INSTANCE_PROFILE },
    MaxCount: 1,
    MinCount: 1,
    SecurityGroupIds: [process.env.RUNNER_SECURITY_GROUP],
    SubnetId: process.env.RUNNER_SUBNET,
    InstanceInitiatedShutdownBehavior: 'terminate',
    TagSpecifications: [
      {
        ResourceType: 'instance',
        Tags: [
          { Key: 'Name', Value: `${process.env.ProjectName || 'bloomex-qa-runner'}` },
          { Key: 'Project', Value: process.env.ProjectName || 'bloomex-qa-automation' },
          { Key: 'Env', Value: env },
          { Key: 'ExecutionId', Value: executionId },
          { Key: 'Group', Value: groupId }
        ]
      }
    ],
    UserData: userData
  };

  await ec2.runInstances(runParams).promise();

  const response = {
    executionId,
    statusUrl: `${process.env.VIEWER_BASE_URL}/api/status?executionId=${executionId}`,
    latestReportUrl: `${process.env.VIEWER_BASE_URL}/reports/${env}/${locale}/${groupId}/latest/index.html`,
    prevReportUrl: `${process.env.VIEWER_BASE_URL}/reports/${env}/${locale}/${groupId}/prev/index.html`
  };

  return {
    statusCode: 200,
    headers: buildCors(),
    body: JSON.stringify(response)
  };
};

function buildError(message) {
  return {
    statusCode: 400,
    headers: buildCors(),
    body: JSON.stringify({ error: message })
  };
}

function buildCors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST'
  };
}
