# THE LAUGH AT SOMEONE (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-Hujurat 49:11 (the first part). Audience: GENERAL.
# Dalia laughs at a classmate's embarrassing video in the group chat and is about to forward it; Amina kindly asks how Dina would feel and shows the verse (let not a people ridicule another people; they may be better than them). ONE easy way: do not forward it, send Dina a kind message. Quran only, no hadith, no rulings. Dina, Noor are made up.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Ha, look at this video. Dina tripped on stage!", 'laugh', 0.5),
   ('DALIA', "Everyone has to see this. I'm sending it to the whole class.", 'happy', 1.4),
   ('AMINA', "Whoa, what's so funny?", 'sweet', 2.6),
   ('DALIA', "Dina fell during the school play. It's hilarious.", 'laugh', 0.6),
   ('AMINA', "Can I ask something first? How would Dina feel if she saw this?", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+2.6'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('gc', 0.4, 'L0+2.8'), ('fwd', 'L1-0.2', 'L1+3.4')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Chapter forty-nine, verse eleven. Let's read it together.", 'neutral', 0),
   ('AMINA', "Don't let one group laugh at another group. They may be better than them.", 'sweet', 0.4),
   ('AMINA', "The person in that video is a real person, not a joke.", 'sweet', 0.5),
   ('DALIA', "Oh. I didn't think about how she'd feel.", 'sad', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Don't forward it. Send her a kind message instead.", 'sweet', 0),
   ('DALIA', "Okay. I'll send her something kind instead.", 'neutral', 0.5),
   ('DALIA', "Hey Dina, it was brave to get on that stage. You did great.", 'sweet', 3.0),
   ('AMINA', "See? One kind message can turn a hard day around.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+2.6', 'L1')], pops=[], phones=[('kindmsg', 'L2-0.2', 'L3-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before you laugh and forward.", 'sweet', 0),
   ('DALIA', "Okay. I'll think about the person first.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
