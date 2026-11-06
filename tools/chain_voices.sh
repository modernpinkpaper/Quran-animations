#!/bin/bash
# LANE A of the video chain: for each video, make the voices (resumable), fix flagged lines automatically, then write work/VOICES_OK. One voice job at a time. Safe to run again after a restart.
#   tools/chain_voices.sh cart stalk late
cd "$(dirname "$0")/.."
export CHATTERBOX_PY="$(pwd)/voices/cbenv/bin/python"; [ -x "$CHATTERBOX_PY" ] || export CHATTERBOX_PY=/home/user/Robot-videos/voices/cbenv/bin/python
export AR_TRIES=8
for v in "$@"; do
  [ -f "videos/$v/work/VOICES_OK" ] && continue
  mkdir -p "videos/$v/work"
  (cd "videos/$v" && python3 build_audio.py > work/audio.log 2>&1)
  python3 tools/fix_lines.py "videos/$v" 3 > "videos/$v/work/fix.log" 2>&1
  touch "videos/$v/work/VOICES_OK"
done
