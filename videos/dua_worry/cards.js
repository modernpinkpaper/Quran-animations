// Info cards and phone screens for "One dua for when you worry" (type 3: everyday situation + a dua). The Arabic is copied BY CODE from the Uthmani Quran text (verse_3_173_uthmani.txt, api.alquran.cloud) and checked with tools/arabic_source_check.py. The meanings in simple English are ours (not word for word).
export const CARDS = {
  pov: `<div class="num">POV</div><div class="head" style="font-size:40px;line-height:1.15;margin:4px 0 2px">It's 2 AM and you're worried about <span style="color:#ff6fae">money</span></div>`,
  copy: `<div class="num">COPY THIS DUA</div><div class="ar word" style="font-size:54px;line-height:1.9">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</div><div class="tr" style="font-size:30px">Hasbunallahu wa ni'mal wakeel</div><div class="mean small">Allah is enough for us, and He is the best one to rely on</div><div class="tip">Al-Imran 3:173</div>`,
  also: `<div class="num">ALSO SAY IT WHEN...</div><div class="body" style="font-size:27px;text-align:left;margin-top:6px"><div style="margin:6px 0">\u23F3 You wait for a test or job result</div><div style="margin:6px 0">\u{1F4DE} Before a scary call or a hard talk</div><div style="margin:6px 0">\u{1F937} It's out of your hands</div></div>`,
  recap: `<div class="num">THE DUA</div><div class="head" style="margin:4px 0 8px;font-size:32px">Allah is enough for us.</div><div class="ar word" style="font-size:50px;line-height:1.8;margin:0">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</div><div class="tr" style="font-size:26px">Hasbunallahu wa ni'mal wakeel</div><div class="num" style="margin-top:8px">SAY IT TODAY, BEFORE YOU CHECK THAT APP</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Imran \u00B7 3:173</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0"><mark>ٱلَّذِينَ قَالَ لَهُمُ ٱلنَّاسُ إِنَّ ٱلنَّاسَ قَدْ جَمَعُوا۟ لَكُمْ فَٱخْشَوْهُمْ فَزَادَهُمْ إِيمَٰنًۭا وَقَالُوا۟ <b class="key" data-f="0.55">حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING</div><div class="qen">${qwords("People told them: be afraid! It only made their faith stronger. They said: Allah is enough for us, and He is the best protector.", 0.1, 0.9)}</div></div>`,
};

// the opening is ACTED OUT on the phone (director's coverage): lock screen with bank alerts, the news, the bank app again (the same alert). No exact money on screen.
PHONES.bank = `<div class="lock"><div class="sb">2:07</div><div class="t">2:07</div><div class="d">Thursday night</div>
  <div class="notif" data-f="0.12"><i>\u{1F3E6}</i><div><b>BANK</b><span>Low balance alert</span></div><small>now</small></div>
  <div class="notif" data-f="0.38"><i>\u{1F4B3}</i><div><b>CARD</b><span>Payment due in 3 days</span></div><small>2m</small></div>
  <div class="notif" data-f="0.62"><i>\u{1F3E0}</i><div><b>RENT</b><span>Reminder: rent is due Friday</span></div><small>5m</small></div></div>`;
PHONES.news = `<div class="lock news"><div class="sb">2:19</div><div class="apphd" style="margin:-60px -18px 18px;padding-top:56px"><b>News</b><small>Top stories</small></div>
  <div class="notif" data-f="0.1"><i>\u{1F4F0}</i><div><b>ECONOMY</b><span>Prices rising again this month</span></div></div>
  <div class="notif" data-f="0.38"><i>\u{1F4C9}</i><div><b>WORK</b><span>More layoffs announced</span></div></div>
  <div class="notif" data-f="0.64"><i>⚠️</i><div><b>WARNING</b><span>Experts expect a hard year</span></div></div></div>`;
PHONES.again = `<div class="lock again"><div class="sb">2:41</div><div class="apphd" style="margin:-60px -18px 0;padding-top:56px"><b>Bank</b><small>My accounts</small></div>
  <div class="bal">•••••</div>
  <div class="spin" data-f="0.12">↻ Refreshing...</div>
  <div class="notif" data-f="0.45" style="margin-top:26px"><i>\u{1F3E6}</i><div><b>BANK</b><span>Low balance alert</span></div><small>now</small></div>
  <div class="again-note" data-f="0.72">Same alert as 30 minutes ago</div></div>`;
