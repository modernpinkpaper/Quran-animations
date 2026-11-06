// Cards and the wall-display screen for "Speak good words to people" (micro-habit). The Arabic is copied BY CODE from the Uthmani text (verse_2_83_uthmani.txt, phrase_ar.txt) and checked with tools/arabic_source_check.py.
export const CARDS = {
  try: `<div class="num">TRY IT TODAY</div><div class="head" style="margin:4px 0 8px;font-size:32px">Say one kind thing to someone today.</div><div class="ar small" style="font-size:34px">وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا</div><div class="tip">Al-Baqarah 2:83 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  wall_verse: `<div class="wd"><div class="wclock">8:05</div><div class="wt">TODAY'S VERSE</div>
    <div class="war" data-f="0.55">وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا</div>
    <div class="wen">${qwords("And speak good words to people.", 0.05, 0.6)}</div>
    <div class="wref" data-f="0.7">Al-Baqarah \u00B7 2:83</div></div>`,
};
