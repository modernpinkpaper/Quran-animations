// Info cards and phone screens for "The midnight cart" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_7_31_uthmani.txt) and checked with tools/arabic_source_check.py. The meanings in simple English are ours. NO exact money on screen.
export const CARDS = {
  copy: `<div class="num">THE 24-HOUR CART RULE</div><div class="head" style="font-size:30px;line-height:1.25;margin:6px 0;text-align:left"><div>1. Add it to the cart</div><div>2. Close the app and wait 24 hours</div><div>3. Still need it? Then buy it</div></div>`,
  recap: `<div class="num">BEFORE YOU CHECK OUT</div><div class="head" style="margin:4px 0 8px;font-size:32px">Wait a day. Need it? Buy it.</div><div class="ar small" style="font-size:32px">وَلَا تُسْرِفُوٓا۟ ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ</div><div class="tip">Al-A'raf 7:31 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  shop: `<div class="apphd"><b>MEGA SALE \u{1F6CD}\uFE0F</b><small>ends tonight</small></div><div class="msgs">
    <div class="notif" data-f="0.05" style="background:#fff"><i>\u{1F56F}\uFE0F</i><div><b>-60%</b><span>Candle set (12 pieces)</span></div></div>
    <div class="notif" data-f="0.25" style="background:#fff"><i>\u{1F462}</i><div><b>-60%</b><span>Boots (a third pair!)</span></div></div>
    <div class="notif" data-f="0.45" style="background:#fff"><i>\u{1F373}</i><div><b>-60%</b><span>Air fryer, number two</span></div></div>
    <div class="notif" data-f="0.65" style="background:#ffe1e1;border:3px solid #ff6f6f"><i>\u23F0</i><div><b>HURRY</b><span>Ends in 02:14:09</span></div></div></div>`,
  cart: `<div class="apphd"><b>My cart \u{1F6D2}</b><small>8 items</small></div><div class="msgs">
    <div class="day" data-f="0.04"><b>\u{1F56F}\uFE0F</b><span>Candle set</span></div>
    <div class="day" data-f="0.14"><b>\u{1F462}</b><span>Boots, third pair</span></div>
    <div class="day" data-f="0.24"><b>\u{1F373}</b><span>Air fryer, number two</span></div>
    <div class="day" data-f="0.34"><b>\u{1F381}</b><span>Mystery box</span></div>
    <div class="day" data-f="0.44"><b>\u{1F4F1}</b><span>Phone cases x4</span></div>
    <div class="day" data-f="0.54"><b>\u{1F9F4}</b><span>Skin care set</span></div>
    <div class="bigstep" data-f="0.8" style="background:#ff6f6f;color:#fff;font-size:34px;margin-top:20px">CHECKOUT \u25B6</div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-A'raf \u00B7 7:31</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark>وَكُلُوا۟ وَٱشْرَبُوا۟ <b class="key" data-f="0.5">وَلَا</b> <b class="key" data-f="0.5">تُسْرِفُوٓا۟</b> <b class="key" data-f="0.5">ۚ</b> <b class="key" data-f="0.5">إِنَّهُۥ</b> <b class="key" data-f="0.5">لَا</b> <b class="key" data-f="0.5">يُحِبُّ</b> <b class="key" data-f="0.5">ٱلْمُسْرِفِينَ</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (END OF THE VERSE)</div><div class="qen">${qwords("Eat and drink, but do not be wasteful. Allah does not love the wasteful.", 0.1, 0.92)}</div></div>`,
  wait: `<div class="apphd"><b>My cart \u{1F6D2}</b><small>saved</small></div><div class="msgs">
    <div class="notif" data-f="0.08" style="background:#fff"><i>\u{1F6D2}</i><div><b>SAVED</b><span>8 items waiting in your cart</span></div></div>
    <div class="notif" data-f="0.35" style="background:#fff"><i>\u23F0</i><div><b>TOMORROW, 9 AM</b><span>Still need it? Then buy it.</span></div></div>
    <div class="bigstep" data-f="0.7">\u{1F6D2} ADD \u2192 \u23F3 WAIT A DAY \u2192 \u2705 STILL NEED IT?</div></div>`,
};
