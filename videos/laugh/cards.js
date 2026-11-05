// Info cards and phone screens for "The laugh at someone" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_49_11_uthmani.txt) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">THE ONE QUESTION</div><div class="head" style="font-size:34px;line-height:1.2;margin:6px 0">"Would I want this sent about me?"</div><div class="tip">If not, don't forward it. Send kindness instead.</div>`,
  recap: `<div class="num">BEFORE YOU FORWARD</div><div class="head" style="margin:4px 0 8px;font-size:32px">Think of the person. Send kindness.</div><div class="ar small" style="font-size:34px">عَسَىٰٓ أَن يَكُونُوا۟ خَيْرًۭا مِّنْهُمْ</div><div class="tip">Al-Hujurat 49:11 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  gc: `<div class="apphd"><b>Class group \u{1F392}</b><small>24 people</small></div><div class="msgs">
    <div class="bub" data-f="0.05"><span class="nm">Noor</span>OMG look at this \u{1F602}\u{1F602}</div>
    <div class="shot" data-f="0.3"><div class="tag">\u25B6 VIDEO</div><div class="hl">Dina's big fall at the school play</div><div class="sm">1.2k views</div></div>
    <div class="bub" data-f="0.65"><span class="nm">Noor</span>I'm DEAD \u{1F480} send it to everyone!!</div></div>`,
  fwd: `<div class="apphd"><b>Forward to...</b></div><div class="msgs">
    <div class="shot" data-f="0.04"><div class="tag">\u25B6 VIDEO</div><div class="hl">Dina's big fall at the school play</div></div>
    <div class="row" data-f="0.25"><span class="av">\u{1F392}</span><div>Whole class<small>Ready to send</small></div></div>
    <div class="bigstep" data-f="0.6" style="background:#ff6f6f;color:#fff;font-size:34px;margin-top:40px">FORWARD \u25B6</div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Hujurat \u00B7 49:11</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا يَسْخَرْ قَوْمٌۭ مِّن قَوْمٍ <b class="key" data-f="0.5">عَسَىٰٓ</b> <b class="key" data-f="0.5">أَن</b> <b class="key" data-f="0.5">يَكُونُوا۟</b> <b class="key" data-f="0.5">خَيْرًۭا</b> <b class="key" data-f="0.5">مِّنْهُمْ</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (PART OF THE VERSE)</div><div class="qen">${qwords("Believers, do not let one group laugh at another group. They may be better than them.", 0.1, 0.92)}</div></div>`,
  kindmsg: `<div class="apphd"><b>Dina \u{1F49B}</b><small>online</small></div><div class="msgs">
    <div class="bub out" data-f="0.08">Hey Dina, it was brave to get on that stage. You did great. \u{1F49B}</div>
    <div class="bub" data-f="0.5"><span class="nm">Dina</span>Thank you, that means a lot \u{1F979}</div>
    <div class="bigstep" data-f="0.8">\u{1F6D1} STOP \u2192 \u{1F6AB} DON'T FORWARD \u2192 \u{1F49B} SEND KINDNESS</div></div>`,
};
