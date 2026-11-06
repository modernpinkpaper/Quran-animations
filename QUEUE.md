# Video queue (Dalia's rule: when one video is finished and sent, START THE NEXT ONE AT ONCE, until the queue is empty)
Audience for all: GENERAL. Script type for all: real-life role-play with a kind correction (template: copy the latest finished role-play with `tools/new_video.sh`). While a video's voices are being made, prepare the next video's script, cards and acting. Run ONE voice job at a time. After each video: checks, AUDIT.md, commit and push, send to Dalia with the honest list, then start the next.

| # | Folder | Situation | Verse | Easy way | Status |
|---|---|---|---|---|---|
| 1 | angry_text | the angry text | Fussilat 41:34 | the 10-second rule: pause, delete, write the kind version | DONE, sent |
| 2 | feed | the perfect feed | Ta-Ha 20:131 + Al-Kahf 18:39 | say "ma sha Allah, la quwwata illa billah", wish them well, phone down | DONE, sent |
| 3 | laugh | laughing at someone's embarrassing video and about to forward it | Al-Hujurat 49:11 | do not forward; send her a kind message | DONE, sent |
| 4 | cart | the midnight shopping cart | Al-A'raf 7:31 | leave it in the cart for 24 hours | DONE, sent |
| 5 | stalk | checking an old friend's profile again and again | Al-Hujurat 49:12 | mute it, phone face-down, do one thing with your hands | DONE, sent |
| 6 | late | "I'll be there in 5", cancelling at the last minute | Al-Isra 17:34 | say "I'll try" only when unsure, put it in the calendar right away | DONE, sent |

## After the six role-plays: MICRO-HABITS (Dalia asked for this type; formula in menu/ideas/README.md, category 5; 25 to 40 s; she can adjust the formula after seeing the first one). Audience: GENERAL.
| # | Folder | Small step | Verse | Status |
|---|---|---|---|---|
| 7 | micro_greet | return a greeting with a better one (neighbour at the door; the verse also shown on a wall smart display in the entryway) | 4:86 | queued (needs the micro-habit template + smart display overlay) |
| 8 | micro_word | say the best word (cashier / delivery driver) | 17:53 | queued |
| 9 | micro_good | speak good to people (very short Arabic phrase) | 2:83 | queued |
Later ideas (not queued): walk gently 25:63, pardon one small thing 24:22, say thank you 14:7. The CAN AND CAN'T category (menu/ideas/README.md, category 4) waits for Dalia's decision on the rules.

## HOW THE QUEUE KEEPS RUNNING WITHOUT DALIA (do this at EVERY wake-up)
1. Check state: `ps` for tools/chain_voices.sh, tools/chain_render.sh (lanes), and the marker files `videos/<v>/work/VOICES_OK` and `RENDER_OK`.
2. If a lane is not running and work remains, start it again (setsid nohup): `tools/chain_voices.sh <videos>` and `tools/chain_render.sh <videos>`. They resume. (Also start `python3 -m http.server 8766` from the repo root.)
3. For each video with `RENDER_OK` that has not been sent: run the checks (lines_check, audio_check, arabic_source_check, movement_report, fit_sheet and LOOK at it), write AUDIT.md, commit and push, send it to Dalia with the honest list, mark DONE here.
4. Prepare the next video's script while waiting. Then schedule the next wake-up (send_later 20 minutes) until every video is DONE. When all are done, delete the hourly safety-net trigger and tell Dalia.
