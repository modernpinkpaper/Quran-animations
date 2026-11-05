// Info cards and phone screens for "The stalked profile" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_49_12_uthmani.txt, two separate parts) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">THE 3 STEPS</div><div class="head" style="font-size:30px;line-height:1.25;margin:6px 0;text-align:left"><div>1. Mute the page</div><div>2. Phone face down</div><div>3. Do one thing with your hands</div></div>`,
  recap: `<div class="num">BEFORE YOU CHECK AGAIN</div><div class="head" style="margin:4px 0 8px;font-size:32px">Mute it. Flip it. Make tea.</div><div class="ar small" style="font-size:36px">وَلَا تَجَسَّسُوا۟</div><div class="tip">Al-Hujurat 49:12 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  profile: `<div class="apphd"><b>@lina.k \u{1F4F7}</b><small>active 2m ago</small></div><div class="msgs">
    <div class="notif" data-f="0.06" style="background:#fff"><i>\u2728</i><div><b>NEW POST</b><span>New friends, new year!</span></div></div>
    <div class="notif" data-f="0.34" style="background:#fff"><i>\u{1F46F}</i><div><b>TAGGED</b><span>Lina and 3 others</span></div></div>
    <div class="notif" data-f="0.62" style="background:#ffe1e1;border:3px solid #ff6f6f"><i>\u{1F440}</i><div><b>YOU VIEWED</b><span>This page 10 times today</span></div></div></div>`,
  ss: `<div class="apphd"><b>Maya \u{1F4AC}</b><small>online</small></div><div class="msgs">
    <div class="shot" data-f="0.05"><div class="tag">\u{1F4F8} SCREENSHOT</div><div class="hl">Lina's page</div><div class="sm">Zoomed in</div></div>
    <div class="bub out" data-f="0.35">Look who she's with now \u{1F644}</div>
    <div class="bigstep" data-f="0.7" style="background:#ff6f6f;color:#fff;font-size:34px;margin-top:40px">SEND \u25B6</div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Hujurat \u00B7 49:12</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>ٱجْتَنِبُوا۟ كَثِيرًۭا مِّنَ ٱلظَّنِّ ... <b class="key" data-f="0.5">وَلَا تَجَسَّسُوا۟</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (PARTS OF THE VERSE)</div><div class="qen">${qwords("Stay away from too much suspicion ... and do not spy on one another.", 0.1, 0.92)}</div></div>`,
  mute: `<div class="apphd"><b>@lina.k</b><small>options</small></div><div class="msgs">
    <div class="notif" data-f="0.08" style="background:#fff"><i>\u{1F507}</i><div><b>MUTE</b><span>Muted @lina.k \u2705</span></div></div>
    <div class="notif" data-f="0.36" style="background:#fff"><i>\u{1F4F5}</i><div><b>PHONE</b><span>Face down on the table</span></div></div>
    <div class="bigstep" data-f="0.7">\u{1F507} MUTE \u2192 \u{1F4F5} FACE DOWN \u2192 \u{1F375} USE YOUR HANDS</div></div>`,
};
