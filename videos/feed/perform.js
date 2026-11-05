// HAND-WRITTEN ACTING BEATS for "The perfect feed" (type 2: kind correction; general audience). Faces: never `thinking` (looks like an eye roll). Dalia is deflated and a little envious (tired, sad, embarrassed) then lighter; Amina is a warm friend, never scolding.
// t: ['L', i, s] = when line i starts (+s) | ['LE', i, s] = when line i ends | number = seconds from the scene start | ['E', s] = scene end.  d = length, or until = end time.
export const CUES = {
  open: [
    // L0-L1 she scrolls the perfect feed (small thumb-flick nods, eyes on the phone, sinking), Amina walks in at L2, L3 "what's wrong with me?" (sad, small), L4 Amina is gentle
    { who: 'DALIA', t: 0, until: ['L', 0, 0], face: 'tired', pose: 'lap', slump: 0.1, look: [0.0, -0.5] },
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0.3], face: 'sad', pose: 'lap', slump: 0.13, look: [0.0, -0.5] },
    { who: 'DALIA', t: ['L', 0, 0.8], d: 0.5, nod: 0.07 }, { who: 'DALIA', t: ['L', 0, 2.0], d: 0.5, nod: 0.07 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.5], face: 'sad', pose: 'shrug', slump: 0.16, tilt: -0.1 },
    { who: 'AMINA', t: 2.8, d: 1.2, face: 'worried', tilt: 0.08, look: [-0.4, 0] }, { who: 'AMINA', t: 5.2, d: 1.2, face: 'sweet', tilt: -0.06, nod: 0.05 },
    { who: 'AMINA', t: ['L', 2, 0], d: 2.2, pose: 'open', face: 'sweet', tilt: 0.13, lean: 0.04 },
    { who: 'DALIA', t: ['L', 2, 0.5], d: 1.6, face: 'embarrassed', slump: 0.12, look: [0.2, -0.4] },
    { who: 'DALIA', t: ['L', 3, 0], until: ['LE', 3, 0.4], face: 'sad', pose: 'lap', slump: 0.16, look: [-0.2, -0.45] },
    { who: 'AMINA', t: ['L', 3, 0.8], d: 2.0, face: 'worried', tilt: 0.12, lean: 0.04 },
    { who: 'AMINA', t: ['L', 4, 0], d: 3.0, pose: 'chest', face: 'sweet', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 4, 1.2], until: ['E', 0], face: 'neutral', slump: 0.07, nod: 0.08 },
  ],
  verse: [
    // reverent while the verse is on the phone; "only the shine" lands: Dalia lifts a little, nods, a small smile
    { who: 'AMINA', t: ['L', 0, 0], until: ['L', 3, 0], pose: 'lap', face: 'sweet' },
    { who: 'AMINA', t: ['L', 0, 1.6], d: 1.0, tilt: 0.07, nod: 0.05 }, { who: 'AMINA', t: ['L', 1, 0.2], d: 1.2, nod: 0.06 }, { who: 'AMINA', t: ['L', 2, 0.4], d: 1.2, tilt: 0.1, face: 'proud' },
    { who: 'DALIA', t: ['L', 0, 0.3], until: ['L', 2, 0], face: 'neutral', look: [0.5, 0.1], slump: 0.08 },
    { who: 'DALIA', t: ['L', 2, 0.8], d: 2.0, face: 'surprised', pose: 'point', lean: 0.04, tilt: 0.08 },
    { who: 'DALIA', t: ['L', 3, 0], until: ['E', 0], face: 'relieved', pose: 'chest', slump: 0.03, nod: 0.09, tilt: 0.1 },
    { who: 'AMINA', t: ['L', 3, 0.6], until: ['E', 0], pose: 'open', face: 'giggle', tilt: 0.1, act: 'nod' },
  ],
  habit: [
    // the easy way: Dalia tries the phrase (nervous smile, hand on heart), wishes them well, and the weight lifts
    { who: 'AMINA', t: ['L', 0, 0.2], d: 3.0, pose: 'open', face: 'sweet', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 0, 4.2], d: 2.0, pose: 'point', face: 'happy', nod: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.4], d: 3.4, face: 'neutral', pose: 'lap', slump: 0.05 },
    { who: 'AMINA', t: ['L', 1, 0.2], d: 2.4, pose: 'chest', face: 'sweet', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 2, 0], until: ['LE', 2, 0.3], pose: 'chest', face: 'relieved', nod: 0.08, lean: 0.04 },
    { who: 'DALIA', t: ['L', 3, 0], until: ['LE', 3, 0.3], pose: 'hips', face: 'nervous smile', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 4, 0], until: ['E', 0], pose: 'open', face: 'proud', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 4, 0.5], until: ['E', 0], pose: 'lap', face: 'big smile', slump: 0.0 },
  ],
  close: [
    { who: 'AMINA', t: ['L', 0, 0], d: 2.4, pose: 'open', face: 'in love', tilt: 0.1, lean: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.6], d: 1.8, face: 'neutral', nod: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['E', 0], pose: 'chest', face: 'happy', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 1, 0.6], until: ['E', 0], face: 'big smile', pose: 'lap' },
  ],
};
