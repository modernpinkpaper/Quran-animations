# GREET BACK BETTER (MICRO-HABIT: a small step, acted out). Surah An-Nisa 4:86 (first part). Audience: GENERAL. 25 to 40 seconds.
# Dalia leaves home; a neighbour (Mara) says hi at the door; Dalia greets back with extra kindness. The wall smart display by the door shows the verse (English, then Arabic read aloud). Quran only, no hadith, no rulings. Arabic copied by code (verse_4_86_uthmani.txt).
# Lines: (who, text, emotion, gap-before[, spoken-text-if-different]). Allowed emotions: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
AR = "فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ"
SCENES = [
 dict(id='greet', set='entry', pre=0.12, post=0.3, lines=[
   ('DALIA', "Okay, keys and bag. Let's get going.", 'happy', 0.4),
   ('MARA', "Good morning, Dalia! Nice to see you.", 'happy', 1.2),
   ('DALIA', "Good morning, Mara! I hope today is full of good things for you.", 'sweet', 0.4),
   ('MARA', "Aw, thank you. That made my morning.", 'sweet', 0.4)],
  shots=[('entryWide', 0), ('entryDalia', 'L0+1.0'), ('entryMara', 'L1'), ('entryDalia2', 'L2'), ('entryTwo', 'L2+3.2'), ('entryMara2', 'L3')], cards=[], pops=[], phones=[]),
 dict(id='verse', set='entry', pre=0.4, post=0.4, lines=[
   ('DALIA', "Oh, today's reminder. Chapter four, verse eighty-six.", 'neutral', 0.3),
   ('DALIA', "When you are greeted with a greeting, greet back with something better, or at least the same.", 'sweet', 0.5),
   ('DALIA', "Here it is in Arabic.", 'neutral', 0.4, "Here it is in Arabic. {ar:" + AR + "}"),
   ('DALIA', "A better greeting costs nothing, and it can make someone's day.", 'sweet', 0.5)],
  shots=[('entryDisp', 0), ('entryDalia', 'L1+4.0'), ('entryDisp', 'L2'), ('entryDalia2', 'L3'), ('entryTwo', 'L3+2.4')], cards=[], pops=[],
  phones=[('wall_verse', 'L1-0.3', 'L3-0.2')]),
 dict(id='close', set='entry', pre=0.4, post=1.6, lines=[
   ('MARA', "Have a great day, Dalia!", 'happy', 0),
   ('DALIA', "You too, Mara! Say hi to your family for me.", 'happy', 0.4)],
  shots=[('entryMara', 0), ('entryDalia', 'L1-0.2'), ('finalPull', 'L1+1.2')], cards=[('try', 0.3, 'E')], pops=[], phones=[]),
]
