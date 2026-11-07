# Slow version: each Arabic piece slowed down (pitch kept), then the same piece again much quieter at the same slow pace, then the next piece. No spoken prompts, no long empty gaps.
import os, subprocess, wave, numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); W = HERE + '/work'; SR = 44100; SLOW = float(os.environ.get('SLOW', '0.62'))
def load(p):
    w = wave.open(p); x = np.frombuffer(w.readframes(w.getnframes()), dtype='<i2').astype(np.float32) / 32768; sr = w.getframerate()
    if w.getnchannels() == 2: x = x[::2]
    if sr != SR: x = np.interp(np.linspace(0, len(x) - 1, int(len(x) * SR / sr)), np.arange(len(x)), x).astype(np.float32)
    return x
def trim(x, pad=0.1):
    i = np.where(np.abs(x) > 0.01)[0]; return x[max(0, i[0] - int(pad * SR)): i[-1] + int(pad * SR)] if len(i) else x
def slow(k):
    o = f'{W}/slow_{k}.wav'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{W}/ar_{k}.wav', '-af', f'atempo={SLOW}', '-ar', str(SR), '-ac', '1', o], check=True); return o
def fade(x, s=0.06):
    n = int(s * SR); x = x.copy(); x[:n] *= np.linspace(0, 1, n); x[-n:] *= np.linspace(1, 0, n); return x
def quiet(x): return np.convolve(x, np.ones(5) / 5, mode='same') * 0.17
def gap(s): return (np.random.default_rng(1).standard_normal(int(s * SR)) * 10 ** (-60 / 20)).astype(np.float32)
out = [gap(0.4)]
for k in 'abcd':
    x = fade(trim(load(slow(k)))); out += [x, gap(0.5), quiet(x), gap(0.9)]
y = np.concatenate(out); y = y / max(1.0, np.abs(y).max() / 0.92)
with wave.open(HERE + '/dua_sick_slow.wav', 'wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y * 32767).astype('<i2').tobytes())
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', HERE + '/dua_sick_slow.wav', '-b:a', '160k', HERE + '/dua_sick_slow.mp3'])
print('done', round(len(y) / SR, 1), 's')
