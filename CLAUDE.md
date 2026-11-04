# Quran animations repo

Owner: Dalia (modern pink paper). Reply to her in **simple English**. She likes "just do it": when she says "you pick" or "just do it", use your picks and tell her what you chose.
This repo makes short vertical (9:16) Quran teaching videos with the emotional robots (Dalia the learner, Amina the teacher, plus Nina, Mara and the others when a scene needs them). It was split from `modernpinkpaper/robot-videos`, where the old robot, podcast and reaction videos stay.

## FIRST: read `menu/START_HERE.md`, then `menu/formats/religious_teaching.md` (the three script types, the formula, the phone-screen rule), then `menu/QUALITY.md` (the checks).

## The three script types (Dalia's approved rotation; the verse picks the type; names, not numbers)
1. **Short fix**: Dalia says her problem out loud, then the verse, then ONE easy way. Reference: `videos/remember/`.
2. **Real-life role-play with a kind correction**: friends act out a real situation, one kindly corrects the other with a verse, then one easy way. Reference: `videos/rumor/` (START FROM THIS FOLDER).
3. **Everyday situation + a dua**: "POV: you're ___", the usual way people handle it, then a Quran dua to copy, then "also say it when...". Not made yet.
The **long lesson** (`videos/quran_calm/`, `near/`, `ease/`, `change/`) is RETIRED (too long); keep them as references only. Every video: 45 to 75 seconds, bite-sized.

## AUDIENCE: ALWAYS ASK (Dalia's rule)
Before making a video, ask whether it is for the **general audience** (people who want to strengthen their faith) or for **moms with ADHD** (a planned series: busy, overwhelmed, forgetting, no routine, not taking care of herself; the same Quran-only rules, a kind lived-in tone, never medical advice or a claim that the Quran treats ADHD). If Dalia already said which, do not ask. If she did not say, ask in the same short message as the other missing items. Right now only the general audience is being made; the ADHD-moms series is not started (no folder yet, no videos).

## Content rules (never break)
- **Quran only. No hadith. No rulings** (we are not scholars). If a correction has no Quran verse behind it, tell Dalia and skip it or teach only what the verse says.
- **Arabic shown on screen is copied by code** from the Uthmani text (`https://api.alquran.cloud/v1/ayah/<surah>:<ayah>/quran-uthmani`), never typed or remembered. Then run `python3 tools/arabic_source_check.py videos/<name>/cards.js <ref> ...`.
- **Spoken Arabic is a computer voice, not tajweed.** Check every Arabic word with `tools/ar_cover.py` (all words, especially the END, must be there). Never make a full recitation with the computer voice unless Dalia asks; a person who knows the recitation must check it. Tell Dalia you cannot hear audio.
- No music. 5th-grade English, short lines, contractions. The answer or promise is on frame 0 (header). Show a PHONE close-up whenever the Quran, a post or a chat is mentioned.
- Keep real names of family and kids off screen (Dalia, Amina and Nina are based on her family). Fictional names only in made-up stories.
- Her own voice recordings must never be used or stored. A real person's voice goes only in `voices/refs/private/` (git-ignored).

## How to make a video (in order)
1. Brief (`menu/BRIEF.md`): topic and verse, script type, length. Copy `videos/rumor/` to `videos/<name>/`.
2. Write `plan.py` (lines, shots, cards, phones), `cards.js` (cards and phone screens), `perform.js` (acting). Lint: `python3 tools/lint_dialogue.py videos/<name>/plan.py`.
3. Voices (slow, run ONE job at a time or the machine runs out of memory): `export CHATTERBOX_PY=$(pwd)/voices/cbenv/bin/python AR_TRIES=8; python3 videos/<name>/build_audio.py` (set up once with `voices/setup_chatterbox.sh`). It is resumable: it only makes missing lines. If you change a line, delete `work/l<NN>.wav` AND `work/raw/l<NN>.wav` and its `work/s<NN>_*.wav`.
4. Check the voices: `voices/cbenv/bin/python -I tools/lines_check.py videos/<name>` (every line vs the script) and `tools/ar_cover.py` on the Arabic. Never write 1 or 2 word English sentences for the cloned voices (they come out garbled).
5. `node tools/movement_report.js videos/<name>` (needs `python3 -m http.server 8766` from the repo root), then render in the background: `videos/<name>/make_video.sh` (about 8 to 17 minutes), then `python3 tools/audio_check.py videos/<name>` and `python3 tools/fit_sheet.py ...` and LOOK at the fit sheet (a face in every card frame, no eye-roll face).
6. Write `AUDIT.md` (what was checked and what could not be), commit, and send Dalia the video with an honest list.

## Look and rules for the characters, camera, voices
- Characters: `characters/expressive/` (read `menu/cast/emotional_robots.md` and `characters/EXPRESSIONS.md`). Do not edit character files unless she asks. Never use the `thinking` face for a listener (it looks like an eye roll).
- Camera: `camera/CAMERA.md`: moving shots, a cut every 1.5 to 3 seconds, never a static single camera.
- Voices: ALWAYS `voices/speak.py` (Chatterbox): AMINA style `comforting`, DALIA regular. Read `voices/README.md`.
- Dialogue and acting rules: `formats/reaction/REACTOR_VOICE.md` and `BEHAVIOR.md`.
