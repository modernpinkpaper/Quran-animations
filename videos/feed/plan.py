# THE PERFECT FEED (script type 2: real-life role-play with a KIND CORRECTION). Surah Ta-Ha 20:131 (the first part) and the Quran phrase of Al-Kahf 18:39. Audience: GENERAL.
# Dalia scrolls everyone's perfect trips and homes and feels smaller; Amina kindly reminds her of "do not stretch your eyes toward what We gave others to enjoy" and gives ONE easy way: say the Quran phrase (ma sha Allah, la quwwata illa billah), wish them well, put the phone down. Quran only, no hadith, no rulings.
# Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops, phones (id, start, end). No 1 or 2 word English sentences for the cloned voices. Voice emotions allowed: deadpan, dramatic, excited, happy, laugh, neutral, sad, shock, smug, stern, sweet, tired, worried.
TOTAL = None
SCENES = [
 dict(id='open', set='room', pre=0.12, post=0.4, lines=[
   ('DALIA', "Another trip. Another new house. Everyone's life looks perfect.", 'sad', 0.5),
   ('DALIA', "And I'm here in my pajamas, doing nothing at all.", 'sad', 0.8),
   ('AMINA', "Hey, that's a lot of scrolling.", 'sweet', 1.8),
   ('DALIA', "Everyone is doing better than me. What's wrong with me?", 'sad', 0.6),
   ('AMINA', "Nothing is wrong with you. The Quran has a gentle reminder for this.", 'sweet', 0.6)],
  shots=[('twoShot', 0), ('daliaCu2', 'L0+4.2'), ('daliaCu', 'L1'), ('aminaCuS', 'L2'), ('daliaCu2', 'L3'), ('pushAminaS', 'L4')], cards=[], pops=[],
  phones=[('feed', 0.4, 'L0+4.0')]),
 dict(id='verse', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Chapter twenty, verse one hundred thirty-one. Let's read it together.", 'neutral', 0),
   ('AMINA', "Don't stretch your eyes toward what We gave others to enjoy. It's only the shine of this life.", 'sweet', 0.4),
   ('AMINA', "A screen shows you the shiny part. You never see the whole day.", 'sweet', 0.5),
   ('DALIA', "So I'm only looking at the shine.", 'sweet', 0.6)],
  shots=[('lowAmina', 0), ('verseZoom', 'L1'), ('aminaLow', 'L2'), ('daliaCu2', 'L3-0.1'), ('twoShot', 'L3+1.2')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'L2-0.3')]),
 dict(id='habit', set='room', pre=0.5, post=0.5, lines=[
   ('AMINA', "Here's your easy way. When you feel that pull, say: ma sha Allah, la quwwata illa billah.", 'sweet', 0, "Here's your easy way. When you feel that pull, say: {ar:مَا شَآءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ}."),
   ('AMINA', "It means: what Allah wills happens, and there is no power except with Allah.", 'sweet', 0.4),
   ('DALIA', "Ma sha Allah, la quwwata illa billah.", 'neutral', 0.6, "{ar:مَا شَآءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ}."),
   ('DALIA', "Then I wish them well, and I put the phone down.", 'sweet', 0.5),
   ('AMINA', "Now you can be glad for them, and keep your own peace.", 'sweet', 0.6)],
  shots=[('daliaMed', 0), ('aminaLow', 'L1-0.2'), ('daliaCu', 'L2-0.1'), ('daliaCu2', 'L3'), ('aminaCu', 'L4')], cards=[('copy', 'L0+4.0', 'L2')], pops=[], phones=[('sayit', 'L2', 'L3+2.4')]),
 dict(id='close', set='room', pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it this week, whenever the feed makes you sigh.", 'sweet', 0),
   ('DALIA', "Okay. I'll say it, smile, and put the phone down.", 'happy', 0.6)],
  shots=[('aminaCu', 0), ('daliaMed', 'L1-0.2'), ('finalPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
