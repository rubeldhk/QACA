#!/usr/bin/env bash
set -euo pipefail

# Expected env vars provided by user-data
: "${EXECUTION_ID:?missing}"
: "${NODE_ENV:?missing}"
: "${NODE_locale:?missing}"
: "${QA_GROUP:?missing}"
: "${REPORT_TYPE:?missing}"
: "${STAGING_BUCKET:?missing}"
: "${STATUS_KEY:?missing}"
: "${LATEST_KEY:?missing}"

ARTIFACT_PATH=${ARTIFACT_PATH:-artifacts/automation.zip}
RETRIES=${RETRIES:-0}
WORKERS=${WORKERS:-2}
TEST_TIMEOUT=${TEST_TIMEOUT:-30000}
VIDEO_MODE=${VIDEO_MODE:-retain-on-failure}
SCREENSHOT_MODE=${SCREENSHOT_MODE:-only-on-failure}
TRACE_MODE=${TRACE_MODE:-retain-on-failure}
RUN_DIR="/opt/bloomex/run/${EXECUTION_ID}"
LOG_FILE="/var/log/bloomex-runner.log"

mkdir -p "$RUN_DIR" /var/log
exec > >(tee -a "$LOG_FILE") 2>&1

echo "[INFO] Starting runner for $QA_GROUP ($NODE_ENV/$NODE_locale) executionId=$EXECUTION_ID"

# Helper to push status to S3
LATEST_STATUS_URI="s3://${STAGING_BUCKET}/${LATEST_KEY}"
PREV_STATUS_URI="${LATEST_STATUS_URI/\/latest.json/\/prev.json}"

push_status() {
  local status="$1"
  local extra="$2"
  local update_prev="${3:-false}"
  local payload
  payload=$(jq -n \
    --arg executionId "$EXECUTION_ID" \
    --arg status "$status" \
    --arg env "$NODE_ENV" \
    --arg locale "$NODE_locale" \
    --arg groupId "$QA_GROUP" \
    --arg reportType "$REPORT_TYPE" \
    --argjson data "$extra" \
    '{executionId:$executionId,status:$status,env:$env,locale:$locale,groupId:$groupId,reportType:$reportType} + $data')

  printf '%s' "$payload" >"/tmp/status-${EXECUTION_ID}.json"

  if [[ "$update_prev" == "true" ]]; then
    aws s3 cp "$LATEST_STATUS_URI" "$PREV_STATUS_URI" --content-type application/json || true
  fi

  aws s3 cp "/tmp/status-${EXECUTION_ID}.json" "s3://${STAGING_BUCKET}/${STATUS_KEY}" --content-type application/json
  aws s3 cp "/tmp/status-${EXECUTION_ID}.json" "$LATEST_STATUS_URI" --content-type application/json
}

push_status "BOOTSTRAPPING" '{}' true

cd "$RUN_DIR"

ARTIFACT_SRC="$ARTIFACT_PATH"
if [[ "$ARTIFACT_SRC" != s3://* ]]; then
  ARTIFACT_SRC="s3://${ARTIFACT_SRC}"
fi

aws s3 cp "$ARTIFACT_SRC" automation.zip
unzip -q automation.zip

if [[ -f package-lock.json ]]; then
  npm ci --ignore-scripts
else
  npm install --ignore-scripts
fi

# Playwright install (no browser download if cached)
npx playwright install --with-deps

export NODE_ENV
export NODE_locale

# runtime toggles
export PW_TEST_TIMEOUT=${TEST_TIMEOUT}
export PW_VIDEO=${VIDEO_MODE}
export PW_SCREENSHOT=${SCREENSHOT_MODE}
export PW_TRACE=${TRACE_MODE}

# Determine run selector
SELECTOR=""
if [[ -n "${SPEC_PATH:-}" ]]; then
  SELECTOR="$SPEC_PATH"
elif [[ -n "${TAGS:-}" ]]; then
  SELECTOR="--grep ${TAGS}"
fi

START_TS=$(date +%s)
STATUS_EXTRA='{}'
set +e

echo "[INFO] Running Playwright for $QA_GROUP with selector [$SELECTOR]"

npx playwright test ${SELECTOR} --workers=${WORKERS} --retries=${RETRIES} --reporter=line,allure-playwright ${REPORTER_EXTRA:-}
TEST_EXIT=$?

set -e
END_TS=$(date +%s)
DURATION=$((END_TS-START_TS))

# Generate Allure HTML if requested
if [[ "$REPORT_TYPE" == "allure" || "$REPORT_TYPE" == "both" ]]; then
  npx allure generate --clean allure-results -o allure-report
fi

# Collect Playwright HTML report if needed
if [[ "$REPORT_TYPE" == "playwright" || "$REPORT_TYPE" == "both" ]]; then
  npx playwright show-report --reporter=html --output=playwright-report || true
fi

STATUS_EXTRA=$(jq -n --arg duration "$DURATION" --arg exitCode "$TEST_EXIT" '{durationSeconds:$duration|tonumber, exitCode:($exitCode|tonumber)}')

if [[ $TEST_EXIT -eq 0 ]]; then
  FINAL_STATUS="PASS"
else
  FINAL_STATUS="FAIL"
fi

# Upload artifacts
REPORT_ROOT="s3://${STAGING_BUCKET}/staging/${NODE_ENV}/${NODE_locale}/${QA_GROUP}/runs/${EXECUTION_ID}"
aws s3 sync allure-report "$REPORT_ROOT/allure-report" || true
aws s3 sync allure-results "$REPORT_ROOT/allure-results" || true
aws s3 sync playwright-report "$REPORT_ROOT/playwright-report" || true
aws s3 cp "$LOG_FILE" "$REPORT_ROOT/runner.log" || true

push_status "$FINAL_STATUS" "$STATUS_EXTRA"

echo "[INFO] Promoting reports to latest/prev"
LATEST_REPORT_PREFIX="s3://${STAGING_BUCKET}/reports/${NODE_ENV}/${NODE_locale}/${QA_GROUP}/latest"
PREV_REPORT_PREFIX="s3://${STAGING_BUCKET}/reports/${NODE_ENV}/${NODE_locale}/${QA_GROUP}/prev"
aws s3 sync "$LATEST_REPORT_PREFIX/" "$PREV_REPORT_PREFIX/" --delete || true
aws s3 sync "${REPORT_ROOT}/allure-report/" "$LATEST_REPORT_PREFIX/" --delete || true

echo "[INFO] Run complete with status $FINAL_STATUS"
