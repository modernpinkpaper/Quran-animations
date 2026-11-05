// HAND-WRITTEN ACTING BEATS for "One rule for angry texts" (type 2: kind correction; general audience). Faces: never `thinking` (looks like an eye roll). Dalia is ANGRY first (annoyed, angry, stern), then embarrassed, then calm. Amina is a warm friend: open palms, tilted head, soft smile; never scolding.
// t: ['L', i, s] = when line i starts (+s) | ['LE', i, s] = when line i ends | number = seconds from the scene start | ['E', s] = scene end.  d = length, or until = end time.
export const CUES = {
  open: [
    // L0 she reads the rude message (shock, then boiling), L1 she types the furious reply out loud (angry, fast nods, point), Amina walks in at L2 and is light and kind, L3 Dalia explains (still hot), L4 Amina asks gently
    { who: 'DALIA', t: ['L', 0, 0], until: ['LE', 0, 0.3], face: 'shocked', pose: 'open', lean: 0.04, slump: 0.0 },
    { who: 'DALIA', t: ['LE', 0, 0.4], d: 1.8, face: 'annoyed', pose: 'lap', slump: 0.04 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 0.2], face: 'angry', pose: 'point', lean: 0.05, nod: 0.1 },
    { who: 'DALIA', t: ['LE', 1, 0.4], d: 1.6, face: 'furious', pose: 'lap', lean: 0.03 },
    { who: 'AMINA', t: 3.0, d: 1.2, face: 'worried', tilt: 0.08, look: [-0.4, 0] }, { who: 'AMINA', t: 5.4, d: 1.2, face: 'sweet', tilt: -0.06, nod: 0.05 },
    { who: 'AMINA', t: ['L', 2, 0], d: 2.2, pose: 'open', face: 'sweet', tilt: 0.13, lean: 0.04 },
    { who: 'DALIA', t: ['L', 2, 0.4], d: 1.8, face: 'embarrassed', slump: 0.06, look: [0.2, -0.3] },
    { who: 'DALIA', t: ['L', 3, 0], until: ['LE', 3, 0.3], face: 'annoyed', pose: 'shrug', slump: 0.06, tilt: -0.08 },
    { who: 'AMINA', t: ['L', 3, 0.8], d: 2.0, face: 'worried', tilt: 0.12, lean: 0.04 },
    { who: 'AMINA', t: ['L', 4, 0], d: 3.0, pose: 'chest', face: 'sweet', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 4, 1.2], until: ['E', 0], face: 'neutral', slump: 0.04, nod: 0.08 },
  ],
  verse: [
    // reverent while the verse is on the phone; Dalia is doubtful ("even after what she wrote?"), softens
    { who: 'AMINA', t: ['L', 0, 0], until: ['L', 3, 0], pose: 'lap', face: 'sweet' },
    { who: 'AMINA', t: ['L', 0, 1.4], d: 1.0, tilt: 0.07, nod: 0.05 }, { who: 'AMINA', t: ['L', 1, 0.2], d: 1.2, nod: 0.06 }, { who: 'AMINA', t: ['L', 2, 0.4], d: 1.2, tilt: 0.1, face: 'proud' },
    { who: 'DALIA', t: ['L', 0, 0.3], until: ['L', 2, 0], face: 'neutral', look: [0.5, 0.1], slump: 0.06 },
    { who: 'DALIA', t: ['L', 2, 0.8], d: 2.0, face: 'surprised', pose: 'point', lean: 0.04, tilt: 0.08 },
    { who: 'DALIA', t: ['L', 3, 0], until: ['E', 0], face: 'worried', pose: 'shrug', slump: 0.05, tilt: 0.1 },
    { who: 'AMINA', t: ['L', 3, 0.6], until: ['E', 0], pose: 'open', face: 'giggle', tilt: 0.1, act: 'nod' },
  ],
  habit: [
    // the 10-second rule: phone down (hands in lap, a deep breath), she deletes, then types kindly with a small smile, and is happy
    { who: 'AMINA', t: ['L', 0, 0.2], d: 2.8, pose: 'open', face: 'sweet', tilt: 0.1 },
    { who: 'AMINA', t: ['L', 0, 3.8], d: 2.0, pose: 'point', face: 'happy', nod: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.4], d: 3.4, face: 'neutral', pose: 'lap', slump: 0.04 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['LE', 1, 3.0], pose: 'lap', face: 'relieved', slump: 0.02, breath: 3.2 },
    { who: 'DALIA', t: ['L', 2, 0], until: ['LE', 2, 0.3], pose: 'chest', face: 'nervous smile', nod: 0.08, lean: 0.04 },
    { who: 'AMINA', t: ['L', 3, 0], until: ['E', 0], pose: 'open', face: 'proud', tilt: 0.1 },
    { who: 'DALIA', t: ['L', 3, 0.5], until: ['E', 0], pose: 'hips', face: 'big smile', slump: 0.0 },
  ],
  close: [
    { who: 'AMINA', t: ['L', 0, 0], d: 2.4, pose: 'open', face: 'in love', tilt: 0.1, lean: 0.05 },
    { who: 'DALIA', t: ['L', 0, 0.6], d: 1.8, face: 'neutral', nod: 0.08 },
    { who: 'DALIA', t: ['L', 1, 0], until: ['E', 0], pose: 'chest', face: 'happy', slump: 0.0, lean: 0.04 },
    { who: 'AMINA', t: ['L', 1, 0.6], until: ['E', 0], face: 'big smile', pose: 'lap' },
  ],
};
