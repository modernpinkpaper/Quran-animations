# ONE DUA FOR WHEN YOU WORRY (script type 3: everyday situation + a dua). Surah Al-Imran 3:173 (the end: Hasbunallahu wa ni'mal wakeel).
# Mostly silent on screen: Amina is the voice-over, Dalia acts. POV text on frame 0, pictures pop up for what people usually do, the verse on a phone, the dua to COPY, then "ALSO SAY IT WHEN..." (3 other moments), then "try it today".
# Quran only, no hadith. Each scene: lines (who, text, emotion, gap-before[, spoken-text-if-different]), shots, cards (id, start, end), pops (emoji, x, y, start, end), phones (id, start, end).
# No 1 or 2 word English sentences for the cloned voices.
TOTAL = None
SCENES = [
 dict(id='open', set='bed', pre=0.12, post=0.5, lines=[
   ('DALIA', "Rent is due in three days.", 'sad', 0.5),
   ('DALIA', "And the news says prices are going up again.", 'worried', 1.6),
   ('AMINA', "Checking again won't help. Here's something better to say.", 'sweet', 4.6)],
  # ACTED OUT (not narrated): wide in the dark bedroom, her phone screen (bank alerts), her face, the news on the phone, the bank app AGAIN (same alert), then she gives up and Amina speaks
  shots=[('bedWide', 0), ('bedCu', 'L0+2.2'), ('bedPush', 'L1+0.2'), ('bedCu', 'L1+3.6'), ('bedWide', 'L2-0.4'), ('bedCu', 'L2+1.0')],
  cards=[], pops=[],
  phones=[('bank', 1.0, 'L0+2.4'), ('news', 'L1-0.3', 'L1+3.1'), ('again', 'L1+3.9', 'L2-0.3')]),
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
