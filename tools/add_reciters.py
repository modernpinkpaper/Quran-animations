# Adds more reciters (word timings + audio base) to docs/data/s1..s114.json and index.json. Resumable (skips chapters that already have the reciter).
import json, os, subprocess, sys, time
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'docs', 'data')
NEW = [(4, 'Shatri (plain, calm, steady)'), (3, 'Sudais (steady, clear)'), (10, 'Shuraym (steady, clear, a bit faster)')]
def get(u, tries=4):
    for i in range(tries):
        r = subprocess.run(['curl', '-s', '--max-time', '60', u], capture_output=True, text=True)
        try: return json.loads(r.stdout)
        except Exception: time.sleep(2 + i * 2)
    raise SystemExit('failed: ' + u)
idx = json.load(open(D + '/index.json'))
for rid, name in NEW:
    u = get(f'https://api.quran.com/api/v4/recitations/{rid}/by_chapter/2?fields=segments&per_page=300')['audio_files'][1]['url']
    u = ('https:' + u) if u.startswith('//') else ('https://verses.quran.com/' + u if not u.startswith('http') else u)
    idx['bases'][str(rid)] = u[:u.rindex('/') + 1]
    if not any(r[0] == str(rid) for r in idx['reciters']): idx['reciters'].append([str(rid), name])
json.dump(idx, open(D + '/index.json', 'w'), ensure_ascii=False)
for n in range(1, 115):
    f = f'{D}/s{n}.json'; sd = json.load(open(f)); changed = False
    for rid, _ in NEW:
        if all(str(rid) in v['t'] for v in sd['verses']): continue
        af = {a['verse_key']: a for a in get(f'https://api.quran.com/api/v4/recitations/{rid}/by_chapter/{n}?fields=segments&per_page=300')['audio_files']}
        for v in sd['verses']:
            x = af.get(f"{n}:{v['k']}")
            if not x: continue
            m = {s[1]: [s[2], s[3]] for s in x.get('segments', []) if len(s) >= 4}
            v['t'][str(rid)] = [m.get(i + 1, [0, 0]) for i in range(len(v['w']))]
        changed = True
    if changed: json.dump(sd, open(f, 'w'), ensure_ascii=False, separators=(',', ':')); print('done', n, flush=True)
    time.sleep(0.15)
print('ALL DONE')
