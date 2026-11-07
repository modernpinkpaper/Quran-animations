import { judge } from './scoring.js';
const $app = document.getElementById('app');
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } } };
const MODELS = { base: ['Fast (smaller download, about 200 MB)', 'onnx-community/whisper-base'], small: ['Better (bigger download, more accurate)', 'onnx-community/whisper-small'] };
const params = new URLSearchParams(location.search);
let lessonsData, index, S = { model: store.get('model', 'base'), plain: store.get('plain', true), reciter: store.get('reciter', '6'), speed: store.get('speed', 0.85), best: store.get('best2', {}), pos: store.get('pos', null) };
const surahCache = {};
let worker, workerState = 'idle', pending = {}, nextId = 1, progressText = '', lastError = '';

const el = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad3 = n => String(n).padStart(3, '0');

// ---------- progress ----------
const key = (s, v) => s + ':' + v;
function surahStats(sn) {
  const count = index.surahs[sn - 1].count; let done = 0, sum = 0;
  for (let v = 1; v <= count; v++) { const b = S.best[key(sn, v)]; if (b != null) { done++; sum += b; } }
  return { count, done, avg: done ? sum / done : 0 };
}
const saveBest = () => store.set('best2', S.best);
function firstUndone(sn) { const c = index.surahs[sn - 1].count; for (let v = 1; v <= c; v++) if (S.best[key(sn, v)] == null) return v; return 1; }

