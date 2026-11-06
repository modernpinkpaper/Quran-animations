// Cards and the wall-display screen for "Greet back better" (micro-habit). The Arabic is copied BY CODE from the Uthmani text (verse_4_86_uthmani.txt, phrase_ar.txt) and checked with tools/arabic_source_check.py.
export const CARDS = {
  try: `<div class="num">TRY IT TODAY</div><div class="head" style="margin:4px 0 8px;font-size:32px">Next hello: add one kind wish.</div><div class="ar small" style="font-size:34px">فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ</div><div class="tip">An-Nisa 4:86 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  wall_verse: `<div class="wd"><div class="wclock">8:05</div><div class="wt">TODAY'S VERSE</div>
    <div class="war" data-f="0.55">فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ</div>
    <div class="wen">${qwords("When you are greeted with a greeting, greet back with something better, or at least the same.", 0.05, 0.6)}</div>
    <div class="wref" data-f="0.7">An-Nisa \u00B7 4:86</div></div>`,
};
