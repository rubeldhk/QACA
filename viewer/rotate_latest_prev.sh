#!/usr/bin/env bash
set -euo pipefail

REPORT_ROOT=${1:?report root required}
KEEP=${2:-10}
STATUS_ROOT=${3:-/var/www/status}

# For each env/locale/group ensure latest/prev rotation
find "$REPORT_ROOT" -mindepth 3 -maxdepth 3 -type d | while read -r groupPath; do
  # path shape: <root>/<env>/<locale>/<groupId>
  env=$(basename "$(dirname "$(dirname "$groupPath")")")
  locale=$(basename "$(dirname "$groupPath")")
  groupId=$(basename "$groupPath")

  runsDir="$groupPath/runs"
  [[ -d "$runsDir" ]] || continue

  # sort runs by mtime desc
  mapfile -t runs < <(find "$runsDir" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %P\n' | sort -rn | awk '{print $2}')
  if [[ ${#runs[@]} -eq 0 ]]; then
    continue
  fi

  latestRun=${runs[0]}
  prevRun=${runs[1]:-}

  mkdir -p "$groupPath/latest" "$groupPath/prev"
  rm -rf "$groupPath/prev"/*
  if [[ -n "$prevRun" ]]; then
    rsync -a --delete "$runsDir/$prevRun/" "$groupPath/prev/"
  fi

  rsync -a --delete "$runsDir/$latestRun/" "$groupPath/latest/"

  # build metadata
  metaFile="$REPORT_ROOT/meta.json"
  latestStatusFile="$STATUS_ROOT/${latestRun}.json"
  statusInfo=$(cat "$latestStatusFile" 2>/dev/null || echo '{}')

  current=$(cat "$metaFile" 2>/dev/null || echo '{}')
  updated=$(jq --arg env "$env" --arg locale "$locale" --arg groupId "$groupId" --arg latest "$latestRun" --arg prev "$prevRun" \
    --argjson status "$statusInfo" \
    '.[$env][$locale][$groupId] |= (. // {}) | .[$env][$locale][$groupId].latest = $latest | .[$env][$locale][$groupId].prev = $prev | .[$env][$locale][$groupId].status = ($status.status // "RUNNING") | .[$env][$locale][$groupId].durationSeconds = ($status.durationSeconds // null)' \
    <<<"$current")
  echo "$updated" > "$metaFile"

  # prune archives
  if [[ ${#runs[@]} -gt $KEEP ]]; then
    for old in "${runs[@]:$KEEP}"; do
      rm -rf "$runsDir/$old"
    done
  fi

done
