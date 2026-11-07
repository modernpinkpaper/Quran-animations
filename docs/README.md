# Practice Arabic (web app for Dalia's phone)
This folder is called `docs` so GitHub Pages can publish it (Settings, Pages, branch main, folder /docs).
Static web app (no server). The WHOLE Quran (114 chapters, `data/s1.json`..`s114.json`, built by `tools/build_quran_data.py`: Uthmani words, sounds in English letters, word timings for 4 reciters, Sahih International meaning), one verse at a time with Previous/Next, chapter and verse menus, saved scores per verse (kept on the phone) and a per-chapter summary. Palestinian sentences in `lessons.json` (6) (**to be checked by a native speaker**).
- Listen: Quran audio is streamed from `cdn.islamic.network` (alquran.cloud, free for personal and educational use; keep the credit). Palestinian sentences have no built-in audio: record the right way once (kept on the phone only).
- Record: microphone in the browser. Check: Whisper (transformers.js, `onnx-community/whisper-base` or `-small`) runs INSIDE the phone's browser (WebGPU if the phone has it, else WASM). No upload, no language model, no server. The model downloads once (about 200 MB) and is cached.
- Judge: `scoring.js` compares the heard text with the expected text (words + letters). Words are green, yellow (close) or red (not heard).
- Tests: `node docs/test_scoring.mjs` (scoring). Tested end to end in headless Chromium (WASM, whisper-base) with Husary 1:1 (score 100%) and 1:2 (90%, heard "الحند").
- NOT tested: a real phone, the microphone, installing it as an app, WebGPU, Palestinian speech.
- Limits: checks WORDS only, not tajweed or exact sounds. Whisper mishears Arabic sometimes, and spells dialect like standard Arabic, so Palestinian phrases list other accepted spellings (`accept`).
- Hosting: any static host (GitHub Pages needs a public repo or a paid plan, Netlify, Cloudflare Pages). Must be https for the microphone.

- Commercial use: NOT cleared. The verse text, the reciters' recordings and the Sahih International translation have separate terms; for personal learning only. Check each before selling or advertising.
