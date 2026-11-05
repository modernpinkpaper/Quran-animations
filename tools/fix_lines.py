"""FIX LINES: remake the voice lines that the checks flag, up to a few rounds, until they pass (the voice model is random: a word like "Allah" or "send" can come out wrong in one take and right in the next).
  CHATTERBOX_PY=<repo>/voices/cbenv/bin/python python3 tools/fix_lines.py videos/<name> [rounds=3]
Flags: lines_check "word not heard" or match < 0.8 on lines WITHOUT Arabic words, and audio_check "hard stop" lines. Arabic-word lines are only reported (use tools/ar_cover.py).
Put names the recognizer spells differently (dina, lina) in videos/<name>/lines_ignore.txt. Ends with exit code 1 if something is still flagged (so a script can stop)."""
import sys, os, re, glob, subprocess, importlib.util
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); d = sys.argv[1].rstrip('/'); rounds = int(sys.argv[2]) if len(sys.argv) > 2 else 3
PY = os.environ.get('CHATTERBOX_PY') or sys.executable
spec = importlib.util.spec_from_file_location('plan', f'{d}/plan.py'); plan = importlib.util.module_from_spec(spec); sys.path.insert(0, d); spec.loader.exec_module(plan)
flat = [l for s in plan.SCENES for l in s['lines']]; has_ar = {i for i, l in enumerate(flat) if '{ar:' in (l[4] if len(l) > 4 else '')}
def flagged():
    bad = set()
    out = subprocess.run([PY, '-I', f'{ROOT}/tools/lines_check.py', d], capture_output=True, text=True).stdout
    for m in re.finditer(r'^(\d\d) .*<-- LISTEN', out, re.M):
        i = int(m.group(1))
        if i not in has_ar: bad.add(i)
    out2 = subprocess.run([sys.executable, f'{ROOT}/tools/audio_check.py', d], capture_output=True, text=True).stdout
    for m in re.finditer(r'line (\d+) \(.*hard stop', out2): bad.add(int(m.group(1)))
    return sorted(bad)
for r in range(1, rounds + 1):
    bad = flagged()
    if not bad: print('all lines pass'); sys.exit(0)
    print(f'round {r}: remaking lines {bad}', flush=True)
    for i in bad:
        for f in [f'{d}/work/l{i:02d}.wav', f'{d}/work/raw/l{i:02d}.wav'] + glob.glob(f'{d}/work/s{i:02d}_*.wav'):
            if os.path.exists(f): os.remove(f)
    subprocess.run([sys.executable, f'{d}/build_audio.py'], env=dict(os.environ, CHATTERBOX_PY=PY), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
bad = flagged(); print('still flagged after the last round:', bad or 'none'); sys.exit(1 if bad else 0)
