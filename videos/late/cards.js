// Info cards and phone screens for "I'll be there in 5" (type 2: kind correction; audience: general). The Arabic is copied BY CODE from the Uthmani Quran text (verse_17_34_uthmani.txt, the end of the verse) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">THE HONEST YES</div><div class="head" style="font-size:30px;line-height:1.25;margin:6px 0;text-align:left"><div>1. Not sure? Say "I'll try"</div><div>2. Put it in your calendar now</div><div>3. Only say yes when you can</div></div>`,
  recap: `<div class="num">BEFORE YOUR NEXT YES</div><div class="head" style="margin:4px 0 8px;font-size:32px">Say "I'll try." Keep your yes.</div><div class="ar small" style="font-size:36px">وَأَوْفُوا۟ بِٱلْعَهْدِ</div><div class="tip">Al-Isra 17:34 (end of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  sent: `<div class="apphd"><b>Amina \u{1F49C}</b><small>online</small></div><div class="msgs">
    <div class="bub out" data-f="0.08">On my way! Be there in 5 minutes \u{1F697}</div>
    <div class="notif" data-f="0.45" style="background:#fff"><i>\u2705</i><div><b>DELIVERED</b><span>6:02 PM \u00B7 she is waiting</span></div></div></div>`,
  cancel: `<div class="apphd"><b>Amina \u{1F49C}</b><small>typing...</small></div><div class="msgs">
    <div class="notif" data-f="0.04" style="background:#ffe1e1;border:3px solid #ff6f6f"><i>\u23F0</i><div><b>6:41 PM</b><span>39 minutes since "5 minutes"</span></div></div>
    <div class="bub out" data-f="0.3" style="background:#ffb3b3;color:#4a0a0a">So sorry, something came up \u{1F62D}</div>
    <div class="bigstep" data-f="0.7" style="background:#ff6f6f;color:#fff;font-size:34px;margin-top:40px">SEND \u25B6</div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Isra \u00B7 17:34</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0" style="font-size:33px"><mark><b class="key" data-f="0.5">وَأَوْفُوا۟ بِٱلْعَهْدِ</b> ۖ إِنَّ ٱلْعَهْدَ كَانَ مَسْـُٔولًۭا</mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (END OF THE VERSE)</div><div class="qen">${qwords("Keep your promise. Promises will be asked about.", 0.1, 0.92)}</div></div>`,
  cal: `<div class="apphd"><b>Friday</b><small>Calendar</small></div><div class="msgs">
    <div class="day" data-f="0.06"><b>6 PM</b><span>Dinner with Amina \u{1F49C}</span></div>
    <div class="day" data-f="0.3"><b>5:30</b><span>Reminder: leave now!</span></div>
    <div class="bub out" data-f="0.52">I'll try! I'll tell you by tomorrow \u{1F60A}</div>
    <div class="bigstep" data-f="0.8">\u{1F937} NOT SURE \u2192 \u{1F4AC} "I'LL TRY" \u2192 \u{1F4C5} CALENDAR NOW</div></div>`,
};
