"""LINES CHECK: listen to EVERY spoken line and compare it to the script.
Run:  voices/cbenv/bin/python -I tools/lines_check.py videos/<name>
It transcribes work/l00.wav, l01.wav ... with faster-whisper and compares them to the text in plan.py.
Lines with {ar:...} words are compared without the Arabic part. A line under 0.8 match is listed: LISTEN to it (short 1 to 2 word sentences are the usual culprit).
audio_check.py finds clicks and silence; this finds garbled or wrong words."""
import sys, re, wave, difflib, importlib.util, numpy as np
d = sys.argv[1].rstrip('/')
spec = importlib.util.spec_from_file_location('plan', f'{d}/plan.py'); plan = importlib.util.module_from_spec(spec); sys.path.insert(0, d); spec.loader.exec_module(plan)
from faster_whisper import WhisperModel
m = WhisperModel('small', compute_type='int8')
norm = lambda t: [w.strip("'") for w in re.sub(r"[^a-z' ]", '', t.lower().replace('-', ' ')).split() if w.strip("'")]   # quote marks around a word are not part of the word
AR = re.compile(r'\{ar:[^}]*\}'); bad = []
flat = [l for s in plan.SCENES for l in s['lines']]
import difflib as _dl
def missing_words(want, heard):
    """words of the script (4+ letters) that were NOT heard (not even close): the overall match can stay high (0.86) while one important word is wrong, like 'wudu' heard as 'voodoo'"""
    hw = norm(heard); out = []; digits = any(c.isdigit() for c in heard)
    NUM = set('one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred first second third'.split())
    for w in norm(want):
        if len(w) < 4 or (digits and w in NUM): continue   # the recognizer writes numbers as digits
        need = 0.99 if len(w) <= 5 else 0.8   # short words must match EXACTLY ('send' heard as 'end' is a wrong word)
        if not any(_dl.SequenceMatcher(None, w, h).ratio() >= need for h in hw):
            out.append((w, max(hw, key=lambda h: _dl.SequenceMatcher(None, w, h).ratio()) if hw else ''))
    return out
for i, l in enumerate(flat):
    w = wave.open(f'{d}/work/l{i:02d}.wav'); sr = w.getframerate(); x = np.frombuffer(w.readframes(w.getnframes()), dtype='<i2').astype(np.float32) / 32768
    a16 = np.interp(np.arange(0, len(x), sr / 16000), np.arange(len(x)), x).astype('float32')
    segs, _ = m.transcribe(a16, language='en', beam_size=5); heard = ' '.join(s.text for s in segs).strip()
    spoken = l[4] if len(l) > 4 else l[1]; want = AR.sub(' ', spoken)
    NUMW = set('one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred first second third'.split())
    wn = [w for w in norm(want) if not (any(c.isdigit() for c in heard) and w in NUMW)]   # the recognizer writes numbers as digits
    r = difflib.SequenceMatcher(None, wn, norm(heard)).ratio(); miss = missing_words(want, heard)
    flag = '  <-- LISTEN' if (r < 0.8 or miss) else ''
    print(f'{i:02d} {l[0]:6s} {r:.2f} | {heard[:70]}{flag}')
    for w_, h_ in miss: print(f'      word not heard: "{w_}" (closest heard: "{h_}")')
    if r < 0.8 or miss: bad.append(i)
print('lines to listen to:', bad or 'none')
sys.exit(1 if bad else 0)   # exit code 1 = something to check (so a script can stop the build)
