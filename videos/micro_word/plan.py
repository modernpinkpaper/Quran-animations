# SAY THE BEST WORDS (MICRO-HABIT: a small step, acted out). Surah Al-Isra 17:53 (first part). Audience: GENERAL. 25 to 40 seconds.
# Dalia leaves home; a neighbour (Mara) is annoyed about the bins at the door; Dalia answers with the kindest words. The wall smart display by the door shows the verse (English, then Arabic read aloud). Quran only, no hadith, no rulings. Arabic copied by code (verse_17_53_uthmani.txt).
# Lines: (who, text, emotion, gap-before[, spoken-text-if-different]). Allowed emotions: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
AR = "وَقُل لِّعِبَادِى يَقُولُوا۟ ٱلَّتِى هِىَ أَحْسَنُ"
SCENES = [
 dict(id='greet', set='entry', pre=0.12, post=0.3, lines=[
   ('DALIA', "Okay, bins are out. Time to go.", 'happy', 0.4),
   ('MARA', "Dalia, your bins keep blocking my driveway. This is the third time!", 'stern', 1.2),
   ('DALIA', "Thank you for telling me. I'm so sorry. I'll move them right now.", 'sweet', 0.5),
   ('MARA', "Oh. Thanks, Dalia. I really appreciate that.", 'sweet', 0.4)],
  shots=[('entryWide', 0), ('entryDalia', 'L0+1.0'), ('entryMara', 'L1'), ('entryDalia2', 'L2'), ('entryTwo', 'L2+3.2'), ('entryMara2', 'L3')], cards=[], pops=[], phones=[]),
 dict(id='verse', set='entry', pre=0.4, post=0.4, lines=[
   ('DALIA', "Oh, today's reminder. Chapter seventeen, verse fifty-three.", 'neutral', 0.3),
   ('DALIA', "Tell My servants to say that which is best.", 'sweet', 0.5),
   ('DALIA', "Here it is in Arabic.", 'neutral', 0.4, "Here it is in Arabic. {ar:" + AR + "}"),
   ('DALIA', "The best words can turn a hard moment around.", 'sweet', 0.5)],
  shots=[('entryDisp', 0), ('entryDalia', 'L1+3.0'), ('entryDisp', 'L2'), ('entryDalia2', 'L3'), ('entryTwo', 'L3+2.4')], cards=[], pops=[],
  phones=[('wall_verse', 'L1-0.3', 'L3-0.2')]),
 dict(id='close', set='entry', pre=0.4, post=1.6, lines=[
   ('MARA', "Want some tea later, Dalia?", 'happy', 0),
   ('DALIA', "I'd love that. Thanks, Mara!", 'happy', 0.4)],
  shots=[('entryMara', 0), ('entryDalia', 'L1-0.2'), ('finalPull', 'L1+1.2')], cards=[('try', 0.3, 'E')], pops=[], phones=[]),
]
