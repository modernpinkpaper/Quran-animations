import { judge } from './scoring.js';
const $app = document.getElementById('app');
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } } };
const MODELS = { base: ['Fast (smaller download, about 200 MB)', 'onnx-community/whisper-base'], small: ['Better (bigger download, more accurate)', 'onnx-community/whisper-small'] };
const params = new URLSearchParams(location.search);
let data, S = { model: store.get('model', 'base'), plain: store.get('plain', true), reciter: store.get('reciter', '6'), speed: store.get('speed', 0.85), best: store.get('best', {}) };
let worker, workerState = 'idle', pending = {}, nextId = 1;   // idle | loading | ready | error
let progressText = '', lastError = '';

function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- the speech model (in a worker) ----------
function startWorker() {
  if (params.has('stub')) { workerState = 'ready'; return Promise.resolve(); }
  if (workerState === 'ready' || workerState === 'loading') return waitReady();
  workerState = 'loading'; progressText = 'Getting the speech checker ready (first time only)...';
  worker = new Worker('worker.js', { type: 'module' });
  worker.onmessage = e => {
    const m = e.data;
    if (m.type === 'progress') { const p = m.p; if (p.status === 'progress' && p.total) progressText = `Downloading the checker: ${Math.round(p.loaded / p.total * 100)}% (${(p.file || '').split('/').pop()})`; else if (p.status === 'ready') progressText = 'Almost ready...'; render(true); }
    else if (m.type === 'ready') { workerState = 'ready'; progressText = ''; render(true); }
    else if (m.type === 'result') { pending[m.id]?.resolve(m.text); delete pending[m.id]; }
    else if (m.type === 'error') { if (m.id) { pending[m.id]?.reject(new Error(m.message)); delete pending[m.id]; } else { workerState = 'error'; lastError = m.message; progressText = 'The checker could not start: ' + m.message; render(true); } }
  };
  worker.postMessage({ type: 'load', model: MODELS[S.model][1] });
  return waitReady();
}
function waitReady() { return new Promise((res, rej) => { const t = setInterval(() => { if (workerState === 'ready') { clearInterval(t); res(); } else if (workerState === 'error') { clearInterval(t); rej(new Error('The checker could not start: ' + lastError)); } }, 300); }); }
async function transcribe(audio) {
  if (params.has('stub')) return params.get('stub');
  await startWorker();
  const id = nextId++; return new Promise((resolve, reject) => { pending[id] = { resolve, reject }; worker.postMessage({ type: 'transcribe', id, audio }, [audio.buffer]); });
}

// ---------- recording ----------
let rec = null, chunks = [], stream = null;
async function startRec() {
  stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
  chunks = []; rec = new MediaRecorder(stream); rec.ondataavailable = e => e.data.size && chunks.push(e.data); rec.start();
}
function stopRec() { return new Promise(res => { rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); res(new Blob(chunks, { type: rec.mimeType || 'audio/webm' })); }; rec.stop(); }); }
async function toMono16k(blob) {
  const ab = await blob.arrayBuffer(); const AC = window.AudioContext || window.webkitAudioContext; const ctx = new AC();
  const buf = await ctx.decodeAudioData(ab); ctx.close();
  const off = new OfflineAudioContext(1, Math.ceil(buf.duration * 16000), 16000); const src = off.createBufferSource(); src.buffer = buf; src.connect(off.destination); src.start();
  const out = await off.startRendering(); return { audio: out.getChannelData(0).slice(), seconds: buf.duration };
}
const blobToDataUrl = b => new Promise(r => { const f = new FileReader(); f.onload = () => r(f.result); f.readAsDataURL(b); });

