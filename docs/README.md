# Practice Arabic (web app for Dalia's phone)
This folder is called `docs` so GitHub Pages can publish it (Settings, Pages, branch main, folder /docs).
Static web app (no server). Lessons in `lessons.json`: 2 Quran verses (Al-Fatihah 1:1, 1:2; Arabic copied by code from the Uthmani text) and 6 Palestinian sentences (**to be checked by a native speaker**).
- Listen: Quran audio is streamed from `cdn.islamic.network` (alquran.cloud, free for personal and educational use; keep the credit). Palestinian sentences have no built-in audio: record the right way once (kept on the phone only).
- Record: microphone in the browser. Check: Whisper (transformers.js, `onnx-community/whisper-base` or `-small`) runs INSIDE the phone's browser (WebGPU if the phone has it, else WASM). No upload, no language model, no server. The model downloads once (about 200 MB) and is cached.
- Judge: `scoring.js` compares the heard text with the expected text (words + letters). Words are green, yellow (close) or red (not heard).
- Tests: `node docs/test_scoring.mjs` (scoring). Tested end to end in headless Chromium (WASM, whisper-base) with Husary 1:1 (score 100%) and 1:2 (90%, heard "الحند").
- NOT tested: a real phone, the microphone, installing it as an app, WebGPU, Palestinian speech.
- Limits: checks WORDS only, not tajweed or exact sounds. Whisper mishears Arabic sometimes, and spells dialect like standard Arabic, so Palestinian phrases list other accepted spellings (`accept`).
- Hosting: any static host (GitHub Pages needs a public repo or a paid plan, Netlify, Cloudflare Pages). Must be https for the microphone.
