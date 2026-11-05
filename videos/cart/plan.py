# THE MIDNIGHT CART (script type 2: real-life role-play with a KIND CORRECTION). Surah Al-A'raf 7:31 (the end of the verse). Audience: GENERAL.
# Dalia piles things into an online cart at midnight because "it's on sale"; Amina kindly asks if she needs them or just loves the deal, and shows the verse (eat and drink but do not be wasteful; He does not love the wasteful). ONE easy way: leave it in the cart for 24 hours; if she still needs it tomorrow, buy it. No exact money on screen (only percent-off and item counts). Quran only, no hadith, no rulings.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Sixty percent off, and it ends tonight? I need all of this.", 'excited', 0.5),
   ('DALIA', "Add to cart. Add to cart. Oh, and this one too.", 'happy', 2.6),
   ('AMINA', "Hey, it's midnight. What are you buying?", 'sweet', 2.4),
   ('DALIA', "It's on sale! I'm saving so much.", 'happy', 0.6),
   ('AMINA', "Can I ask something first? Do you need these things, or do you just love the deal?", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+3.0'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('shop', 0.4, 'L0+3.0'), ('cart', 'L1-0.2', 'L1+3.4')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Chapter seven, verse thirty-one. Let's read it together.", 'neutral', 0),
   ('AMINA', "Eat and drink, but don't be wasteful. Allah doesn't love the wasteful.", 'sweet', 0.4),
   ('AMINA', "A sale makes spending feel like saving. It's only saving if you needed it.", 'sweet', 0.5),
   ('DALIA', "Oh. I only need maybe two of these.", 'sad', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. Leave it in the cart for twenty-four hours.", 'sweet', 0),
   ('DALIA', "Okay. If I still need it tomorrow, I'll buy it.", 'neutral', 0.5),
   ('DALIA', "That feels so much calmer already.", 'happy', 3.0),
   ('AMINA', "And the deal will probably come back anyway.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L1+0.8'), ('daliaCu2', 'L2'), ('aminaCu', 'L3')], cards=[('copy', 'L0+2.4', 'L1')], pops=[], phones=[('wait', 'L1+0.6', 'L2-0.1')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, before your next checkout.", 'sweet', 0),
   ('DALIA', "Okay. Cart first, then sleep, then decide.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
