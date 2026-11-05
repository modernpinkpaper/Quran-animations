#!/bin/bash
# Starts a new video folder from a template, with every path and name already changed (we broke two renders by forgetting this).
#   tools/new_video.sh <new_name> [template]        template defaults to rumor (type 2). Use dua_worry for type 3, remember for type 1, wudu for two people standing.
#   For the ADHD-moms series use a name that starts with adhd_ (flat names keep every relative path working).
set -e
cd "$(dirname "$0")/.."
NEW="$1"; TPL="${2:-rumor}"
[ -n "$NEW" ] || { echo "usage: tools/new_video.sh <new_name> [template]"; exit 1; }
[ -d "videos/$TPL" ] || { echo "no template videos/$TPL"; exit 1; }
[ ! -e "videos/$NEW" ] || { echo "videos/$NEW already exists"; exit 1; }
mkdir -p "videos/$NEW/work"
for f in build_audio.py cards.js index.html make_video.sh perform.js plan.py render.js sets.js shots.js sheet.py; do cp "videos/$TPL/$f" "videos/$NEW/$f"; done
cp -r "videos/$TPL/fonts" "videos/$NEW/fonts"
sed -i "s#videos/$TPL#videos/$NEW#g; s#$TPL\.mp4#$NEW.mp4#g" "videos/$NEW/make_video.sh" "videos/$NEW/render.js"
grep -q "videos/$NEW/work/" .gitignore || echo "videos/$NEW/work/" >> .gitignore
chmod +x "videos/$NEW/make_video.sh"
echo "Created videos/$NEW from videos/$TPL. Leftover old name in the render files: $(grep -c "$TPL" "videos/$NEW/make_video.sh" "videos/$NEW/render.js" | tr '\n' ' ')"
echo "Next: write plan.py, cards.js, perform.js (and the Arabic by code), lint, voices, checks, render. See CLAUDE.md."
