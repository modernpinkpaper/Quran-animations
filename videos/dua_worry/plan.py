# ONE DUA FOR WHEN YOU WORRY (script type 3: everyday situation + a dua). Surah Al-Imran 3:173 (the end: Hasbunallahu wa ni'mal wakeel).
# Mostly silent on screen: Amina is the voice-over, Dalia acts. POV text on frame 0, pictures pop up for what people usually do, the verse on a phone, the dua to COPY, then "ALSO SAY IT WHEN..." (3 other moments), then "try it today".
# Quran only, no hadith. Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops (emoji, x, y, start, end), phones (id, start, end).
# No 1 or 2 word English sentences for the cloned voices.
TOTAL = None
SCENES = [
 dict(id='open', set='bed', vo=True, pre=0.12, post=0.5, lines=[
   ('AMINA', "It's two in the morning, and you're worried about money.", 'sweet', 0),
   ('AMINA', "So you check your bank app. Again. Then you scroll the news. Again.", 'neutral', 0.5),
   ('AMINA', "Does it help? Not really. But there is something better to say.", 'sweet', 0.7)],
  shots=[('bedPush', 0), ('bedCu', 'L1'), ('bedWide', 'L1+3.6'), ('bedCu', 'L2')],
  cards=[('pov', 0.0, 'L0+3.4')], pops=[('📱', 392, 175, 'L1', 'L1+2.8'), ('💸', 28, 205, 'L1+0.9', 'L1+3.6'), ('📰', 392, 290, 'L1+2.4', 'L1+5.4')], phones=[]),
 dict(id='verse', set='bed', vo=True, pre=0.4, post=0.6, lines=[
   ('AMINA', 'Al-Imran. This is verse number one seventy-three.', 'neutral', 0, '{ar:سُورَةُ آلِ عِمْرَانَ}. This is verse number one seventy-three.'),
   ('AMINA', "People told them: be afraid. It only made their faith stronger. They said: Allah is enough for us.", 'sweet', 0.5)],
  shots=[('bedCu', 0), ('bedPush', 'L1')], cards=[], pops=[], phones=[('quran', 'L1-0.1', 'E-0.1')]),
 dict(id='dua', set='mat', vo=True, pre=0.5, post=0.6, lines=[
   ('AMINA', "Here's the dua to copy: Hasbunallahu wa ni'mal wakeel.", 'sweet', 0, "Here's the dua to copy: {ar:حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ}."),
   ('AMINA', "It means: Allah is enough for us, and He is the best one to rely on.", 'sweet', 0.4),
   ('DALIA', "Hasbunallahu wa ni'mal wakeel.", 'neutral', 0.6, '{ar:حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ}.'),
   ('AMINA', "Say it when you wait for a test result. Before a scary call. Or when it's out of your hands.", 'sweet', 0.7)],
  shots=[('matPush', 0), ('matCu', 'L1'), ('matDalia', 'L2-0.1'), ('matCu', 'L3'), ('matDalia', 'L3+3.4')], cards=[('copy', 'L0+1.8', 'L2'), ('also', 'L3-0.1', 'E')], pops=[], phones=[]),
 dict(id='close', set='mat', vo=True, pre=0.6, post=1.6, lines=[
   ('AMINA', "Try it today. Next time you want to check that app again, say it first.", 'sweet', 0),
   ('DALIA', "Okay. I'll say it first.", 'sweet', 0.6)],
  shots=[('matCu', 0), ('matDalia', 'L1-0.2'), ('matPull', 'L1+0.8')], cards=[('recap', 0.3, 'E')], pops=[], phones=[]),
]
