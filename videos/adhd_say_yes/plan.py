# ONE EASY WAY TO PAUSE BEFORE YES (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-Baqarah 2:286 (the first part). Audience: BUSY MOMS (the ADHD-moms series, no medical claims).
# Dalia says "yes" to hosting a big dinner while her week is already full (acted out on the phone: the chat, the packed calendar). Amina kindly reminds her that Allah does not burden a soul beyond what it can bear, and gives ONE easy way: a pause phrase, "Let me check and get back to you."
# Quran only, no hadith, no rulings. Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Sure, I'll host Saturday! No problem at all.", 'happy', 0.5),
   ('DALIA', "Wait. When am I going to cook for twenty people?", 'worried', 4.6),
   ('AMINA', "Hey, rough week?", 'sweet', 1.0),
   ('DALIA', "I said yes again. I always say yes.", 'sad', 0.6),
   ('AMINA', "You're so kind. And your plate is already full. The Quran has a gentle reminder for you.", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+3.0'), ('daliaCu', 'L1-0.2'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('chat', 0.5, 'L0+3.0'), ('calendar', 'L0+4.4', 'L1-0.1')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', 'Al-Baqarah. This is verse number two eighty-six.', 'neutral', 0, '{ar:سُورَةُ الْبَقَرَةِ}. This is verse number two eighty-six.'),
   ('AMINA', "Allah does not burden a soul beyond what it can bear.", 'sweet', 0.4),
   ('AMINA', "So before you say yes, you can ask: can I really carry this?", 'sweet', 0.5),
   ('DALIA', "I never thought of it that way.", 'sweet', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Before you say yes, say: let me check and get back to you.", 'sweet', 0),
   ('DALIA', "Okay, let me try it right now.", 'neutral', 0.5),
   ('DALIA', "That felt so much lighter.", 'happy', 3.2),
   ('AMINA', "And you can still say yes later, if you really can.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+2.2', 'L1')], pops=[], phones=[('tryit', 'L1+1.0', 'L2-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before your next yes.", 'sweet', 0),
   ('DALIA', "Okay. I'll pause first, then answer.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
