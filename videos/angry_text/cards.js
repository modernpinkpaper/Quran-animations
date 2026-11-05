// Info cards and phone screens for "One rule for angry texts" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_41_34_uthmani.txt) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">THE 10-SECOND RULE</div><div class="head" style="font-size:30px;line-height:1.25;margin:6px 0;text-align:left"><div>1. Put the phone down for 10 seconds</div><div>2. Delete the angry message</div><div>3. Write the kind version</div></div>`,
  recap: `<div class="num">BEFORE YOU PRESS SEND</div><div class="head" style="margin:4px 0 8px;font-size:34px">Pause. Delete. Be kind.</div><div class="ar small" style="font-size:36px">ٱدْفَعْ بِٱلَّتِى هِىَ أَحْسَنُ</div><div class="tip">Fussilat 41:34 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  msg: `<div class="apphd"><b>Sam \u{1F4AC}</b><small>online</small></div><div class="msgs">
    <div class="bub out" data-f="0.04">Stuck in traffic, 10 min late. Sorry!</div>
    <div class="bub" data-f="0.4"><span class="nm">Sam</span>You're late AGAIN. Typical you. \u{1F644}</div>
    <div class="bub" data-f="0.7"><span class="nm">Sam</span>Honestly, you're useless.</div></div>`,
  draft: `<div class="apphd"><b>Sam \u{1F4AC}</b><small>typing...</small></div><div class="msgs">
    <div class="bub" data-f="0.02"><span class="nm">Sam</span>Honestly, you're useless.</div>
    <div class="bub out" data-f="0.2" style="background:#ffb3b3;color:#4a0a0a">Wow. You're one to talk. Remember when YOU were late? Always acting perfect. \u{1F621}</div>
    <div class="bigstep" data-f="0.7" style="background:#ff6f6f;color:#fff;font-size:34px;margin-top:40px">SEND \u25B6</div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Fussilat \u00B7 41:34</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>وَلَا تَسْتَوِى ٱلْحَسَنَةُ وَلَا ٱلسَّيِّئَةُ ۚ <b class="key" data-f="0.5">ٱدْفَعْ</b> <b class="key" data-f="0.5">بِٱلَّتِى</b> <b class="key" data-f="0.5">هِىَ</b> <b class="key" data-f="0.5">أَحْسَنُ</b> فَإِذَا ٱلَّذِى بَيْنَكَ وَبَيْنَهُۥ عَدَٰوَةٌۭ كَأَنَّهُۥ وَلِىٌّ حَمِيمٌۭ</mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING</div><div class="qen">${qwords("Good and bad are not the same. Answer bad with what is better, and the one who was against you can become like a close friend.", 0.1, 0.92)}</div></div>`,
  timer: `<div class="lock again" style="background:#efe9fb;color:#2a2147"><div class="sb" style="color:#2a2147">10s</div><div style="text-align:center;margin-top:70px;font:900 28px/1.2 'Liberation Sans',Arial,sans-serif;color:#7a5cc8">PHONE DOWN \u270B</div>
    <div style="position:relative;height:300px"><div class="cd" data-f="0.04">10</div><div class="cd" data-f="0.22">7</div><div class="cd" data-f="0.4">4</div><div class="cd" data-f="0.58">1</div></div>
    <div class="notif" data-f="0.78" style="background:#fff"><i>\u{1F5D1}\uFE0F</i><div><b>DRAFT</b><span>Deleted</span></div></div></div>`,
  kind: `<div class="apphd"><b>Sam \u{1F4AC}</b><small>online</small></div><div class="msgs">
    <div class="bub out" data-f="0.08">Hi Sam. I'm sorry I was late. Can we talk later? \u{1F49B}</div>
    <div class="bub" data-f="0.5"><span class="nm">Sam</span>Thank you. I'm sorry I snapped. \u{1F49B}</div>
    <div class="bigstep" data-f="0.8">\u23F8 PAUSE \u2192 \u{1F5D1}\uFE0F DELETE \u2192 \u{1F49B} KIND</div></div>`,
};
