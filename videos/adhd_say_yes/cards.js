// Info cards and phone screens for "One easy way to pause before yes" (type 2: kind correction; audience: busy moms). The Arabic is copied BY CODE from the Uthmani Quran text (verse_2_286_uthmani.txt) and checked with tools/arabic_source_check.py. The meanings in simple English are ours.
export const CARDS = {
  copy: `<div class="num">COPY THIS PAUSE PHRASE</div><div class="head" style="font-size:34px;line-height:1.2;margin:6px 0">"Let me check and get back to you."</div><div class="tip">Say it before you say yes. Then look at your week.</div>`,
  recap: `<div class="num">BEFORE YOU SAY YES</div><div class="head" style="margin:4px 0 8px;font-size:34px">Pause. Check. Answer.</div><div class="ar small" style="font-size:34px">لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا</div><div class="tip">Al-Baqarah 2:286 (part of the verse)</div>`,
};
const qwords = (txt, a, b) => txt.split(' ').map((w, i, arr) => `<i data-f="${(a + (b - a) * i / arr.length).toFixed(3)}">${w}</i>`).join(' ');
export const PHONES = {
  chat: `<div class="apphd"><b>Cousin Rima \u{1F338}</b><small>online</small></div><div class="msgs">
    <div class="bub" data-f="0.06"><span class="nm">Rima</span>Can you host Saturday dinner for the whole family? \u{1F64F} Pleaseee</div>
    <div class="bub out" data-f="0.55">Of course!! I'd love to \u{1F60A}</div></div>`,
  calendar: `<div class="apphd"><b>This week</b><small>Calendar</small></div><div class="msgs">
    <div class="day" data-f="0.05"><b>MON</b><span>School pickup \u00B7 Dentist</span></div>
    <div class="day" data-f="0.19"><b>TUE</b><span>Parent meeting \u00B7 Groceries</span></div>
    <div class="day" data-f="0.33"><b>WED</b><span>Soccer \u00B7 Laundry mountain</span></div>
    <div class="day" data-f="0.47"><b>THU</b><span>Doctor \u00B7 Cake for school</span></div>
    <div class="day" data-f="0.61"><b>FRI</b><span>Birthday party (kid)</span></div>
    <div class="day hot" data-f="0.8"><b>SAT</b><span>DINNER FOR 20 \u00B7 you're hosting!</span></div></div>`,
  quran: `<div class="qpage"><div class="qhd"><span>\u2039</span><b>Al-Baqarah \u00B7 2:286</b><span>\u22EF</span></div>
    <div class="qar" data-f="0.0"><mark>لَا يُكَلِّفُ ٱللَّهُ نَفْسًا <b class="key" data-f="0.5">إِلَّا وُسْعَهَا</b></mark></div>
    <div class="qlab" data-f="0.05">SIMPLE MEANING (PART OF THE VERSE)</div><div class="qen">${qwords("Allah does not burden a soul beyond what it can bear.", 0.1, 0.9)}</div></div>`,
  tryit: `<div class="apphd"><b>Cousin Rima \u{1F338}</b><small>online</small></div><div class="msgs">
    <div class="bub" data-f="0.04"><span class="nm">Rima</span>Can you also bring dessert Sunday? \u{1F64F}</div>
    <div class="bub out" data-f="0.32">Let me check my week and get back to you \u{1F60A}</div>
    <div class="bub" data-f="0.6"><span class="nm">Rima</span>Of course, no rush! \u{1F49B}</div>
    <div class="bigstep" data-f="0.82">\u23F8 PAUSE \u2192 \u{1F50D} CHECK \u2192 \u2705 ANSWER</div></div>`,
};
