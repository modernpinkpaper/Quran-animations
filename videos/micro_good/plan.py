# SPEAK GOOD WORDS TO PEOPLE (MICRO-HABIT: a small step, acted out). Surah Al-Baqarah 2:83 (part). Audience: GENERAL. 25 to 40 seconds.
# Dalia leaves home; a neighbour (Mara) is annoyed about the bins at the door; Dalia answers with the kindest words. The wall smart display by the door shows the verse (English, then Arabic read aloud). Quran only, no hadith, no rulings. Arabic copied by code (verse_2_83_uthmani.txt).
# Lines: (who, text, emotion, gap-before[, spoken-text-if-different]). Allowed emotions: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
AR = "وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا"
SCENES = [
 dict(id='greet', set='entry', pre=0.12, post=0.3, lines=[
   ('DALIA', "Okay, keys and bag. Let's get going.", 'happy', 0.4),
   ('MARA', "Hi, Dalia. Sorry, I'm so tired. The whole day has been a mess.", 'tired', 1.2),
   ('DALIA', "That sounds really hard. You do so much, and I see it.", 'sweet', 0.5),
   ('MARA', "Thank you, Dalia. I really needed to hear that.", 'sweet', 0.4)],
  shots=[('entryWide', 0), ('entryDalia', 'L0+1.0'), ('entryMara', 'L1'), ('entryDalia2', 'L2'), ('entryTwo', 'L2+3.2'), ('entryMara2', 'L3')], cards=[], pops=[], phones=[]),
 dict(id='verse', set='entry', pre=0.4, post=0.4, lines=[
   ('DALIA', "Oh, today's reminder. Chapter two, verse eighty-three.", 'neutral', 0.3),
   ('DALIA', "And speak good words to people.", 'sweet', 0.5),
   ('DALIA', "Here it is in Arabic.", 'neutral', 0.4, "Here it is in Arabic. {ar:" + AR + "}"),
   ('DALIA', "Good words cost nothing, and they can lift someone's whole day.", 'sweet', 0.5)],
  shots=[('entryDisp', 0), ('entryDalia', 'L1+2.6'), ('entryDisp', 'L2'), ('entryDalia2', 'L3'), ('entryTwo', 'L3+2.4')], cards=[], pops=[],
  phones=[('wall_verse', 'L1-0.3', 'L3-0.2')]),
 dict(id='close', set='entry', pre=0.4, post=1.6, lines=[
   ('MARA', "I feel so much lighter now, Dalia.", 'happy', 0),
   ('DALIA', "Anytime, Mara. I'm always here for you.", 'happy', 0.4)],
  shots=[('entryMara', 0), ('entryDalia', 'L1-0.2'), ('finalPull', 'L1+1.2')], cards=[('try', 0.3, 'E')], pops=[], phones=[]),
]
