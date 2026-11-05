// HAND-WRITTEN ACTING BEATS for "One easy way to pause before yes" (type 2: kind correction; busy moms). Faces: never `thinking` (looks like an eye roll). The correction is WARM: Amina is a kind friend (open palms, tilted head, soft smile), never scolding.
// t: ['L', i, s] = when line i starts (+s) | ['LE', i, s] = when line i ends | number = seconds from the scene start | ['E', s] = scene end.  d = length, or until = end time.
export const CUES = {
  open: [
    // L0 cheerful people-pleasing "yes" (on the chat), then the calendar lands: face drops. L1 panic. Amina walks in at L2 and is kind; Dalia admits "I always say yes" (sad shrug), then relief.
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0.3], face: 'happy', pose: 'open', lean: 0.04, nod: 0.08 },
    { who: 'DALIA', t: ['LE', 0, 0.4], d: 1.6, face: 'neutral', pose: 'lap', slump: 0.05 },
    { who: 'DALIA', t: ['LE', 0, 3.0], until: ['L', 1, 0], face: 'shocked', pose: 'chest', slump: 0.1, lean: 0.04 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.3], face: 'scared', pose: 'shrug', slump: 0.14, tilt: -0.1 },
    { who: 'AMINA', t: 4.0, d: 1.2, face: 'worried', tilt: 0.08, look: [-0.4, 0] }, { who: 'AMINA', t: 6.2, d: 1.2, face: 'sweet', tilt: -0.06, nod: 0.05 },
    { who: 'AMINA', t: ['L', 2, 0], d: 2.2, pose: 'open', face: 'sweet', tilt: 0.13, lean: 0.04 },
    { who: 'DALIA', t: ['L', 2, 0.6], d: 1.6, face: 'embarrassed', slump: 0.12, look: [0.2, -0.4] },
    { who: 'DALIA', t: ['L', 3, 0], until: ['LE', 3, 0.4], face: 'sad', pose: 'lap', slump: 0.15, look: [-0.2, -0.45] },
    { who: 'AMINA', t: ['L', 3, 0.8], d: 2.0, face: 'worried', tilt: 0.12, lean: 0.04 },
    { who: 'AMINA', t: ['L', 4, 0], d: 3.0, pose: 'chest', face: 'sweet', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 4, 3.4], until: ['E', 0], pose: 'open', face: 'happy' },
    { who: 'DALIA', t: ['L', 4, 1.2], until: ['E', 0], face: 'relieved', slump: 0.08, nod: 0.08 },
  ],
  verse: [
    // reverent: Amina is still while the verse is on the phone; Dalia listens, then the idea lands (soft, surprised, relieved)
    { who: 'AMINA', t: ['L', 0, 0], until: ['L', 3, 0], pose: 'lap', face: 'sweet' },
    { who: 'AMINA', t: ['L', 0, 1.4], d: 1.0, tilt: 0.07, nod: 0.05 }, { who: 'AMINA', t: ['L', 1, 0.2], d: 1.2, nod: 0.06 },
    { who: 'DALIA', t: ['L', 0, 0.3], until: ['L', 2, 0], face: 'neutral', look: [0.5, 0.1], slump: 0.08 },
    { who: 'AMINA', t: ['L', 1, 2.0], d: 1.4, nod: 0.07, tilt: 0.06 },
    { who: 'DALIA', t: ['L', 2, 1.0], d: 2.0, face: 'surprised', pose: 'point', lean: 0.04, tilt: 0.08 },
    { who: 'AMINA', t: ['L', 2, 2.2], d: 1.8, pose: 'open', face: 'proud', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 3, 0], until: ['E', 0], face: 'relieved', pose: 'chest', slump: 0.02, nod: 0.09, tilt: 0.1 },
    { who: 'AMINA', t: ['L', 3, 0.5], d: 1.8, face: 'giggle', tilt: 0.1, act: 'nod' },
  ],
  habit: [
    // the easy way: Dalia tries the pause phrase on her phone (small nervous smile), the reply is kind, and she lights up
    { who: 'AMINA', t: ['L', 0, 0.2], d: 2.8, pose: 'open', face: 'sweet', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 0, 3.6], d: 2.0, pose: 'point', face: 'happy', nod: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.4], d: 3.0, face: 'neutral', tilt: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.3], pose: 'hips', face: 'nervous smile', lean: 0.04, nod: 0.08 },
    { who: 'DALIA', t: ['L', 2, 0], until: ['LE', 2, 0.3], pose: 'chest', face: 'happy', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 2, 0.4], d: 1.6, face: 'proud', act: 'nod' },
    { who: 'AMINA', t: ['L', 3, 0], until: ['E', 0], pose: 'open', face: 'sweet', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 3, 0.6], until: ['E', 0], face: 'big smile', pose: 'lap', slump: 0.0 },
  ],
  close: [
    { who: 'AMINA', t: ['L', 0, 0], d: 2.4, pose: 'open', face: 'in love', tilt: 0.1, lean: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.6], d: 1.8, face: 'neutral', nod: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['E', 0], pose: 'chest', face: 'happy', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 1, 0.6], until: ['E', 0], face: 'big smile', pose: 'lap' },
  ],
};