// ---------- the speech model (in a worker) ----------
function startWorker() {
  if (params.has('stub')) { workerState = 'ready'; return Promise.resolve(); }
  if (workerState === 'ready' || workerState === 'loading') return waitReady();
  workerState = 'loading'; progressText = 'Getting the speech checker ready (first time only)...';
  worker = new Worker('worker.js', { type: 'module' });
  worker.onmessage = e => {
    const m = e.data;
    if (m.type === 'progress') { const p = m.p; if (p.status === 'progress' && p.total) progressText = `Downloading the checker: ${Math.round(p.loaded / p.total * 100)}% (${(p.file || '').split('/').pop()})`; else if (p.status === 'ready') progressText = 'Almost ready...'; const st = document.getElementById('st'); if (st) st.textContent = progressText; }
    else if (m.type === 'ready') { workerState = 'ready'; progressText = ''; const st = document.getElementById('st'); if (st) st.textContent = ''; }
    else if (m.type === 'result') { pending[m.id]?.resolve(m.text); delete pending[m.id]; }
    else if (m.type === 'error') { if (m.id) { pending[m.id]?.reject(new Error(m.message)); delete pending[m.id]; } else { workerState = 'error'; lastError = m.message; progressText = 'The checker could not start: ' + m.message; } }
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


// ---------- my takes (your recordings, saved only on this phone) ----------
const idb = () => new Promise((res, rej) => { const r = indexedDB.open('practice-takes', 1); r.onupgradeneeded = () => { const st = r.result.createObjectStore('takes', { keyPath: 'id', autoIncrement: true }); st.createIndex('k', 'k'); }; r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
const tx = async (mode, fn) => { const db = await idb(); return new Promise((res, rej) => { const t = db.transaction('takes', mode), st = t.objectStore('takes'); const out = fn(st); t.oncomplete = () => res(out.result !== undefined ? out.result : undefined); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error); }); };
async function listTakes(k) { try { const all = await tx('readonly', st => st.index('k').getAll(k)); return (all || []).sort((a, b) => a.t - b.t); } catch { return []; } }
async function saveTake(take) {
  await tx('readwrite', st => st.add(take));
  try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch { }
  const all = await listTakes(take.k); const extra = all.length - 25;   // keep the newest 25 tries per verse
  if (extra > 0) for (const o of all.slice(0, extra)) await tx('readwrite', st => st.delete(o.id));
}
const delTake = id => tx('readwrite', st => st.delete(id));
const fmtDate = t => new Date(t).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
async function takesCard(k, box) {
  const takes = await listTakes(k);
  if (!takes.length) { box.innerHTML = ''; return; }
  const trend = takes.slice(-8).map(t => Math.round(t.score * 100) + '%').join(' → ');
  box.innerHTML = `<div class="card"><b>My takes</b><p class="mut">${takes.length} saved on this phone (each new recording is added here)${takes.length > 1 ? '. Oldest to newest: ' + trend : ''}</p>${takes.slice().reverse().map(t => `<div class="row take" style="margin:8px 0"><span>${esc(fmtDate(t.t))} · <b>${Math.round(t.score * 100)}%</b></span><span><button class="alt tk" data-id="${t.id}" style="padding:8px 12px">▶</button> <button class="alt dl" data-id="${t.id}" style="padding:8px 12px">✕</button></span></div>`).join('')}<audio id="tkau" style="display:none"></audio></div>`;
  const au = box.querySelector('#tkau');
  box.querySelectorAll('.tk').forEach(b => b.onclick = () => { const t = takes.find(x => x.id === +b.dataset.id); if (!t || !t.blob) return; au.src = URL.createObjectURL(t.blob); au.play(); });
  box.querySelectorAll('.dl').forEach(b => b.onclick = async () => { await delTake(+b.dataset.id); takesCard(k, box); });
}

// ---------- screens ----------
let view = { name: 'home' }, result = null, busy = '', recording = false, resetArmed = false;
function go(v) { view = v; result = null; busy = ''; resetArmed = false; render(); window.scrollTo(0, 0); }
async function loadSurah(n) { if (!surahCache[n]) { const r = await fetch(`data/s${n}.json`); surahCache[n] = await r.json(); } return surahCache[n]; }
async function render() {
  $app.innerHTML = '';
  if (view.name === 'home') $app.append(home());
  else if (view.name === 'settings') $app.append(settings());
  else if (view.name === 'palestinian') $app.append(palView(lessonsData.lessons.find(l => l.id === view.id)));
  else if (view.name === 'surah') {
    $app.append(el('<p class="mut" style="margin-top:30px">Loading...</p>'));
    try { const sd = await loadSurah(view.s); if (view.name !== 'surah') return; $app.innerHTML = ''; $app.append(surahView(sd)); } catch (e) { $app.innerHTML = '<p>Could not load this chapter. Check your internet and try again.</p>'; }
  }
}
const surahLabel = n => { const s = index.surahs[n - 1], st = surahStats(n); return `${n}. ${s.en} (\u200F${s.ar}\u200F)\u200E · ${st.done}/${s.count}${st.done ? ' · ' + Math.round(st.avg * 100) + '%' : ''}`; };
function home() {
  const root = el('<div></div>');
  root.append(el(`<div class="row"><h1>Practice</h1><button class="alt" id="set">Settings</button></div>`));
  root.append(el(`<p class="mut">Listen, say it yourself, and see which words the program heard.</p>`));
  root.append(el('<h2>Quran</h2>'));
  const cont = S.pos ? `<button id="go" style="width:100%;margin-top:10px">Continue: ${esc(index.surahs[S.pos.s - 1].en)}, verse ${S.pos.v}</button>` : '';
  const card = el(`<div class="card"><button class="pick" id="pick"><span>Choose a chapter or verse, search, or duas</span><span>▾</span></button>${cont}
  <p class="mut">You practise one verse at a time, then tap Next. The menu shows what you finished and your average for each chapter.</p></div>`);
  card.querySelector('#pick').onclick = () => openPicker();
  const gob = card.querySelector('#go'); if (gob) gob.onclick = () => go({ name: 'surah', s: S.pos.s, v: S.pos.v });
  root.append(card);
  root.append(el('<h2>Palestinian Arabic</h2>')); root.append(el('<p class="mut">Everyday sentences.</p>'));
  for (const l of lessonsData.lessons) {
    const b = S.best['p:' + l.id]; const btn = el(`<button class="lesson"><span><b>${esc(l.title)}</b><br><span class="mut">${esc(l.ar)}</span></span><span>${b != null ? Math.round(b * 100) + '%' : '›'}</span></button>`);
    btn.onclick = () => go({ name: 'palestinian', id: l.id }); root.append(btn);
  }
  root.append(el(`<p class="note">This app checks the <b>words</b> the program hears. It does not judge tajweed or the exact sounds. A teacher is still needed for that. Palestinian sentences should be checked by a native speaker.</p>`));
  root.querySelector('#set').onclick = () => go({ name: 'settings' }); return root;
}
function settings() {
  const root = el(`<div><button class="back" id="b">‹ Back</button><h1>Settings</h1>
  <label>Speech checker</label><select id="m">${Object.entries(MODELS).map(([k, v]) => `<option value="${k}" ${S.model === k ? 'selected' : ''}>${v[0]}</option>`).join('')}</select>
  <p class="mut">It downloads once and then works without internet. Your voice stays on your phone.</p>
  <label>Quran reciter</label><select id="r">${index.reciters.map(([k, n]) => `<option value="${k}" ${S.reciter === k ? 'selected' : ''}>${n}</option>`).join('')}</select>
  <label>Playback speed: <span id="sv">${S.speed}</span>x</label><input id="sp" type="range" min="0.5" max="1" step="0.05" value="${S.speed}">
  <p class="note"><b>Credits.</b> Verse text, word timings, sounds and chapter names: Quran.com API. Recitation audio: EveryAyah and Quran Audio mirrors. English meaning: Sahih International. These are for personal learning. Commercial use would need permission from the reciters and the translation's owners.</p></div>`);
  root.querySelector('#b').onclick = () => go({ name: 'home' });
  root.querySelector('#m').onchange = e => { S.model = e.target.value; store.set('model', S.model); workerState = 'idle'; if (worker) worker.terminate(); };
  root.querySelector('#r').onchange = e => { S.reciter = e.target.value; store.set('reciter', S.reciter); };
  root.querySelector('#sp').oninput = e => { S.speed = +e.target.value; store.set('speed', S.speed); root.querySelector('#sv').textContent = S.speed; };
  return root;
}

// ---------- shared: listen + record + result cards ----------
// cfg: { ar (expected text), accept, audioUrl, timings (per word [start,end] ms) or null, myrefKey (own recording) , onScore(score) }
function practice(root, cfg) {
  const A = cfg.audioUrl; const mine = cfg.myrefKey ? store.get(cfg.myrefKey, null) : null;
  const listen = el(`<div class="card"><div class="row"><b>1. Listen</b><span class="mut">${A ? 'reciter' : 'your own recording'}</span></div><audio id="au" preload="none" style="display:none"></audio><div class="row" style="margin-top:10px"><button id="play">▶ Play</button>${A ? '' : `<button class="alt" id="mk">● ${mine ? 'Record again' : 'Record the right way'}</button>`}</div>${cfg.meaning ? `<div class="meaning"><b>Meaning</b><p>${esc(cfg.meaning)}</p><p class="mut">Sahih International (an English interpretation of the meaning, not the Quran itself).</p></div>` : ''}${cfg.timings ? '<p class="mut">The words change color as the reciter says them: pink is now, green is done.</p>' : ''}${A ? '' : '<p class="mut">No recording of a Palestinian speaker is built in yet. Ask someone who speaks Palestinian to say it, and record it here once (it stays on your phone).</p>'}</div>`);
  const au = listen.querySelector('#au'); const src = A || mine;
  const T = cfg.timings;
  const setWords = ms => { root.querySelectorAll('.w').forEach((n, i) => { n.classList.remove('now', 'done'); const t = T && T[i]; if (t && t[1] > 0) { if (ms >= t[1]) n.classList.add('done'); else if (ms >= t[0]) n.classList.add('now'); } }); };
  let raf = 0; const tick = () => { if (T) setWords(au.currentTime * 1000); if (!au.paused && !au.ended) raf = requestAnimationFrame(tick); };
  au.onplay = () => { cancelAnimationFrame(raf); tick(); }; au.onended = () => { if (T) { root.querySelectorAll('.w').forEach(n => { n.classList.remove('now'); n.classList.add('done'); }); } };
  if (T) window.__setWords = setWords;
  listen.querySelector('#play').onclick = () => { if (!src) { alert('There is no recording yet. Use "Record the right way" first.'); return; } if (T) setWords(-1); au.src = src; au.playbackRate = S.speed; au.preservesPitch = true; au.play(); };
  const mk = listen.querySelector('#mk'); if (mk) mk.onclick = async () => { try { if (!rec || rec.state !== 'recording') { await startRec(); mk.textContent = '■ Stop'; } else { const b = await stopRec(); store.set(cfg.myrefKey, await blobToDataUrl(b)); render(); } } catch (e) { alert('The microphone did not start: ' + e.message); } };
  root.append(listen);
  const card = el(`<div class="card"><b>2. Say it</b><p class="mut">Find a quiet place. Say it slowly. Tap again to stop. Every recording is saved with its date and time, so you can record again and compare.</p><button class="rec ${recording ? 'on' : ''}" id="rb">${recording ? '■ Stop and check' : '● Record'}</button><p class="mut" id="st">${esc(busy || (workerState === 'loading' ? progressText : ''))}</p></div>`);
  card.querySelector('#rb').onclick = async () => {
    try {
      if (!recording) { if (!params.has('stub') || params.has('mic')) await startRec(); recording = true; result = null; render(); return; }
      recording = false; busy = 'Checking...'; render();
      let heard, seconds = 0, blob = null;
      if (!params.has('stub') || params.has('mic')) blob = await stopRec();
      if (params.has('stub')) heard = await transcribe(null); else { const m = await toMono16k(blob); seconds = m.seconds; heard = await transcribe(m.audio); }
      result = judge({ ar: cfg.ar, accept: cfg.accept }, heard); result.seconds = seconds; busy = ''; cfg.onScore(result.score);
      if (cfg.takeKey && blob) { try { await saveTake({ k: cfg.takeKey, t: Date.now(), score: result.score, heard: result.heard, seconds, blob }); } catch (e) { result.saveError = true; } }
      render();
    } catch (e) { recording = false; busy = ''; render(); alert('Something went wrong: ' + e.message); }
  };
  root.append(card);
  if (result) root.append(resultCard(result));
  if (result && result.saveError) root.append(el('<p class="note">Your recording could not be saved on this phone (not enough space or the browser blocked it). The score was still kept.</p>'));
  if (cfg.takeKey) { const box = el('<div id="takes"></div>'); root.append(box); takesCard(cfg.takeKey, box); }
}
function resultCard(r) {
  const pct = Math.round(r.score * 100);
  const msg = r.heard === '' ? 'I could not hear any words. Try again in a quieter place, closer to the phone.' : pct >= 85 && r.words.every(w => w.status === 'good') ? 'The program heard every word clearly. Well done.' : pct >= 85 ? 'Very close. One word was not exact. Try that word again.' : pct >= 60 ? 'Close. Some words were not clear. Say the red and yellow ones again, slowly.' : 'The program could not hear most of the words. Slow down, say each word clearly, and try again.';
  return el(`<div class="card"><b>3. Result</b><div class="big">${pct}%</div><div class="bar"><i style="width:${pct}%"></i></div><p style="text-align:center">${esc(msg)}</p>
  <div class="chips">${r.words.map(w => `<div class="chip ${w.status}">${esc(w.exp)}<small>${w.status === 'good' ? '✓' : w.status === 'close' ? 'heard: ' + esc(w.heard) : 'not heard'}</small></div>`).join('')}</div>
  <p class="mut">The program heard: <span dir="rtl">${esc(r.heard || '(nothing)')}</span></p>${r.seconds ? `<p class="mut">You took ${r.seconds.toFixed(1)} seconds.</p>` : ''}
  <p class="note">This only checks the words the program heard. The program sometimes mishears Arabic, so a red word is not proof of a mistake. It cannot judge tajweed or the exact sounds.</p></div>`);
}

// ---------- Quran: one verse at a time ----------
function surahView(sd) {
  const sn = view.s, meta = index.surahs[sn - 1], count = meta.count; const vi = Math.min(Math.max(view.v, 1), count); view.v = vi;
  S.pos = { s: sn, v: vi }; store.set('pos', S.pos);
  const V = sd.verses[vi - 1], st = surahStats(sn), best = S.best[key(sn, vi)];
  const root = el('<div class="withnav"></div>');
  root.append(el('<button class="back" id="b">‹ Home</button>'));
  root.append(el(`<div class="card"><div class="row"><label style="margin:0">Chapters &amp; verses</label><span class="mut" style="text-align:right"><b>${st.done} of ${count} done</b>${st.done ? ` · avg ${Math.round(st.avg * 100)}%` : ''}</span></div><button class="pick" id="pick" style="margin-top:8px"><span>${esc(meta.en)} · verse ${vi}</span><span>▾</span></button></div>`));
  const showPlain = S.plain;
  const wordsHtml = `<div class="words">${V.w.map((w, i) => `<div class="w" data-i="${i}"><span class="wa">${esc(w[0])}</span>${showPlain ? `<span class="wt">${esc(w[1])}</span>` : ''}</div>`).join('')}</div>`;
  root.append(el(`<div class="card"><div class="row"><b>${esc(meta.en)} ${sn}:${vi}</b>${best != null ? `<span class="mut">best ${Math.round(best * 100)}% <button class="alt" id="clr" style="padding:6px 10px;font-size:14px">Clear</button></span>` : ''}</div>${wordsHtml}<p class="mut" style="text-align:center"><label style="display:inline"><input type="checkbox" id="pl" ${showPlain ? 'checked' : ''}> show the sounds in English letters</label></p></div>`));
  const rid = index.reciters.some(r => r[0] === S.reciter) ? S.reciter : '6';
  practice(root, { takeKey: key(sn, vi), meaning: V.en, ar: V.w.map(w => w[0]).join(' '), audioUrl: index.bases[rid] + pad3(sn) + pad3(vi) + '.mp3', timings: V.t[rid] || null,
    onScore: sc => { const b = S.best[key(sn, vi)]; if (b == null || sc > b) { S.best[key(sn, vi)] = sc; saveBest(); } } });
  root.append(el(`<div class="navbar"><button class="alt" id="prev" ${sn === 1 && vi === 1 ? 'disabled' : ''}>‹ Previous</button><button id="next" ${sn === 114 && vi === count ? 'disabled' : ''}>${vi === count && sn < 114 ? 'Next chapter ›' : 'Next ›'}</button></div>`));
  root.querySelector('#b').onclick = () => go({ name: 'home' });
  root.querySelector('#pick').onclick = () => openPicker();
  root.querySelector('#pl').onchange = e => { S.plain = e.target.checked; store.set('plain', S.plain); render(); };
  const clr = root.querySelector('#clr'); if (clr) clr.onclick = () => { delete S.best[key(sn, vi)]; saveBest(); result = null; render(); };
  const step = d => { let s = sn, v = vi + d; if (v > count) { s = sn + 1; v = 1; } else if (v < 1) { s = sn - 1; v = index.surahs[s - 1].count; } go({ name: 'surah', s, v }); };
  root.querySelector('#prev').onclick = () => step(-1); root.querySelector('#next').onclick = () => step(1);
  return root;
}


// ---------- the picker: chapters and verses in one menu, search the meaning, dua index ----------
let searchData = null, duasData = null;
async function loadExtras() { if (!searchData) searchData = await (await fetch('data/search.json')).json(); if (!duasData) duasData = await (await fetch('data/duas.json')).json(); }
const rx = w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function hl(text, words) { if (!words.length) return esc(text); const re = new RegExp('(' + words.map(rx).join('|') + ')', 'gi'); return text.split(re).map((p, i) => i % 2 ? '<mark>' + esc(p) + '</mark>' : esc(p)).join(''); }
function snippet(text, words) { let i = 0; if (words.length) { const m = text.search(new RegExp(words.map(rx).join('|'), 'i')); i = Math.max(0, m - 60); } return (i > 0 ? '… ' : '') + text.slice(i, i + 230) + (i + 230 < text.length ? ' …' : ''); }
function openPicker() {
  const ov = el(`<div class="overlay"><div class="sheet"><div class="row" style="margin-bottom:8px"><b style="font-size:20px">Go to</b><button class="alt" id="x">Close</button></div>
    <input id="q" type="search" placeholder="Search the meaning (patience, mercy...) or type 2:255" autocomplete="off">
    <div class="tabs"><button class="tab on" data-t="ch">Chapters</button><button class="tab" data-t="du">Duas by need</button></div><div id="body"></div></div></div>`);
  document.body.append(ov); document.body.style.overflow = 'hidden';
  const body = ov.querySelector('#body'), q = ov.querySelector('#q'); let tab = 'ch', openCh = view.name === 'surah' ? view.s : null, armed = false, timer = 0;
  const close = () => { ov.remove(); document.body.style.overflow = ''; };
  const jump = (s, v) => { close(); go({ name: 'surah', s, v }); };
  const curV = view.name === 'surah' ? view.v : 0, curS = view.name === 'surah' ? view.s : 0;
  function chapters() {
    body.innerHTML = '';
    for (const sm of index.surahs) {
      const st = surahStats(sm.n), row = el(`<div><button class="chhead"><span>${sm.n}. ${esc(sm.en)} <span class="mut">(‏${esc(sm.ar)}‏)‎</span></span><span class="mut">${st.done}/${sm.count}${st.done ? ' · ' + Math.round(st.avg * 100) + '%' : ''}</span></button></div>`);
      row.querySelector('.chhead').onclick = () => { openCh = openCh === sm.n ? null : sm.n; armed = false; chapters(); const o = body.querySelector('.open'); if (o) o.scrollIntoView({ block: 'start' }); };
      if (openCh === sm.n) {
        row.classList.add('open');
        const grid = el('<div class="vgrid"></div>');
        for (let v = 1; v <= sm.count; v++) { const b = S.best[key(sm.n, v)]; const c = el(`<button class="vchip ${b != null ? 'done' : ''} ${sm.n === curS && v === curV ? 'cur' : ''}" title="${b != null ? Math.round(b * 100) + '%' : ''}">${v}${b != null ? '<br><small>' + Math.round(b * 100) + '%</small>' : ''}</button>`); c.onclick = () => jump(sm.n, v); grid.append(c); }
        row.append(grid);
        const acts = el(`<div class="row" style="gap:8px"><button class="alt" id="nd" style="flex:1">First verse not done</button><button class="alt" id="cl" style="flex:1">${armed ? 'Tap again to clear' : 'Clear chapter scores'}</button></div>`);
        acts.querySelector('#nd').onclick = () => jump(sm.n, firstUndone(sm.n));
        acts.querySelector('#cl').onclick = () => { if (!armed) { armed = true; chapters(); return; } for (let v = 1; v <= sm.count; v++) delete S.best[key(sm.n, v)]; saveBest(); armed = false; chapters(); if (view.name === 'surah') render(); };
        row.append(acts);
      }
      body.append(row);
    }
    const o = body.querySelector('.open'); if (o && !body.dataset.scrolled) { body.dataset.scrolled = '1'; setTimeout(() => o.scrollIntoView({ block: 'start' }), 0); }
  }
  async function duas() {
    body.innerHTML = '<p class="mut">Loading...</p>'; await loadExtras(); body.innerHTML = '';
    body.append(el('<p class="note">Duas (supplications) that appear in the Quran, grouped by what you need. The grouping is mine, so please check with a teacher how and when to use them. Tap one to practise it.</p>'));
    for (const c of duasData) {
      body.append(el(`<h2 style="margin:18px 0 4px">${esc(c.need)}</h2>`));
      for (const it of c.items) {
        const text = searchData[it.s][it.v - 1], done = S.best[key(it.s, it.v)] != null;
        const r = el(`<button class="res"><b>${esc(index.surahs[it.s - 1].en)} ${it.s}:${it.v}</b>${done ? ' ✓' : ''}${it.note ? ' <span class="mut">· ' + esc(it.note) + '</span>' : ''}<br><span class="mut">${esc(snippet(text, []))}</span></button>`);
        r.onclick = () => jump(it.s, it.v); body.append(r);
      }
    }
  }
  async function search(text) {
    const m = text.trim().match(/^(\d{1,3})\s*[:.]\s*(\d{1,3})$/);
    if (m) { const s = +m[1], v = +m[2]; body.innerHTML = ''; if (s >= 1 && s <= 114 && v >= 1 && v <= index.surahs[s - 1].count) { const r = el(`<button class="res"><b>Go to ${esc(index.surahs[s - 1].en)} ${s}:${v}</b></button>`); r.onclick = () => jump(s, v); body.append(r); } else body.append(el('<p class="mut">That chapter and verse does not exist.</p>')); return; }
    body.innerHTML = '<p class="mut">Searching...</p>'; await loadExtras();
    if (q.value.trim() !== text.trim()) return;
    const words = text.toLowerCase().split(/\s+/).filter(Boolean); body.innerHTML = '';
    const names = index.surahs.filter(s => s.en.toLowerCase().includes(text.trim().toLowerCase()) || s.meaning.toLowerCase().includes(text.trim().toLowerCase())).slice(0, 5);
    for (const s of names) { const r = el(`<button class="res"><b>Chapter ${s.n}: ${esc(s.en)}</b> <span class="mut">(${esc(s.meaning)}) · ${s.count} verses</span></button>`); r.onclick = () => jump(s.n, firstUndone(s.n)); body.append(r); }
    const hits = [];
    for (let sn = 1; sn <= 114; sn++) { const arr = searchData[sn]; for (let i = 0; i < arr.length; i++) { const t = arr[i].toLowerCase(); if (words.every(w => t.includes(w))) hits.push([sn, i + 1]); } }
    body.append(el(`<p class="mut">${hits.length} verse${hits.length === 1 ? '' : 's'} found${hits.length > 80 ? ' (showing the first 80, add more words to narrow it)' : ''}</p>`));
    for (const [sn, v] of hits.slice(0, 80)) { const t = searchData[sn][v - 1]; const r = el(`<button class="res"><b>${esc(index.surahs[sn - 1].en)} ${sn}:${v}</b>${S.best[key(sn, v)] != null ? ' ✓' : ''}<br><span class="mut">${hl(snippet(t, words), words)}</span></button>`); r.onclick = () => jump(sn, v); body.append(r); }
  }
  function show() { if (q.value.trim().length >= 2) search(q.value); else if (tab === 'ch') chapters(); else duas(); }
  ov.querySelector('#x').onclick = close; ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelectorAll('.tab').forEach(t => t.onclick = () => { tab = t.dataset.t; ov.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === t)); q.value = ''; show(); });
  q.oninput = () => { clearTimeout(timer); timer = setTimeout(show, 200); };
  show();
}

// ---------- Palestinian sentences ----------
function palView(l) {
  const root = el('<div class="withnav"></div>');
  root.append(el('<button class="back" id="b">‹ Back</button>')); root.querySelector('#b').onclick = () => go({ name: 'home' });
  const best = S.best['p:' + l.id];
  root.append(el(`<div class="card"><div class="ar">${esc(l.ar)}</div><p class="mut" style="text-align:center">${esc(l.translit)}</p><p style="text-align:center">${esc(l.en)}</p>${best != null ? `<p class="mut" style="text-align:center">best ${Math.round(best * 100)}% <button class="alt" id="clr" style="padding:6px 10px;font-size:14px">Clear</button></p>` : ''}</div>`));
  practice(root, { takeKey: 'p:' + l.id, ar: l.ar, accept: l.accept, audioUrl: null, timings: null, myrefKey: 'myref_' + l.id, onScore: sc => { const b = S.best['p:' + l.id]; if (b == null || sc > b) { S.best['p:' + l.id] = sc; saveBest(); } } });
  const clr = root.querySelector('#clr'); if (clr) clr.onclick = () => { delete S.best['p:' + l.id]; saveBest(); result = null; render(); };
  return root;
}

async function main() {
  [lessonsData, index] = await Promise.all([fetch('lessons.json').then(r => r.json()), fetch('data/index.json').then(r => r.json())]);
  if (params.has('test')) window.__test = { toMono16k, transcribe, judge, startWorker, openPicker };
  render();
  if ('serviceWorker' in navigator && !params.has('stub')) navigator.serviceWorker.register('sw.js').catch(() => { });
  if (!params.has('stub')) setTimeout(() => { if (workerState === 'idle') startWorker().catch(() => { }); }, 1500);
}
main();
