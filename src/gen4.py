import json,re,colorsys
T="themes"
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
C=[
 dict(id="origami",name="Origami Tobiichi",series="Date A Live",font="cinzel",trim="double",tag="Wings unfolded. Target locked.",cap="\\2727  Tobiichi",
  L=dict(base="#f3f6fb",primary="#3d6fb8",deep="#1e3a6e",accent="#b8954a",text="#16203a"),D=dict(base="#090e1c",primary="#8fb3ff",deep="#23365e",accent="#e8ecf5",text="#e6ecfa"),
  src=("dpj3do","vg2828","9mpqlx")),
 dict(id="cyrene",name="Cyrene",series="Honkai: Star Rail",font="cormorant",trim="dots",tag="Petals and memories, carried home.",cap="\\2740  Cyrene",
  L=dict(base="#fbf3fb",primary="#c24f9e",deep="#7a2a66",accent="#2f9e97",text="#2a1630"),D=dict(base="#120a1c",primary="#f08ad0",deep="#5a2a5e",accent="#7ee0d6",text="#f3e6f5"),
  src=("1qqpm9","vpp9xl","6llo5w")),
 dict(id="yoshino",name="Yoshino Himekawa",series="Date A Live",font="playfair",trim="dots",tag="Yoshinon says: don\\2019t be scared of the rain!",cap="\\2602  Yoshino",
  L=dict(base="#f1f8ef",primary="#3f8f4a",deep="#245a2c",accent="#2f86c0",text="#15281a"),D=dict(base="#071814",primary="#7cd18a",deep="#1f4a2a",accent="#7cc8f0",text="#e4f4ea"),
  src=("4gq7y3","763j19","43xze3")),
 dict(id="kurumi-lycoris",name="Kurumi (Lycoris)",series="Lycoris Recoil",font="cinzel",trim="dash",tag="Already in your network. Snacks, please.",cap="\\2328  Kurumi",
  L=dict(base="#fff8ec",primary="#d0801a",deep="#8a4f0a",accent="#2f7a5a",text="#2a1e10"),D=dict(base="#121010",primary="#f2b13a",deep="#5a3a0a",accent="#6fd6a0",text="#f5ece0"),
  src=("8578pk","zygv2o","l35rm2")),
 dict(id="chisato",name="Chisato Nishikigi",series="Lycoris Recoil",font="playfair",trim="dots",tag="Non-lethal, always cheerful. Let\\2019s go!",cap="\\2665  Chisato",
  L=dict(base="#fff5f2",primary="#c8323a",deep="#7e161c",accent="#c9952a",text="#2a1212"),D=dict(base="#140808",primary="#ff5a5a",deep="#5e1418",accent="#ffd27a",text="#fbe9e6"),
  src=("rq7o2q","7pgd63","7pgd63")),
 dict(id="takina",name="Takina Inoue",series="Lycoris Recoil",font="cinzel",trim="double",tag="Efficient. Precise. Mission first.",cap="\\25C6  Takina",
  L=dict(base="#f1f4fa",primary="#2b4c8c",deep="#16284e",accent="#6a4ab0",text="#121a2e"),D=dict(base="#080c16",primary="#6c94e0",deep="#1c2c52",accent="#b49af0",text="#e6ebf6"),
  src=("gpjm3d","8o2p5y","xe53lo")),
 dict(id="sayaka",name="Sayaka Miki",series="Puella Magi Madoka Magica",font="playfair",trim="dots",tag="Justice rides on a single wish.",cap="\\266B  Sayaka",
  L=dict(base="#f0f6ff",primary="#2f6fd6",deep="#163e86",accent="#c9a02a",text="#101c34"),D=dict(base="#070d1c",primary="#5a9cff",deep="#183a7a",accent="#d9e6ff",text="#e6eeff"),
  src=("0prwj9","p96p69","01q1w3")),
 dict(id="kotoko",name="Kotoko Iwanaga",series="In/Spectre",font="cormorant",trim="double",tag="Every mystery deserves a reasonable answer.",cap="\\2756  Kotoko",
  L=dict(base="#fbf5ee",primary="#9a3a3a",deep="#5e1e1e",accent="#6a4ea0",text="#2a1a16"),D=dict(base="#120a10",primary="#e06a6a",deep="#4e1a1e",accent="#c9a8ff",text="#f4e8e6"),
  src=("73vemy","dpkxeg","dpkxeg")),
 dict(id="mirai",name="Mirai Kuriyama",series="Beyond the Boundary",font="cormorant",trim="dots",tag="Unpleasant? Not once the queue is clear.",cap="\\2766  Kuriyama",
  L=dict(base="#fff4f6",primary="#c8405a",deep="#7a1e2e",accent="#b05a2a",text="#2a1218"),D=dict(base="#160a0e",primary="#ff7a92",deep="#5a1a26",accent="#ffb36b",text="#fbe8ec"),
  src=("2k1j6m","p2q8pp","r2o9lm")),
]
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
data["version"]="4"
open(f"{T}/manifest.js","w").write(head+json.dumps(data,indent=2,ensure_ascii=False)+";\n")
print([x["id"] for x in data["characters"]])
