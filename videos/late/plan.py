# THE "I'LL BE THERE IN 5" (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-Isra 17:34 (the end of the verse: keep your promise; promises will be asked about). Audience: GENERAL.
# Dalia texts "on my way, five minutes!" while still in her pajamas, planning to cancel at the last minute again; Amina arrives (she came by because she missed her) and kindly shows the verse. ONE easy way: say "I'll try" when you're not sure, and put it in the calendar right away. Quran only, no hadith, no rulings. Nobody real is named.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Okay, quick text to Amina: on my way, be there in five minutes.", 'happy', 0.5),
   ('DALIA', "But honestly, I'm too tired to go out. I'll cancel at the last minute again.", 'tired', 2.4),
   ('AMINA', "Hey, I came by. I missed you tonight.", 'sweet', 2.6),
   ('DALIA', "Oh no. I was about to text you. I'm so sorry.", 'sad', 0.6),
   ('AMINA', "It's okay. Can I show you something from the Quran about promises?", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+3.0'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('sent', 0.4, 'L0+3.2'), ('cancel', 'L1-0.2', 'L1+3.8')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Chapter seventeen, verse thirty-four. Let's read it together.", 'neutral', 0),
   ('AMINA', "Keep your promises. Promises will be asked about.", 'sweet', 0.4),
   ('AMINA', "A yes is a gift to the person waiting. A last-minute cancel takes it back.", 'sweet', 0.5),
   ('DALIA', "I never thought of a yes as a gift.", 'sad', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. If you're not sure, say: I'll try. Then put it in your calendar right away.", 'sweet', 0),
   ('DALIA', "Okay. I'll try, and I'll add it to my calendar.", 'neutral', 0.5),
   ('DALIA', "That way, my yes will always mean yes.", 'happy', 3.0),
   ('AMINA', "And your friends will always trust it.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+3.8', 'L1+1.4')], pops=[], phones=[('cal', 'L1+0.4', 'L2-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before your next yes.", 'sweet', 0),
   ('DALIA', "Okay. Only a real yes from now on.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