// ---------- screens ----------
let view = { name: 'home', id: null }, result = null, busy = '', recording = false;
function go(name, id) { view = { name, id }; result = null; busy = ''; render(); window.scrollTo(0, 0); }
function render(keepFocus) {
  $app.innerHTML = '';
  if (view.name === 'home') $app.append(home()); else if (view.name === 'settings') $app.append(settings()); else $app.append(lessonView(data.lessons.find(l => l.id === view.id)));
}
function home() {
  const root = el('<div></div>');
  root.append(el(`<div class="row"><h1>Practice</h1><button class="alt" id="set">Settings</button></div>`));
  root.append(el(`<p class="mut">Listen, say it yourself, and see which words the program heard.</p>`));
  for (const [kind, title, sub] of [['quran', 'Quran', 'Say the verse after the reciter.'], ['palestinian', 'Palestinian Arabic', 'Everyday sentences.']]) {
    root.append(el(`<h2>${title}</h2>`)); root.append(el(`<p class="mut">${sub}</p>`));
    for (const l of data.lessons.filter(x => x.kind === kind)) {
      const b = S.best[l.id]; const btn = el(`<button class="lesson"><span><b>${esc(l.title)}</b><br><span class="mut">${esc(kind === 'quran' ? l.en.slice(0, 70) + '...' : l.ar)}</span></span><span>${b != null ? Math.round(b * 100) + '%' : '›'}</span></button>`);
      btn.onclick = () => go('lesson', l.id); root.append(btn);
    }
  }
  root.append(el(`<p class="note">This app checks the <b>words</b> the program hears. It does not judge tajweed or the exact sounds. A teacher is still needed for that. Palestinian sentences should be checked by a native speaker.</p>`));
  root.querySelector('#set').onclick = () => go('settings'); return root;
}
function settings() {
  const root = el(`<div><button class="back" id="b">‹ Back</button><h1>Settings</h1>
  <label>Speech checker</label><select id="m">${Object.entries(MODELS).map(([k, v]) => `<option value="${k}" ${S.model === k ? 'selected' : ''}>${v[0]}</option>`).join('')}</select>
  <p class="mut">It downloads once and then works without internet. Your voice stays on your phone.</p>
  <label>Quran reciter</label><select id="r">${data.reciters.map(([k, n]) => `<option value="${k}" ${S.reciter === k ? 'selected' : ''}>${n}</option>`).join('')}</select>
  <label>Playback speed: <span id="sv">${S.speed}</span>x</label><input id="sp" type="range" min="0.5" max="1" step="0.05" value="${S.speed}">
  <p class="note">Words, timings and sounds come from the Quran.com API. Recitation audio is streamed from the EveryAyah / Quran Audio mirrors (free to listen; keep the credit). English translation: Sahih International.</p></div>`);
  root.querySelector('#b').onclick = () => go('home');
  root.querySelector('#m').onchange = e => { S.model = e.target.value; store.set('model', S.model); workerState = 'idle'; if (worker) worker.terminate(); };
  root.querySelector('#r').onchange = e => { S.reciter = e.target.value; store.set('reciter', S.reciter); };
  root.querySelector('#sp').oninput = e => { S.speed = +e.target.value; store.set('speed', S.speed); root.querySelector('#sv').textContent = S.speed; };
  return root;
}
function lessonView(l) {
  const root = el(`<div><button class="back" id="b">‹ Back</button></div>`);
  root.querySelector('#b').onclick = () => go('home');
  const showPlain = S.plain;
  const wordsHtml = l.words ? `<div class="words" id="words">${l.words.map((w, i) => `<div class="w" data-i="${i}"><span class="wa">${esc(w.ar)}</span>${showPlain ? `<span class="wt">${esc(w.plain)}</span>` : ''}</div>`).join('')}</div>` : `<div class="ar">${esc(l.ar)}</div>`;
  root.append(el(`<div class="card">${wordsHtml}${l.translit ? `<p class="mut" style="text-align:center">${esc(l.translit)}</p>` : ''}<p style="text-align:center">${esc(l.en)}</p>${l.ref ? `<p class="mut" style="text-align:center">Quran ${l.ref}</p>` : ''}${l.words ? `<p class="mut" style="text-align:center"><label style="display:inline"><input type="checkbox" id="pl" ${showPlain ? 'checked' : ''}> show the sounds in English letters</label></p>` : ''}</div>`));
  const plBox = root.querySelector('#pl'); if (plBox) plBox.onchange = e => { S.plain = e.target.checked; store.set('plain', S.plain); render(); };
  // listen
  const mine = store.get('myref_' + l.id, null);
  const A = l.audio && (l.audio[S.reciter] || l.audio[Object.keys(l.audio)[0]]);
  const listen = el(`<div class="card"><div class="row"><b>1. Listen</b><span class="mut">${A ? 'reciter' : 'your own recording'}</span></div><audio id="au" preload="none" style="display:none"></audio><div class="row" style="margin-top:10px"><button id="play">▶ Play</button>${A ? '' : `<button class="alt" id="mk">● ${mine ? 'Record again' : 'Record the right way'}</button>`}</div>${A ? '<p class="mut">The words change color as the reciter says them: pink is now, green is done.</p>' : '<p class="mut">No recording of a Palestinian speaker is built in yet. Ask someone who speaks Palestinian to say it, and record it here once (it stays on your phone).</p>'}</div>`);
  const au = listen.querySelector('#au'); const src = A ? A.url : mine;
  const setWords = ms => { root.querySelectorAll('.w').forEach((n, i) => { const seg = A.segs.find(s => s[0] === i + 1); n.classList.remove('now', 'done'); if (seg) { if (ms >= seg[2]) n.classList.add('done'); else if (ms >= seg[1]) n.classList.add('now'); } }); };
  let raf = 0; const tick = () => { if (A) setWords(au.currentTime * 1000); if (!au.paused && !au.ended) raf = requestAnimationFrame(tick); };
  au.onplay = () => { cancelAnimationFrame(raf); tick(); }; au.onended = () => { if (A) setWords(1e9); };
  if (A) window.__setWords = setWords;
  listen.querySelector('#play').onclick = () => { if (!src) { alert('There is no recording yet. Use "Record the right way" first.'); return; } if (A) setWords(-1); au.src = src; au.playbackRate = S.speed; au.preservesPitch = true; au.play(); };
  const mk = listen.querySelector('#mk'); if (mk) mk.onclick = async () => { try { if (!rec || rec.state !== 'recording') { await startRec(); mk.textContent = '■ Stop'; } else { const b = await stopRec(); store.set('myref_' + l.id, await blobToDataUrl(b)); render(); } } catch (e) { alert('The microphone did not start: ' + e.message); } };
  root.append(listen);
  // record
  const card = el(`<div class="card"><b>2. Say it</b><p class="mut">Find a quiet place. Say it slowly. Tap again to stop.</p><button class="rec" id="rb">${recording ? '■ Stop and check' : '● Record'}</button><p class="mut" id="st">${esc(busy || (workerState === 'loading' ? progressText : ''))}</p></div>`);
  card.querySelector('#rb').onclick = async () => {
    try {
      if (!recording) { if (!params.has('stub')) await startRec(); recording = true; result = null; render(); return; }
      recording = false; busy = 'Checking...'; render();
      let heard, seconds = 0;
      if (params.has('stub')) heard = await transcribe(null); else { const blob = await stopRec(); const m = await toMono16k(blob); seconds = m.seconds; heard = await transcribe(m.audio); }
      result = judge(l, heard); result.seconds = seconds; busy = ''; const b = S.best[l.id] || 0; if (result.score > b) { S.best[l.id] = result.score; store.set('best', S.best); } render();
    } catch (e) { recording = false; busy = ''; render(); alert('Something went wrong: ' + e.message); }
  };
  root.append(card);
  if (result) root.append(resultCard(result));
  return root;
}
function resultCard(r) {
  const pct = Math.round(r.score * 100);
  const msg = r.heard === '' ? 'I could not hear any words. Try again in a quieter place, closer to the phone.' : pct >= 85 && r.words.every(w => w.status === 'good') ? 'The program heard every word clearly. Well done.' : pct >= 85 ? 'Very close. One word was not exact. Try that word again.' : pct >= 60 ? 'Close. Some words were not clear. Say the red and yellow ones again, slowly.' : 'The program could not hear most of the words. Slow down, say each word clearly, and try again.';
  const c = el(`<div class="card"><b>3. Result</b><div class="big">${pct}%</div><div class="bar"><i style="width:${pct}%"></i></div><p style="text-align:center">${esc(msg)}</p>
  <div class="chips">${r.words.map(w => `<div class="chip ${w.status}">${esc(w.exp)}<small>${w.status === 'good' ? '✓' : w.status === 'close' ? 'heard: ' + esc(w.heard) : 'not heard'}</small></div>`).join('')}</div>
  <p class="mut">The program heard: <span dir="rtl">${esc(r.heard || '(nothing)')}</span></p>${r.seconds ? `<p class="mut">You took ${r.seconds.toFixed(1)} seconds.</p>` : ''}
  <p class="note">This only checks the words the program heard. The program sometimes mishears Arabic, so a red word is not proof of a mistake. It cannot judge tajweed or the exact sounds.</p></div>`);
  return c;
}

async function main() {
  data = await (await fetch('lessons.json')).json();
  render();
  if ('serviceWorker' in navigator && !params.has('stub')) navigator.serviceWorker.register('sw.js').catch(() => { });
  if (!params.has('stub')) setTimeout(() => { if (workerState === 'idle') startWorker().catch(() => { }); }, 1500);   // start downloading the checker in the background
}
if (params.has('test')) window.__test = { toMono16k, transcribe, judge, startWorker };
main();
