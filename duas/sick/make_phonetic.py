# Phonetic version: Amina says the SOUND-SPELLING (English letters) slowly, then the same again much quieter at the same pace, then the next piece.
# Easier to follow than the Arabic voice (the voice is good at English). It is a guide, not the recitation: the heavy "d" (ض) and the breathy "h" (ح) do not exist in English.
import os, sys, subprocess, wave, numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.abspath(HERE + '/../..'); sys.path.insert(0, ROOT + '/voices'); os.environ['SKIP_LINT'] = '1'
W = HERE + '/work'; SR = 44100
P = {'a': "Annie... mass-sa-nee-ya... ad-dur-ru.", 'b': "Wa an-ta... ar-ha-mur-raa-hi-meen.", 'c': "Wa i-thaa... ma-rid-tu.", 'd': "Fa-hu-wa... yash-fee-ni."}
from speak import synth_lines
rows = [dict(who='AMINA', text=t, emo='sweet', pace=float(os.environ.get('PACE', '0.72')), out=f'{W}/ph_{k}.wav') for k, t in P.items() if not os.path.exists(f'{W}/ph_{k}.wav')]
if rows: synth_lines(rows)
def load(p):
    w = wave.open(p); x = np.frombuffer(w.readframes(w.getnframes()), dtype='<i2').astype(np.float32) / 32768; sr = w.getframerate()
    if w.getnchannels() == 2: x = x[::2]
    if sr != SR: x = np.interp(np.linspace(0, len(x) - 1, int(len(x) * SR / sr)), np.arange(len(x)), x).astype(np.float32)
    return x
def trim(x, pad=0.1):
    i = np.where(np.abs(x) > 0.01)[0]; return x[max(0, i[0] - int(pad * SR)): i[-1] + int(pad * SR)] if len(i) else x
def fade(x, s=0.06):
    n = int(s * SR); x = x.copy(); x[:n] *= np.linspace(0, 1, n); x[-n:] *= np.linspace(1, 0, n); return x
def quiet(x): return np.convolve(x, np.ones(5) / 5, mode='same') * 0.17
def gap(s): return (np.random.default_rng(1).standard_normal(int(s * SR)) * 10 ** (-60 / 20)).astype(np.float32)
out = [gap(0.4)]
for k in P:
    x = fade(trim(load(f'{W}/ph_{k}.wav'))); out += [x, gap(0.5), quiet(x), gap(0.9)]
y = np.concatenate(out); y = y / max(1.0, np.abs(y).max() / 0.92)
with wave.open(HERE + '/dua_sick_phonetic.wav', 'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y * 32767).astype('<i2').tobytes())
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', HERE + '/dua_sick_phonetic.wav', '-b:a', '160k', HERE + '/dua_sick_phonetic.mp3'])
print('done', round(len(y) / SR, 1), 's')
