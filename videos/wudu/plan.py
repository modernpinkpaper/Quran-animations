# ONE REMINDER BEFORE YOU PRAY (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-Ma'idah 5:6. Audience: GENERAL.
# Dalia is about to pray after coming from the bathroom; Amina kindly reminds her of what the Quran says (face, arms to the elbows, wipe the head, feet to the ankles; the same verse mentions coming from the bathroom). Quran only, no hadith, no rulings: for the small details, "ask a teacher you trust".
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices.
TOTAL = None
SCENES = [
 dict(id='open', set='mat', pre=0.12, post=0.4, lines=[
   ('DALIA', "Okay, time to pray. I'm so ready.", 'happy', 0.4),
   ('AMINA', "Before you start, can I share a quick reminder from the Quran?", 'sweet', 0.7),
   ('DALIA', "Sure, of course. What is it?", 'neutral', 0.5),
   ('AMINA', "I saw you come from the bathroom. Did you wash up first?", 'sweet', 0.5),
   ('DALIA', "Oh no. I forgot to do wudu.", 'sad', 0.6),
   ('AMINA', "That's okay! It happens to everyone. Let's see what the Quran says.", 'sweet', 0.5)],
  shots=[('standWide', 0), ('standDalia', 'L0+1.4'), ('standTwo', 'L1'), ('standAmina', 'L1+3.0'), ('standDalia', 'L2'), ('standTwo', 'L3'), ('standDalia', 'L4'), ('standAmina', 'L5')], cards=[], pops=[('🚻', 40, 205, 0.2, 'L0+2.2')], phones=[]),
 dict(id='verse', set='mat', pre=0.4, post=0.5, lines=[
   ('AMINA', "Al-Ma'idah. This is verse number six.", 'neutral', 0, '{ar:سُورَةُ الْمَائِدَةِ}. This is verse number six.'),
   ('AMINA', "When you get up to pray: wash your face and your arms to the elbows.", 'sweet', 0.4),
   ('AMINA', "Then wipe your head, and wash your feet to the ankles.", 'sweet', 0.4),
   ('AMINA', "And the same verse talks about coming from the bathroom, too.", 'sweet', 0.6)],
  shots=[('standAmina', 0), ('standTwo', 'L1'), ('standDalia', 'L3')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L3-0.3'), ('quran2', 'L3-0.1', 'E-0.1')]),
 dict(id='habit', set='mat', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Just follow the verse in order: face, arms, head, feet.", 'sweet', 0),
   ('DALIA', "Four steps, in order. I can do that!", 'happy', 0.5),
   ('AMINA', "Beautiful. For the small details, ask a teacher you trust.", 'sweet', 0.6)],
  shots=[('standTwo', 0), ('standDalia', 'L1-0.1'), ('standAmina', 'L2'), ('standTwo', 'L2+2.2')], cards=[('copy', 'L2-0.2', 'E')], pops=[], phones=[('steps', 'L0+2.4', 'L1+2.6')]),
 dict(id='close', set='mat', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it before every prayer this week.", 'sweet', 0),
   ('DALIA', "I will. Thanks for saying it so kindly.", 'happy', 0.6)],
  shots=[('standAmina', 0), ('standDalia', 'L1-0.2'), ('standTwo', 'L1+1.0')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
