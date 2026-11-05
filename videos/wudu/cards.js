// Info cards and phone screens for "One reminder before you pray" (script type 2: real-life role-play with a kind correction). The Arabic is copied BY CODE from the Uthmani Quran text (verse_5_6_uthmani.txt, api.alquran.cloud) and checked with tools/arabic_source_check.py. The meanings in simple English are ours (not word for word).
export const CARDS = {
  copy: `<div class="num" style="margin-bottom:16px">THE 4 STEPS (from the verse)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;text-align:center;margin-top:4px">
      <div><div class="ar" style="font-size:36px;line-height:1.5;margin:0">وُجُوهَكُمْ</div><div class="tr" style="font-size:20px">wujuhakum</div><div class="tip" style="margin:0;font-size:18px">1. your FACE</div></div>
      <div><div class="ar" style="font-size:36px;line-height:1.5;margin:0">وَأَيْدِيَكُمْ</div><div class="tr" style="font-size:20px">aydiyakum</div><div class="tip" style="margin:0;font-size:18px">2. your ARMS to the elbows</div></div>
      <div><div class="ar" style="font-size:36px;line-height:1.5;margin:0">بِرُءُوسِكُمْ</div><div class="tr" style="font-size:20px">bi-ru'usikum</div><div class="tip" style="margin:0;font-size:18px">3. wipe your HEAD</div></div>
      <div><div class="ar" style="font-size:36px;line-height:1.5;margin:0">وَأَرْجُلَكُمْ</div><div class="tr" style="font-size:20px">arjulakum</div><div class="tip" style="margin:0;font-size:18px">4. your FEET to the ankles</div></div>
    </div>`,
  recap: `<div class="num">BEFORE YOU PRAY</div><div class="head" style="margin:4px 0 8px;font-size:32px">Face. Arms. Head. Feet.</div><div class="ar small" style="font-size:30px">فَٱغْسِلُوا۟ وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى ٱلْمَرَافِقِ</div><div class="tip">Al-Ma'idah 5:6. For the small details, ask a teacher you trust.</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Ma'idah \u00B7 5:6</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا قُمْتُمْ إِلَى ٱلصَّلَوٰةِ فَٱغْسِلُوا۟ <b class="key" data-f="0.38">وُجُوهَكُمْ</b> <b class="key" data-f="0.52">وَأَيْدِيَكُمْ</b> إِلَى ٱلْمَرَافِقِ وَٱمْسَحُوا۟ <b class="key" data-f="0.66">بِرُءُوسِكُمْ</b> <b class="key" data-f="0.80">وَأَرْجُلَكُمْ</b> إِلَى ٱلْكَعْبَيْنِ</mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (FIRST PART)</div><div class="qen">${qwords("When you get up to pray: wash your faces and your arms to the elbows, wipe over your heads, and wash your feet to the ankles.", 0.1, 0.92)}</div></div>`,
  quran2: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Ma'idah \u00B7 5:6</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0"><mark><b class="key">أَوْ جَآءَ أَحَدٌۭ مِّنكُم مِّنَ ٱلْغَآئِطِ</b></mark></div>
    <div class="qlab" data-f="0.05">PART OF THE SAME VERSE</div><div class="qen">${qwords("... or one of you comes from the bathroom ...", 0.15, 0.8)}</div></div>`,
  steps: `<div class="apphd"><b>Before you pray</b><small>Al-Ma'idah 5:6</small></div><div class="msgs">
    <div class="row" data-f="0.08"><span class="av">\u{1F642}</span><div>1. Wash your FACE<small>\u2705 done</small></div></div>
    <div class="row" data-f="0.30"><span class="av">\u{1F4AA}</span><div>2. Arms, to the elbows<small>\u2705 done</small></div></div>
    <div class="row" data-f="0.52"><span class="av">\u{1F9D5}</span><div>3. Wipe your HEAD<small>\u2705 done</small></div></div>
    <div class="row" data-f="0.74"><span class="av">\u{1F9B6}</span><div>4. Feet, to the ankles<small>\u2705 done</small></div></div></div>`,
};
