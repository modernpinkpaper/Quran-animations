// HAND-WRITTEN ACTING BEATS for "One dua for when you worry" (type 3: everyday situation + a dua). Only Dalia is on screen; Amina is the voice-over, so Dalia's face and body carry the whole story.
// Faces: never `thinking` (looks like an eye roll). Burdened = worried or sad with the head and eyes DOWN. t: ['L', i, s] line start (+s) | ['LE', i, s] line end | ['E', s] scene end.
export const CUES = {
  open: [
    // 2 AM, worried about money: heavy and awake. L1 = scrolling (thumb-flick nods, eyes down), then fed up. L2 = a small spark of curiosity.
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0], pose: 'lap', face: 'worried', slump: 0.16, look: [0.1, -0.5] },
    { who: 'DALIA', t: ['L', 0, 2.6], d: 1.6, face: 'sad', slump: 0.18, tilt: -0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['L', 1, 3.8], pose: 'open', face: 'tired', slump: 0.15, look: [0.0, -0.6] },
    { who: 'DALIA', t: ['L', 1, 0.6], d: 0.5, nod: 0.07 }, { who: 'DALIA', t: ['L', 1, 1.8], d: 0.5, nod: 0.07 }, { who: 'DALIA', t: ['L', 1, 3.0], d: 0.5, nod: 0.07 },
    { who: 'DALIA', t: ['L', 1, 3.8], until: ['LE', 1, 0.2], pose: 'shrug', face: 'embarrassed', slump: 0.18, tilt: -0.1 },
    { who: 'DALIA', t: ['L', 2, 0], d: 2.2, face: 'sad', slump: 0.14, pose: 'lap' },
    { who: 'DALIA', t: ['L', 2, 2.4], until: ['E', 0], face: 'surprised', pose: 'think', tilt: 0.12, slump: 0.08, look: [0.2, 0.15] },
  ],
  verse: [
    // listening to the verse on the phone: worried at first, then the words land
    { who: 'DALIA', t: ['L', 0, 0], until: ['L', 1, 0.5], face: 'worried', pose: 'lap', slump: 0.12, look: [0.3, -0.2] },
    { who: 'DALIA', t: ['L', 1, 0.6], d: 3.6, face: 'neutral', slump: 0.1, nod: 0.06, look: [0.35, 0.05] },
    { who: 'DALIA', t: ['L', 1, 4.2], until: ['E', 0], face: 'relieved', pose: 'chest', slump: 0.04, nod: 0.09, tilt: 0.1 },
  ],
  dua: [
    // on the prayer mat: calm, listens, then says the dua with her eyes closed, then she smiles at the other moments
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0], pose: 'lap', face: 'neutral', slump: 0.05 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.2], pose: 'chest', face: 'relieved', slump: 0.03, nod: 0.06 },
    { who: 'DALIA', t: ['L', 2, 0], until: ['LE', 2, 0.3], pose: 'chest', face: 'relieved', slump: 0.0, nod: 0.09, lean: 0.03 },
    { who: 'DALIA', t: ['L', 3, 0.2], d: 2.6, pose: 'open', face: 'neutral', tilt: 0.1, nod: 0.06 },
    { who: 'DALIA', t: ['L', 3, 3.0], d: 3.2, pose: 'reach', face: 'nervous smile', lean: 0.05 },
    { who: 'DALIA', t: ['L', 3, 6.4], until: ['E', 0], pose: 'lap', face: 'happy', slump: 0.0 },
  ],
  close: [
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0.2], pose: 'hips', face: 'neutral', lean: 0.04, nod: 0.07 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['E', 0], pose: 'point', face: 'big smile', slump: 0.0, lean: 0.05, nod: 0.08 },
  ],
};
