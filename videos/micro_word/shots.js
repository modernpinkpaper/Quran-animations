// Cast positions, feelings and camera shots for "Heart Calm".
// Camera shots come from the shared library (camera/shots.js) aimed at the heads below. Every shot moves (see camera/CAMERA.md).
import { SHOTS as K } from '../../camera/shots.js';
const PI = Math.PI;
export const LIGHTS = {
  evening: { bg: ['#f6d6dd', '#fbe6ee'], fog: null, hemi: [0xfff0f4, 0xc9a6d8, 1.0], sun: [0xffe2c0, 1.45], pk: [0xff8fc8, 22], bl: [0x8fb8ff, 18], warm: 1 },
  morning: { bg: ['#cfe0ff', '#fff2d8'], fog: null, hemi: [0xfff6e6, 0xb9b0e0, 1.0], sun: [0xfff0d0, 1.5], pk: [0xffb0c8, 20], bl: [0x9fc8ff, 24], warm: 0 },
  day:     { bg: ['#8fc0f2', '#e6f3ff'], fog: [0xdbe8fa, 90, 260], hemi: [0xfff0ff, 0xb59fd8, 1.0], sun: [0xfff2e6, 1.7], pk: [0xff8fc8, 24], bl: [0x8fb8ff, 24], warm: 0 },
  night:   { bg: ['#262063', '#4a3f8a'], fog: null, hemi: [0xb0b8ff, 0x4a3f7a, 0.62], sun: [0xaab8ff, 0.55], pk: [0xff8fc8, 16], bl: [0x8fb8ff, 24], warm: 1 },
  calm:    { bg: ['#dcefe9', '#f3efe0'], fog: null, hemi: [0xfffaf0, 0xb9c8d8, 1.0], sun: [0xfff2d8, 1.5], pk: [0xffb0c8, 20], bl: [0x9fd0ff, 22], warm: 1 },
};
export const WARM_POS = { evening: [-13, 9, -2], calm: [10, 8, 3], night: [6, 7, 2] };   // one extra warm light (lamp / sun patch)

// head targets [x, y, z]
export const HD = { dalia: [-3.0, 5.7, -3.4], mara: [9.4, 5.7, -5.0], mid: [3.2, 5.6, -4.2], disp: [-8, 8.6, -8.8] };
const DAL = { kf: [[0, -3.0, -3.4, 0, 1.25]], emo: 'happy' };
export const SC = {
  greet: { set: 'entry', light: 'morning', shadow: 'room', side: { DALIA: 1, MARA: -1 }, posture: { DALIA: 0.0 },
           cast: { DALIA: Object.assign({}, DAL), MARA: { kf: [[0, 9.4, -9.6, 0, -1.4], [1.6, 9.4, -5.0, 0, -1.25]], emo: 'happy' } } },
  verse: { set: 'entry', light: 'morning', shadow: 'room', side: { DALIA: 1, MARA: -1 }, posture: { DALIA: 0.0 },
           cast: { DALIA: Object.assign({}, DAL, { emo: 'neutral' }), MARA: { kf: [[0, 9.4, -5.0, 0, -1.25]], emo: 'happy' } } },
  close: { set: 'entry', light: 'morning', shadow: 'room', side: { DALIA: 1, MARA: -1 }, posture: { DALIA: 0.0 },
           cast: { DALIA: Object.assign({}, DAL, { emo: 'happy' }), MARA: { kf: [[0, 9.4, -5.0, 0, -1.25]], emo: 'happy' } } },
};
const D = HD.dalia, Ma = HD.mara, M = HD.mid, Ds = HD.disp;
const up = (t, dy) => [t[0], t[1] + dy, t[2]];
export const CAMS = {
  entryWide: { p: [[1, 8, 34], [2.5, 7, 28]], l: [[1.5, 5.6, -5], [2.5, 5.6, -5]], f: [46, 40], ease: 'io', shake: 0.03 },
  entryDalia: K.closeUp(up(D, 0), 17.5),
  entryDalia2: K.pushIn(up(D, -0.2), 26, 19, { side: 2 }),
  entryMara: K.closeUp(up(Ma, 0), 17.5),
  entryMara2: K.pushIn(up(Ma, -0.2), 26, 19, { side: -2 }),
  entryTwo: { p: [[-6, 6.5, 30], [2, 6.8, 27]], l: [M, M], f: [38, 34], ease: 'io', shake: 0.03 },
  entryDisp: K.zoomLens(Ds, 34, 26),
  finalPull: { p: [[1, 6, 24], [3, 14, 46]], l: [M, [2, 6, -5]], f: [34, 44], ease: 'io' },
};
