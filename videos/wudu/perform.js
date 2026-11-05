// HAND-WRITTEN ACTING BEATS for "One reminder before you pray" (type 2: kind correction). Faces: never `thinking` (looks like an eye roll). Burdened/embarrassed = head down; the correction is WARM (Amina never scolds: open palms, tilted head, soft smile).
// t: ['L', i, s] = when line i starts (+s) | ['LE', i, s] = when line i ends | number = seconds from the scene start | ['E', s] = scene end.  d = length, or until = end time.
export const CUES = {
  open: [
    // Dalia walks in from the left, happy and ready, lifts her hands to begin; Amina walks in from the right and is kind; "I forgot" lands as a small embarrassed shrug, then relief
    { who: 'DALIA', t: 0, until: ['LE', 0, 0.2], face: 'happy', pose: 'chest', slump: 0.0 },
    { who: 'DALIA', t: ['L', 0, 1.6], d: 1.6, pose: 'open', face: 'happy', lean: 0.03 },
    { who: 'AMINA', t: ['L', 1, 0], d: 3.0, pose: 'open', face: 'sweet', tilt: 0.12, lean: 0.04 },
    { who: 'DALIA', t: ['L', 1, 0.5], until: ['L', 2, 0], face: 'neutral', tilt: 0.1, nod: 0.06 },
    { who: 'DALIA', t: ['L', 2, 0], d: 1.8, face: 'happy', pose: 'open', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 3, 0], d: 3.0, pose: 'chest', face: 'sweet', tilt: 0.1, lean: 0.03 },
    { who: 'DALIA', t: ['L', 3, 1.0], until: ['L', 4, 0], face: 'surprised', pose: 'shrug', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 4, 0], until: ['LE', 4, 0.5], face: 'embarrassed', pose: 'shrug', slump: 0.12, look: [-0.2, -0.45], tilt: -0.1 },
    { who: 'AMINA', t: ['L', 4, 0.8], d: 1.8, face: 'giggle', act: 'nod', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 5, 0], d: 3.2, pose: 'open', face: 'sweet', tilt: 0.12, lean: 0.04 },
    { who: 'DALIA', t: ['L', 5, 0.6], until: ['E', 0], face: 'relieved', slump: 0.04, nod: 0.08 },
  ],
  verse: [
    // reverent while the verse is on the phone; Dalia learns and nods; "coming from the bathroom" = she recognises herself (surprised, then a small laugh)
    { who: 'AMINA', t: ['L', 0, 0], until: ['L', 3, 0], pose: 'lap', face: 'sweet' },
    { who: 'AMINA', t: ['L', 1, 2.4], d: 1.2, nod: 0.07, tilt: 0.06 }, { who: 'AMINA', t: ['L', 2, 1.0], d: 1.2, nod: 0.07, lean: 0.03 }, { who: 'AMINA', t: ['L', 2, 3.0], d: 1.4, tilt: 0.1, face: 'proud' },
    { who: 'DALIA', t: ['L', 0, 0.3], until: ['L', 3, 0], face: 'neutral', look: [0.5, 0.1], tilt: 0.06 },
    { who: 'DALIA', t: ['L', 1, 2.0], d: 1.4, nod: 0.08, lean: 0.03 }, { who: 'DALIA', t: ['L', 2, 1.6], d: 1.4, nod: 0.08, lean: 0.03 },
    { who: 'DALIA', t: ['L', 3, 0.4], d: 2.2, face: 'surprised', pose: 'point', lean: 0.04 },
    { who: 'AMINA', t: ['L', 3, 0.5], d: 2.0, face: 'proud', pose: 'open', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 3, 2.4], until: ['E', 0], face: 'nervous smile', pose: 'chest', nod: 0.08, slump: 0.03 },
  ],
  habit: [
    // the checklist: Dalia counts the four steps on her fingers (point pose) with small nods, then lights up
    { who: 'AMINA', t: ['L', 0, 0.2], d: 2.6, pose: 'open', face: 'sweet', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 0, 3.4], d: 2.2, pose: 'point', face: 'happy', nod: 0.06 },
    { who: 'DALIA', t: ['L', 0, 0.4], d: 3.0, face: 'neutral', tilt: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.3], pose: 'point', face: 'big smile', nod: 0.1, lean: 0.04 },
    { who: 'AMINA', t: ['L', 2, 0], d: 1.8, face: 'proud', pose: 'chest', act: 'nod' },
    { who: 'DALIA', t: ['L', 2, 0.4], until: ['E', 0], pose: 'hips', face: 'proud', slump: 0.0, nod: 0.08 },
    { who: 'AMINA', t: ['L', 2, 2.2], until: ['E', 0], pose: 'open', face: 'sweet', tilt: 0.1 },
  ],
  close: [
    { who: 'AMINA', t: ['L', 0, 0], d: 2.4, pose: 'open', face: 'in love', tilt: 0.1, lean: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.6], d: 1.8, face: 'neutral', nod: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['E', 0], pose: 'chest', face: 'happy', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 1, 0.6], until: ['E', 0], face: 'big smile', pose: 'lap' },
  ],
};
