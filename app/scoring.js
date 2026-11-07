// Compares what the speech program HEARD with what you were SUPPOSED to say. No language model: just text matching.
export function normalize(s) {
  return (s || '')
    .replace(/[ً-ٰٟۖ-ۭـ]/g, '')   // marks (harakat), dagger alif, tatweel
    .replace(/[إأآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
    .replace(/[^ء-ي\s]/g, ' ').replace(/\s+/g, ' ').trim();
}
export function words(s) { const n = normalize(s); return n ? n.split(' ') : []; }
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
export function sim(a, b) { const L = Math.max(a.length, b.length); return L ? 1 - lev(a, b) / L : 1; }
// Align expected words with heard words (global alignment), then judge each expected word.
export function compare(expected, heard) {
  const E = words(expected), H = words(heard), n = E.length, m = H.length;
  const D = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) D[i][0] = i; for (let j = 1; j <= m; j++) D[0][j] = j;
  const subCost = (i, j) => { const s = sim(E[i], H[j]); return s >= 0.5 ? 1 - s : 1; };
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) D[i][j] = Math.min(D[i - 1][j] + 1, D[i][j - 1] + 1, D[i - 1][j - 1] + subCost(i - 1, j - 1));
  const res = E.map(w => ({ exp: w, heard: '', sim: 0, status: 'missing' })), extras = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && Math.abs(D[i][j] - (D[i - 1][j - 1] + subCost(i - 1, j - 1))) < 1e-9) { const s = sim(E[i - 1], H[j - 1]); if (s >= 0.5) { res[i - 1] = { exp: E[i - 1], heard: H[j - 1], sim: s, status: s >= 0.85 ? 'good' : 'close' }; } else { extras.push(H[j - 1]); } i--; j--; }
    else if (i > 0 && Math.abs(D[i][j] - (D[i - 1][j] + 1)) < 1e-9) { i--; }
    else { extras.push(H[j - 1]); j--; }
  }
  const total = n ? res.reduce((a, r) => a + (r.status === 'missing' ? 0 : r.sim), 0) / n : 0;
  const wordScore = Math.max(0, total - Math.min(0.2, extras.length * 0.05));
  const letterScore = n && m ? Math.max(0, sim(E.join(''), H.join(''))) : 0;   // also compare all the letters together, so a word that was heard as two words still counts
  const score = n ? (wordScore + letterScore) / 2 : 0;
  return { score, wordScore, letterScore, words: res, extras: extras.reverse(), heard: H.join(' ') };
}
// A lesson may have other accepted spellings (for dialect): use the best one.
export function judge(lesson, heard) {
  const options = [lesson.ar, ...(lesson.accept || [])];
  let best = null; for (const o of options) { const r = compare(o, heard); r.matchedText = o; if (!best || r.score > best.score) best = r; }
  return best;
}
