# ONE RULE FOR ANGRY TEXTS (script type 2: real-life role-play with a KIND CORRECTION). Surah Fussilat 41:34. Audience: GENERAL.
# Dalia gets a rude text and types a furious reply (acted out on the phone); Amina kindly stops her with the verse "answer bad with what is better" and gives ONE easy way: the 10-second rule (pause, delete, write the kind version). Quran only, no hadith, no rulings.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Oh wow, 'typical you'? Are you kidding me right now?", 'shock', 0.5),
   ('DALIA', "Fine. I'll tell her exactly what I think of that.", 'stern', 1.6),
   ('AMINA', "Whoa, who made you this mad?", 'sweet', 2.2),
   ('DALIA', "Sam called me useless. I'm about to send her a message back.", 'stern', 0.6),
   ('AMINA', "Before you press send, can I show you something from the Quran?", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+3.2'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('msg', 0.5, 'L0+3.0'), ('draft', 'L1-0.2', 'L1+3.4')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', 'Fussilat. This is verse number thirty-four.', 'neutral', 0, '{ar:سُورَةُ فُصِّلَتْ}. This is verse number thirty-four.'),
   ('AMINA', "Good and bad are not the same. Answer bad with what is better.", 'sweet', 0.4),
   ('AMINA', "And the one who was against you can become like a close friend.", 'sweet', 0.5),
   ('DALIA', "Even after what she wrote?", 'worried', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L3-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Put the phone down for ten seconds, then delete the angry message.", 'sweet', 0),
   ('DALIA', "Okay. Ten seconds. Deleting it now.", 'neutral', 0.4),
   ('DALIA', "Hi Sam. I'm sorry I was late. Can we talk later?", 'sweet', 3.4),
   ('AMINA', "See? You can be right and still be kind.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+2.4', 'L1')], pops=[], phones=[('timer', 'L1', 'L1+3.0'), ('kind', 'L2-0.2', 'L3-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before your next send.", 'sweet', 0),
   ('DALIA', "Okay. Ten seconds first, then I decide.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
