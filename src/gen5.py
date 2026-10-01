import json,os,re,colorsys
from pathlib import Path
HERE = Path(__file__).resolve().parent
T = HERE / "themes"
PICKS = Path(os.environ.get("ANIME_PICKS", HERE / "picks.json"))
PAL = Path(os.environ.get("ANIME_PAL", HERE / "pal.tsv"))
def hx(c): c=c.lstrip("#");return tuple(int(c[i:i+2],16) for i in (0,2,4))
def h(t): return "#%02x%02x%02x"%tuple(max(0,min(255,round(v))) for v in t)
def mix(a,b,t): a,b=hx(a),hx(b);return h([a[i]*(1-t)+b[i]*t for i in range(3)])
def rgb(c,p): r,g,b=hx(c);return f"rgb({r} {g} {b} / {p}%)"
def hue(c):
    r,g,b=[v/255 for v in hx(c)];return round(colorsys.rgb_to_hls(r,g,b)[0]*360)
TRIMS={"dots":"radial-gradient(circle at 6px 0, var(--a-line) 2.5px, transparent 3px) 0 0 / 12px 6px repeat-x",
"double":"linear-gradient(var(--a-line), var(--a-line)) 0 1px / 100% 1px no-repeat, linear-gradient(var(--a-line), var(--a-line)) 0 4px / 100% 1px no-repeat",
"stripe":"repeating-linear-gradient(45deg, var(--a-line) 0 4px, transparent 4px 8px) 0 0 / 100% 5px no-repeat",
"dash":"repeating-linear-gradient(90deg, var(--a-line) 0 10px, transparent 10px 16px) 0 1px / 100% 2px no-repeat"}
FONTS={"cinzel":'"AnimeCinzel", Georgia, serif',"playfair":'"AnimePlayfair", Georgia, serif',"cormorant":'"AnimeCormorant", Georgia, serif'}
import sys
P=json.load(open(PICKS))
C=[]
for line in open(PAL,encoding="utf-8").read().strip().splitlines():
    cid,name,series,font,trim,tag,cap,lp,la,dp,da=line.split("\t")
    if cid not in P: continue
    L=dict(base=mix("#ffffff",lp,.05),primary=lp,deep=mix(lp,"#000000",.45),accent=la,text=mix(lp,"#000000",.82))
    D=dict(base=mix("#000000",dp,.07),primary=dp,deep=mix(dp,"#000000",.62),accent=da,text=mix("#ffffff",dp,.08))
    C.append(dict(id=cid,name=name,series=series,font=font,trim=trim,tag=tag,cap=cap,L=L,D=D,src=tuple(P[cid][:3])))
def css(c):
    L,D=c["L"],c["D"];hl,hd=hue(L["base"]),hue(D["base"])
    def light():
        b=L["base"];p=L["primary"]
        return dict(base=b,primary=p,**{"primary-bright":mix(p,"#ffffff",.25),"deep":L["deep"],"accent":L["accent"],"accent-bright":mix(L["accent"],"#ffffff",.3),
        "text":L["text"],"text-disabled":f"hsl({hl}deg 10% 58%)","link":L["deep"],"warn-text":"#8a5a00","error-text":"#b02020","ok-text":"#2f6a2a",
        "surface":rgb(b,74),"surface-2":rgb(mix(b,p,.08),60),"popup":mix(b,"#ffffff",.6),"solid":mix(b,p,.05),"select":p,"hover":mix(p,"#ffffff",.2),
        "border":rgb(L["deep"],18),"border-strong":p,"bar":f"linear-gradient(180deg, {mix(b,'#ffffff',.7)} 0%, {mix(b,p,.12)} 100%)","bar-text":L["deep"],
        "line":p,"glow":rgb(p,28),"overlay":f"linear-gradient(90deg, {rgb(b,35)} 0%, {rgb(b,10)} 55%, transparent 100%)","card":rgb(mix(b,'#ffffff',.5),84),
        "input":"rgb(255 255 255 / 85%)","label":L["deep"]})
    def dark():
        b=D["base"];p=D["primary"]
        return dict(base=b,primary=p,**{"primary-bright":mix(p,"#ffffff",.25),"deep":D["deep"],"accent":D["accent"],"accent-bright":mix(D["accent"],"#ffffff",.3),
        "text":D["text"],"text-disabled":f"hsl({hd}deg 10% 45%)","link":mix(p,"#ffffff",.2),"warn-text":"#ffc860","error-text":"#ff6a5a","ok-text":"#9adf8a",
        "surface":rgb(b,68),"surface-2":rgb(mix(b,p,.1),60),"popup":mix(b,p,.06),"solid":mix(b,p,.05),"select":mix(p,b,.45),"hover":mix(p,b,.25),
        "border":rgb(D["text"],16),"border-strong":p,"bar":f"linear-gradient(180deg, {mix(b,p,.14)} 0%, {b} 100%)","bar-text":D["text"],
        "line":p,"glow":rgb(p,35),"overlay":f"linear-gradient(90deg, {rgb(b,42)} 0%, {rgb(b,12)} 60%, transparent 100%)","card":rgb(mix(b,p,.04),76),
        "input":"rgb(255 255 255 / 6%)","label":p})
    o=[f'/* {c["id"]}: per-character variables. Light = default, dark = qBittorrent\'s .dark class.\n   No url() here: images come from this folder by convention (set by theme-loader.js). */',
       f':root[data-character="{c["id"]}"] {{',f'    --a-font: {FONTS[c["font"]]};',f'    --a-tagline: "\\2014  {c["tag"]}  \\2014";',f'    --a-caption: "{c["cap"]}";',f'    --a-trim: {TRIMS[c["trim"]]};']
    o+=[f"    --a-{k}: {v};" for k,v in light().items()]+["}","",f':root[data-character="{c["id"]}"].dark {{']+[f"    --a-{k}: {v};" for k,v in dark().items()]+["}",""]
    return "\n".join(o)
def pal(c):
    L,D=c["L"],c["D"];p=D["primary"]
    return {"primary":p,"primaryDeep":L["primary"],"primarySoft":mix(p,"#ffffff",.3),"error":"#e5484d","success":D["accent"],"successAlt":mix(D["accent"],L["primary"],.3),
     "successDeep":mix(D["accent"],"#000000",.3),"warn":"#e0902a","warnAlt":mix(L["accent"],"#ffffff",.15),"teal":mix(p,D["accent"],.5),"neutral":mix(D["text"],"#808080",.5),
     "neutralLight":mix(D["text"],"#ffffff",.2),"extra":L["accent"]}
src=open(f"{T}/manifest.js").read();m=re.search(r"window\.ANIME_THEMES\s*=\s*",src);head=src[:m.end()]
data=json.loads(src[m.end():].strip().rstrip(";"))
ids={x["id"] for x in data["characters"]}
for c in C:
    open(f"{T}/{c['id']}/theme.css","w").write(css(c))
    e={"id":c["id"],"name":c["name"],"series":c["series"],"icons":True,"iconPalette":pal(c),
       "sources":{"bg-dark":f"https://wallhaven.cc/w/{c['src'][0]}","bg-light":f"https://wallhaven.cc/w/{c['src'][1]}","avatar":f"https://wallhaven.cc/w/{c['src'][2]}"}}
    if c["id"] in ids: data["characters"]=[e if x["id"]==c["id"] else x for x in data["characters"]]
    else: data["characters"].append(e)
data["version"]="5"
open(f"{T}/manifest.js","w").write(head+json.dumps(data,indent=2,ensure_ascii=False)+";\n")
print([x["id"] for x in data["characters"]])
