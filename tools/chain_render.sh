#!/bin/bash
# LANE B of the video chain: for each video, wait for work/VOICES_OK, render it (frames already made are kept), write work/RENDER_OK. Safe to run again after a restart.
#   tools/chain_render.sh cart stalk late
cd "$(dirname "$0")/.."
curl -s -o /dev/null localhost:8766/ || (setsid nohup python3 -m http.server 8766 >/dev/null 2>&1 &)
sleep 2
for v in "$@"; do
  [ -f "videos/$v/work/RENDER_OK" ] && continue
  until [ -f "videos/$v/work/VOICES_OK" ]; do sleep 20; done
  (cd "videos/$v" && ./make_video.sh > work/render.log 2>&1)
  [ -f "videos/$v/$v.mp4" ] && touch "videos/$v/work/RENDER_OK"
done
