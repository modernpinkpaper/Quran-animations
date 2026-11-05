# THE STALKED PROFILE (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-Hujurat 49:12 (parts: "stay away from too much suspicion" ... "and do not spy on one another"). Audience: GENERAL.
# Dalia checks an old friend's page again and again and screenshots it for someone; Amina kindly says it is making her feel worse and shows the verse. ONE easy way: mute the page, put the phone face down, do one thing with your hands. Lina and Maya are made up. Quran only, no hadith, no rulings.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "She posted again. Who is she with this time?", 'worried', 0.5),
   ('DALIA', "Let me zoom in. I'll screenshot it and send it to Maya.", 'stern', 2.4),
   ('AMINA', "Hey, is that Lina's page again?", 'sweet', 2.4),
   ('DALIA', "I just want to see how she's doing. It's no big deal.", 'sad', 0.6),
   ('AMINA', "That's the tenth time today, isn't it? Can I show you something from the Quran?", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+2.8'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('profile', 0.4, 'L0+3.0'), ('ss', 'L1-0.2', 'L1+3.6')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Chapter forty-nine, verse twelve. Let's read it together.", 'neutral', 0),
   ('AMINA', "Stay away from too much suspicion. And don't spy on one another.", 'sweet', 0.4),
   ('AMINA', "Checking again and again never answers the question. It only makes the hurt grow.", 'sweet', 0.5),
   ('DALIA', "You're right. I feel worse every time.", 'sad', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Mute her page, turn the phone face down, and do one thing with your hands.", 'sweet', 0),
   ('DALIA', "Okay, I'm muting her page and turning the phone over.", 'neutral', 0.5),
   ('DALIA', "I'll make some tea instead.", 'sweet', 3.0),
   ('AMINA', "See? Your hands are busy, and your heart can rest.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+3.6', 'L1+1.4')], pops=[], phones=[('mute', 'L1+0.4', 'L2-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before you check that page again.", 'sweet', 0),
   ('DALIA', "Okay. Mute it, flip it, then make tea.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
