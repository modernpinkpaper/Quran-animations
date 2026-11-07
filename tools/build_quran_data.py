# Builds docs/data/index.json and docs/data/s1.json ... s114.json for the practice app (resumable).
# Sources: Quran.com API (Uthmani words, transliteration, word timings, chapter names), reciters' audio on the EveryAyah / Quran Audio mirrors,
# English meaning: Sahih International (from alquran.cloud, cached in /tmp/claude-0/quran/verses.json by the research step).
import json, os, re, subprocess, sys, time
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'docs', 'data'); os.makedirs(OUT, exist_ok=True)
RECS = [(6, 'Husary (clear, steady)'), (12, 'Husary (teaching, slow with repeats)'), (7, 'Alafasy'), (9, 'Minshawi')]
def get(u, tries=4):
    for i in range(tries):
        r = subprocess.run(['curl', '-s', '--max-time', '60', u], capture_output=True, text=True)
        try: return json.loads(r.stdout)
        except Exception: time.sleep(2 + i * 2)
    raise SystemExit('failed: ' + u)
V = json.load(open('/tmp/claude-0/quran/verses.json')); EN = {(v['s'], v['n']): v['en'] for v in V}
def plain(tr, last):
    t = tr.lower()
    if last: t = re.sub(r"([^aiuāīū\-\s'ʿʾ])([aiu])$", r'\1', t)   # at a stop the last short vowel drops
    for a, b in [('ā', 'aa'), ('ī', 'ee'), ('ū', 'oo'), ('ḥ', 'h'), ('ṣ', 's'), ('ḍ', 'd'), ('ṭ', 't'), ('ẓ', 'z'), ('ʿ', "'"), ('ʾ', "'"), ('ġ', 'gh'), ('š', 'sh')]: t = t.replace(a, b)
    return t
chapters = get('https://api.quran.com/api/v4/chapters?language=en')['chapters']
bases = {}
for rid, _ in RECS:
    u = get(f'https://api.quran.com/api/v4/recitations/{rid}/by_chapter/2?fields=segments&per_page=300')['audio_files'][1]['url']
    u = ('https:' + u) if u.startswith('//') else ('https://verses.quran.com/' + u if not u.startswith('http') else u)
    bases[str(rid)] = u[:u.rindex('/') + 1]
json.dump(dict(reciters=[[str(i), n] for i, n in RECS], bases=bases, surahs=[dict(n=c['id'], ar=c['name_arabic'], en=c['name_simple'], meaning=c['translated_name']['name'], count=c['verses_count']) for c in chapters]), open(OUT + '/index.json', 'w'), ensure_ascii=False)
for c in chapters:
    n = c['id']; f = f'{OUT}/s{n}.json'
    if os.path.exists(f): continue
    vs = get(f'https://api.quran.com/api/v4/verses/by_chapter/{n}?words=true&word_fields=text_uthmani,transliteration&per_page=300')['verses']
    segs = {}
    for rid, _ in RECS:
        af = get(f'https://api.quran.com/api/v4/recitations/{rid}/by_chapter/{n}?fields=segments&per_page=300')['audio_files']
        segs[str(rid)] = {a['verse_key']: a for a in af}
    out = []
    for v in vs:
        a = v['verse_key'].split(':'); ay = int(a[1]); ws = [w for w in v['words'] if w['char_type_name'] == 'word']
        words = [[w['text_uthmani'], plain(w['transliteration']['text'] or '', i == len(ws) - 1)] for i, w in enumerate(ws)]
        t = {}
        for rid, _ in RECS:
            x = segs[str(rid)].get(v['verse_key'])
            if not x: continue
            m = {s[1]: [s[2], s[3]] for s in x.get('segments', []) if len(s) >= 4}
            t[str(rid)] = [m.get(i + 1, [0, 0]) for i in range(len(ws))]
        out.append(dict(k=ay, w=words, en=EN[(n, ay)], t=t))
    json.dump(dict(n=n, verses=out), open(f, 'w'), ensure_ascii=False, separators=(',', ':'))
    print('done', n, len(out), flush=True); time.sleep(0.2)
print('ALL DONE')
