// Info cards and phone screens for "One dua for when you worry" (type 3: everyday situation + a dua). The Arabic is copied BY CODE from the Uthmani Quran text (verse_3_173_uthmani.txt, api.alquran.cloud) and checked with tools/arabic_source_check.py. The meanings in simple English are ours (not word for word).
export const CARDS = {
  pov: `<div class="num">POV</div><div class="head" style="font-size:40px;line-height:1.15;margin:4px 0 2px">It's 2 AM and you're worried about <span style="color:#ff6fae">money</span></div>`,
  copy: `<div class="num">COPY THIS DUA</div><div class="ar word" style="font-size:54px;line-height:1.9">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</div><div class="tr" style="font-size:30px">Hasbunallahu wa ni'mal wakeel</div><div class="mean small">Allah is enough for us, and He is the best one to rely on</div><div class="tip">Al-Imran 3:173</div>`,
  also: `<div class="num">ALSO SAY IT WHEN...</div><div class="body" style="font-size:27px;text-align:left;margin-top:6px"><div style="margin:6px 0">\u23F3 You wait for a test or job result</div><div style="margin:6px 0">\u{1F4DE} Before a scary call or a hard talk</div><div style="margin:6px 0">\u{1F32A}\uFE0F It's out of your hands</div></div>`,
  recap: `<div class="num">THE DUA</div><div class="head" style="margin:4px 0 8px;font-size:32px">Allah is enough for us.</div><div class="ar word" style="font-size:50px;line-height:1.8;margin:0">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</div><div class="tr" style="font-size:26px">Hasbunallahu wa ni'mal wakeel</div><div class="num" style="margin-top:8px">SAY IT TODAY, BEFORE YOU CHECK THAT APP</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Imran \u00B7 3:173</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0"><mark>ٱلَّذِينَ قَالَ لَهُمُ ٱلنَّاسُ إِنَّ ٱلنَّاسَ قَدْ جَمَعُوا۟ لَكُمْ فَٱخْشَوْهُمْ فَزَادَهُمْ إِيمَٰنًۭا وَقَالُوا۟ <b class="key" data-f="0.55">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING</div><div class="qen">${qwords("People told them: be afraid! It only made their faith stronger. They said: Allah is enough for us, and He is the best protector.", 0.1, 0.9)}</div></div>`,
};
