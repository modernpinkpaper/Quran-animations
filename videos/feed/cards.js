// Info cards and phone screens for "The perfect feed" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_20_131_uthmani.txt, verse_18_39_uthmani.txt) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">COPY THIS (a Quran phrase, Al-Kahf 18:39)</div><div class="ar word" style="font-size:42px;line-height:1.9">مَا شَآءَ ٱللَّهُ لَا قُوَّةَ إِلَّا بِٱللَّهِ</div><div class="tr" style="font-size:24px">ma sha Allah, la quwwata illa billah</div><div class="mean small">What Allah wills happens. There is no power except with Allah.</div>`,
  recap: `<div class="num">WHEN THE FEED MAKES YOU SIGH</div><div class="head" style="margin:4px 0 8px;font-size:32px">Say it. Smile. Phone down.</div><div class="ar small" style="font-size:34px">زَهْرَةَ ٱلْحَيَوٰةِ ٱلدُّنْيَا</div><div class="tip">Ta-Ha 20:131 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  feed: `<div class="apphd"><b>For you</b><small>Scroll</small></div><div class="msgs">
    <div class="notif" data-f="0.04" style="background:#fff"><i>\u2708\uFE0F</i><div><b>@maya.travels</b><span>Week 3 in Bali. #blessed</span></div><small>\u2665 12k</small></div>
    <div class="notif" data-f="0.26" style="background:#fff"><i>\u{1F3E1}</i><div><b>@sarahs.home</b><span>WE GOT THE HOUSE!!</span></div><small>\u2665 9k</small></div>
    <div class="notif" data-f="0.48" style="background:#fff"><i>\u{1F4AA}</i><div><b>@fitwithlina</b><span>5 AM again. No excuses.</span></div><small>\u2665 15k</small></div>
    <div class="notif" data-f="0.7" style="background:#fff"><i>\u{1F48D}</i><div><b>@couplegoals</b><span>Date night, every week.</span></div><small>\u2665 21k</small></div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Ta-Ha \u00B7 20:131</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِۦٓ أَزْوَٰجًۭا مِّنْهُمْ <b class="key" data-f="0.5">زَهْرَةَ</b> <b class="key" data-f="0.5">ٱلْحَيَوٰةِ</b> <b class="key" data-f="0.5">ٱلدُّنْيَا</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (PART OF THE VERSE)</div><div class="qen">${qwords("Do not stretch your eyes toward what We gave others to enjoy. It is only the shine of this worldly life.", 0.1, 0.92)}</div></div>`,
  sayit: `<div class="apphd"><b>@sarahs.home</b><small>Post</small></div><div class="msgs">
    <div class="notif" data-f="0.03" style="background:#fff"><i>\u{1F3E1}</i><div><b>@sarahs.home</b><span>WE GOT THE HOUSE!!</span></div><small>\u2665 9k</small></div>
    <div class="bub out" data-f="0.3">Ma sha Allah, so happy for you! \u{1F49B}</div>
    <div class="bigstep" data-f="0.7">\u{1F440} NOTICE \u2192 \u{1F4AC} SAY IT \u2192 \u{1F4F1} PHONE DOWN</div></div>`,
};
