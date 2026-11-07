# A dua for when you are sick (Quran only): Ayyub's dua (Al-Anbiya 21:83) and "when I am ill, it is He who heals me" (Ash-Shu'ara 26:80).
# Amina says each short piece slowly, then says it again much quieter (as if helping you say it), then leaves a gap for you to repeat.
# Resumable: only makes missing pieces. Run: CHATTERBOX_PY=<voices env python> AR_TRIES=8 python3 duas/sick/make_dua.py
import os, sys, json, subprocess, numpy as np, wave
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.abspath(HERE + '/../..'); sys.path.insert(0, ROOT + '/voices')
W = HERE + '/work'; os.makedirs(W, exist_ok=True); SR = 44100
AR = json.load(open(HERE + '/arabic.json'))
EN = {'intro': "Dalia, take a slow breath. Say this dua with me, one small piece at a time.",
      'first': "First piece. Listen, then say it after me.", 'second': "Next piece.", 'third': "Now the second dua. First piece.", 'fourth': "Last piece.",
      'end': "May Allah give you healing and ease. Rest now.",
      'm1': "It means: hardship has touched me, and You are the most merciful of the merciful.", 'm2': "It means: when I am ill, it is He who heals me."}
os.environ['SKIP_LINT'] = '1'
from speak import synth_lines
rows = []
for k, t in EN.items():
    o = f'{W}/en_{k}.wav'
    if not os.path.exists(o): rows.append(dict(who='AMINA', text=t, emo='sweet', pace=0.9, out=o))
for k, t in AR.items():
    o = f'{W}/ar_{k}.wav'
    if not os.path.exists(o): rows.append(dict(who='AMINA', text=t, emo='sweet', out=o, lang='ar', verify=t, tries=int(os.environ.get('AR_TRIES', '8'))))
if rows: synth_lines(rows)
def load(p):
    w = wave.open(p); x = np.frombuffer(w.readframes(w.getnframes()), dtype='<i2').astype(np.float32) / 32768; sr = w.getframerate()
    if sr != SR:
        x = np.interp(np.linspace(0, len(x) - 1, int(len(x) * SR / sr)), np.arange(len(x)), x).astype(np.float32)
    if w.getnchannels() == 2: x = x[::2]
    return x
def trim(x, pad=0.08):
    i = np.where(np.abs(x) > 0.01)[0]
    return x[max(0, i[0] - int(pad * SR)): i[-1] + int(pad * SR)] if len(i) else x
def quiet(x):   # the same words, much lower and softer, like helping you say it
    k = np.ones(5) / 5; y = np.convolve(x, k, mode='same') * 0.17   # a little softer (small moving average) and much quieter
    return y
def gap(s): return (np.random.default_rng(1).standard_normal(int(s * SR)) * 10 ** (-60 / 20)).astype(np.float32)
out = [gap(0.6), trim(load(f'{W}/en_intro.wav')), gap(1.0)]
seq = [('first', 'a'), ('second', 'b'), ('third', 'c'), ('fourth', 'd')]
for en, k in seq:
    x = trim(load(f'{W}/ar_{k}.wav')); n = len(x) / SR
    out += [trim(load(f'{W}/en_{en}.wav')), gap(0.7), x, gap(0.9), quiet(x), gap(max(3.5, n * 1.8 + 1.5)),   # time for you to say it
            gap(0.5)]
    if k == 'b': out += [trim(load(f'{W}/en_m1.wav')), gap(1.2)]
    if k == 'd': out += [trim(load(f'{W}/en_m2.wav')), gap(1.2)]
out += [trim(load(f'{W}/en_end.wav')), gap(0.8)]
y = np.concatenate(out); y = y / max(1.0, np.abs(y).max() / 0.92)
with wave.open(HERE + '/dua_sick.wav', 'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y * 32767).astype('<i2').tobytes())
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', HERE + '/dua_sick.wav', '-b:a', '160k', HERE + '/dua_sick.mp3'])
print('done', HERE + '/dua_sick.mp3', round(len(y) / SR, 1), 's')
