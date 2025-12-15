#!/usr/bin/env bash
set -euo pipefail

: "${STAGING_BUCKET:?STAGING_BUCKET not set}"
: "${REPORT_ROOT:?REPORT_ROOT not set}"
: "${STATUS_ROOT:?STATUS_ROOT not set}"
: "${REPORTS_TO_KEEP:?REPORTS_TO_KEEP not set}"

mkdir -p "$REPORT_ROOT" "$STATUS_ROOT"

aws s3 sync "s3://${STAGING_BUCKET}/reports/" "$REPORT_ROOT/" --delete || true
aws s3 sync "s3://${STAGING_BUCKET}/status/" "$STATUS_ROOT/" --delete || true
