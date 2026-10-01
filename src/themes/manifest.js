/* Anime theme pack manifest - the single list of characters (picker order = list order).
   To add a character: create themes/<id>/ (theme.css, bg-dark.webp, bg-light.webp,
   avatar.webp, favicon.png) and add an entry below. "iconPalette" is used by build.py
   to generate themes/<id>/icons/; set "icons": false to reuse the default icons.
   The object assigned below must stay valid JSON (no comments, no trailing commas). */
window.ANIME_THEMES = {
  "version": "6",
  "default": "kurumi",
  "characters": [
    {
      "id": "kurumi",
      "name": "Kurumi Tokisaki",
      "series": "Date A Live",
      "icons": true,
      "iconPalette": {
        "primary": "#e0263a",
        "primaryDeep": "#b5121b",
        "primarySoft": "#e8586a",
        "error": "#ff3344",
        "success": "#e8c547",
        "successAlt": "#d4a537",
        "successDeep": "#b8860b",
        "warn": "#f08a24",
        "warnAlt": "#c9a227",
        "teal": "#a0782a",
        "neutral": "#a89a9a",
        "neutralLight": "#cdbfbf",
        "extra": "#8e2a5a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/48882k",
        "bg-light": "https://wallhaven.cc/w/p2k62m",
        "avatar": "https://wallhaven.cc/w/3zmmdy"
      }
    },
    {
      "id": "siesta",
      "name": "Siesta",
      "series": "The Detective Is Already Dead",
      "icons": true,
      "iconPalette": {
        "primary": "#4a9cd6",
        "primaryDeep": "#2e5c9a",
        "primarySoft": "#8ec9e8",
        "error": "#e05a6a",
        "success": "#5fc2b0",
        "successAlt": "#4aae9e",
        "successDeep": "#2e8a7e",
        "warn": "#e3a84a",
        "warnAlt": "#c9a060",
        "teal": "#6aa8c8",
        "neutral": "#9aa3b2",
        "neutralLight": "#c8cdd6",
        "extra": "#6a7fc0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j3j5vm",
        "bg-light": "https://wallhaven.cc/w/o3ry79",
        "avatar": "https://wallhaven.cc/w/6ormrw"
      }
    },
    {
      "id": "madoka",
      "name": "Madoka Kaname",
      "series": "Puella Magi Madoka Magica",
      "icons": true,
      "iconPalette": {
        "primary": "#f06a9e",
        "primaryDeep": "#d04a80",
        "primarySoft": "#ffa6c6",
        "error": "#e0475e",
        "success": "#e2b857",
        "successAlt": "#d4a84a",
        "successDeep": "#b8902e",
        "warn": "#f59a5b",
        "warnAlt": "#e0a070",
        "teal": "#c47ab0",
        "neutral": "#b39aa6",
        "neutralLight": "#d8c4ce",
        "extra": "#b06ad0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j3qo15",
        "bg-light": "https://wallhaven.cc/w/4y95d7",
        "avatar": "https://wallhaven.cc/w/5gpg11"
      }
    },
    {
      "id": "homura",
      "name": "Homura Akemi",
      "series": "Puella Magi Madoka Magica",
      "icons": true,
      "iconPalette": {
        "primary": "#9b6bc8",
        "primaryDeep": "#6a3f92",
        "primarySoft": "#b48cd8",
        "error": "#e04a6a",
        "success": "#a8b8e0",
        "successAlt": "#98a8d0",
        "successDeep": "#7080b0",
        "warn": "#e0b04a",
        "warnAlt": "#c9a060",
        "teal": "#8a7ab8",
        "neutral": "#9a93a6",
        "neutralLight": "#c9c9d6",
        "extra": "#c06ab0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/l3pvj2",
        "bg-light": "https://wallhaven.cc/w/4723g9",
        "avatar": "https://wallhaven.cc/w/95m1yk"
      }
    },
    {
      "id": "roxy",
      "name": "Roxy Migurdia",
      "series": "Mushoku Tensei",
      "icons": true,
      "iconPalette": {
        "primary": "#4c7bd9",
        "primaryDeep": "#2a4a9a",
        "primarySoft": "#8fb0ff",
        "error": "#e05a5a",
        "success": "#5fb8e8",
        "successAlt": "#4aa0d0",
        "successDeep": "#2a7ab0",
        "warn": "#c89a5e",
        "warnAlt": "#a87a4a",
        "teal": "#5a8ab8",
        "neutral": "#9aa0b0",
        "neutralLight": "#c8ccd8",
        "extra": "#8a6ac8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j3zqlq",
        "bg-light": "https://wallhaven.cc/w/1pvlg9",
        "avatar": "https://wallhaven.cc/w/72kyke"
      }
    },
    {
      "id": "eruruu",
      "name": "Eruruu",
      "series": "Utawarerumono",
      "icons": true,
      "iconPalette": {
        "primary": "#c8483a",
        "primaryDeep": "#8e2a20",
        "primarySoft": "#e88a70",
        "error": "#e0303a",
        "success": "#7a9a4a",
        "successAlt": "#6a8a3a",
        "successDeep": "#4e6a2a",
        "warn": "#d9a04a",
        "warnAlt": "#b88a5a",
        "teal": "#6a8a6a",
        "neutral": "#a89a8a",
        "neutralLight": "#d0c4b4",
        "extra": "#9a5a8a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/mpl9gm",
        "bg-light": "https://wallhaven.cc/w/j8kke5",
        "avatar": "https://wallhaven.cc/w/mpl9gm"
      }
    },
    {
      "id": "mami",
      "name": "Mami Tomoe",
      "series": "Puella Magi Madoka Magica",
      "icons": true,
      "iconPalette": {
        "primary": "#e0a82a",
        "primaryDeep": "#b8862a",
        "primarySoft": "#ffd970",
        "error": "#d8503a",
        "success": "#8aa040",
        "successAlt": "#7a9038",
        "successDeep": "#5e7228",
        "warn": "#e07a2a",
        "warnAlt": "#a8703a",
        "teal": "#8a6a3a",
        "neutral": "#a89a86",
        "neutralLight": "#d6cbb6",
        "extra": "#a0603a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/z8jpro",
        "bg-light": "https://wallhaven.cc/w/76g3kv",
        "avatar": "https://wallhaven.cc/w/z8jpro"
      }
    },
    {
      "id": "soifon",
      "name": "Soi Fon",
      "series": "Bleach",
      "icons": true,
      "iconPalette": {
        "primary": "#d4a017",
        "primaryDeep": "#a07a10",
        "primarySoft": "#f2c230",
        "error": "#e04a3a",
        "success": "#8a9a5a",
        "successAlt": "#7a8a4a",
        "successDeep": "#5a6a3a",
        "warn": "#e07a1a",
        "warnAlt": "#b88a4a",
        "teal": "#6a7a8a",
        "neutral": "#8a8a8a",
        "neutralLight": "#bdbdbd",
        "extra": "#6a5a8a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/nzvy9y",
        "bg-light": "https://wallhaven.cc/w/9mm6q8",
        "avatar": "https://wallhaven.cc/w/9mm6q8"
      }
    },
    {
      "id": "origami",
      "name": "Origami Tobiichi",
      "series": "Date A Live",
      "icons": true,
      "iconPalette": {
        "primary": "#8fb3ff",
        "primaryDeep": "#3d6fb8",
        "primarySoft": "#b1caff",
        "error": "#e5484d",
        "success": "#e8ecf5",
        "successAlt": "#b5c6e3",
        "successDeep": "#a2a5ac",
        "warn": "#e0902a",
        "warnAlt": "#c3a565",
        "teal": "#bcd0fa",
        "neutral": "#b3b6bd",
        "neutralLight": "#ebf0fb",
        "extra": "#b8954a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/dpj3do",
        "bg-light": "https://wallhaven.cc/w/vg2828",
        "avatar": "https://wallhaven.cc/w/9mpqlx"
      }
    },
    {
      "id": "cyrene",
      "name": "Cyrene",
      "series": "Honkai: Star Rail",
      "icons": true,
      "iconPalette": {
        "primary": "#f08ad0",
        "primaryDeep": "#c24f9e",
        "primarySoft": "#f4adde",
        "error": "#e5484d",
        "success": "#7ee0d6",
        "successAlt": "#92b4c5",
        "successDeep": "#589d96",
        "warn": "#e0902a",
        "warnAlt": "#4eada7",
        "teal": "#b7b5d3",
        "neutral": "#bab3ba",
        "neutralLight": "#f5ebf7",
        "extra": "#2f9e97"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/8gkkm2",
        "bg-light": "https://wallhaven.cc/w/2116k9",
        "avatar": "https://wallhaven.cc/w/6llo5w"
      }
    },
    {
      "id": "yoshino",
      "name": "Yoshino Himekawa",
      "series": "Date A Live",
      "icons": true,
      "iconPalette": {
        "primary": "#7cd18a",
        "primaryDeep": "#3f8f4a",
        "primarySoft": "#a3dfad",
        "error": "#e5484d",
        "success": "#7cc8f0",
        "successAlt": "#6ab7be",
        "successDeep": "#578ca8",
        "warn": "#e0902a",
        "warnAlt": "#4e98c9",
        "teal": "#7cccbd",
        "neutral": "#b2bab5",
        "neutralLight": "#e9f6ee",
        "extra": "#2f86c0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/4gq7y3",
        "bg-light": "https://wallhaven.cc/w/763j19",
        "avatar": "https://wallhaven.cc/w/43xze3"
      }
    },
    {
      "id": "kurumi-lycoris",
      "name": "Kurumi (Lycoris)",
      "series": "Lycoris Recoil",
      "icons": true,
      "iconPalette": {
        "primary": "#f2b13a",
        "primaryDeep": "#d0801a",
        "primarySoft": "#f6c875",
        "error": "#e5484d",
        "success": "#6fd6a0",
        "successAlt": "#8cbc78",
        "successDeep": "#4e9670",
        "warn": "#e0902a",
        "warnAlt": "#4e8e73",
        "teal": "#b0c46d",
        "neutral": "#bab6b0",
        "neutralLight": "#f7f0e6",
        "extra": "#2f7a5a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/8578pk",
        "bg-light": "https://wallhaven.cc/w/zygv2o",
        "avatar": "https://wallhaven.cc/w/l35rm2"
      }
    },
    {
      "id": "chisato",
      "name": "Chisato Nishikigi",
      "series": "Lycoris Recoil",
      "icons": true,
      "iconPalette": {
        "primary": "#ff5a5a",
        "primaryDeep": "#c8323a",
        "primarySoft": "#ff8c8c",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#eea267",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#d1a54a",
        "teal": "#ff966a",
        "neutral": "#beb4b3",
        "neutralLight": "#fcedeb",
        "extra": "#c9952a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/rq7o2q",
        "bg-light": "https://wallhaven.cc/w/k7yxd6",
        "avatar": "https://wallhaven.cc/w/rdmdrj"
      }
    },
    {
      "id": "takina",
      "name": "Takina Inoue",
      "series": "Lycoris Recoil",
      "icons": true,
      "iconPalette": {
        "primary": "#6c94e0",
        "primaryDeep": "#2b4c8c",
        "primarySoft": "#98b4e9",
        "error": "#e5484d",
        "success": "#b49af0",
        "successAlt": "#8b83d2",
        "successDeep": "#7e6ca8",
        "warn": "#e0902a",
        "warnAlt": "#8065bc",
        "teal": "#9097e8",
        "neutral": "#b3b6bb",
        "neutralLight": "#ebeff8",
        "extra": "#6a4ab0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/gpjm3d",
        "bg-light": "https://wallhaven.cc/w/8o2p5y",
        "avatar": "https://wallhaven.cc/w/xe53lo"
      }
    },
    {
      "id": "sayaka",
      "name": "Sayaka Miki",
      "series": "Puella Magi Madoka Magica",
      "icons": true,
      "iconPalette": {
        "primary": "#5a9cff",
        "primaryDeep": "#2f6fd6",
        "primarySoft": "#8cbaff",
        "error": "#e5484d",
        "success": "#d9e6ff",
        "successAlt": "#a6c2f3",
        "successDeep": "#98a1b2",
        "warn": "#e0902a",
        "warnAlt": "#d1ae4a",
        "teal": "#9ac1ff",
        "neutral": "#b3b7c0",
        "neutralLight": "#ebf1ff",
        "extra": "#c9a02a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/0prwj9",
        "bg-light": "https://wallhaven.cc/w/p96p69",
        "avatar": "https://wallhaven.cc/w/01q1w3"
      }
    },
    {
      "id": "kotoko",
      "name": "Kotoko Iwanaga",
      "series": "In/Spectre",
      "icons": true,
      "iconPalette": {
        "primary": "#e06a6a",
        "primaryDeep": "#9a3a3a",
        "primarySoft": "#e99797",
        "error": "#e5484d",
        "success": "#c9a8ff",
        "successAlt": "#bb87c4",
        "successDeep": "#8d76b2",
        "warn": "#e0902a",
        "warnAlt": "#8069ae",
        "teal": "#d489b4",
        "neutral": "#bab4b3",
        "neutralLight": "#f6edeb",
        "extra": "#6a4ea0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/73vemy",
        "bg-light": "https://wallhaven.cc/w/dpkxeg",
        "avatar": "https://wallhaven.cc/w/dpkxeg"
      }
    },
    {
      "id": "mirai",
      "name": "Mirai Kuriyama",
      "series": "Beyond the Boundary",
      "icons": true,
      "iconPalette": {
        "primary": "#ff7a92",
        "primaryDeep": "#c8405a",
        "primarySoft": "#ffa2b3",
        "error": "#e5484d",
        "success": "#ffb36b",
        "successAlt": "#ee9066",
        "successDeep": "#b27d4b",
        "warn": "#e0902a",
        "warnAlt": "#bc734a",
        "teal": "#ff967e",
        "neutral": "#beb4b6",
        "neutralLight": "#fcedf0",
        "extra": "#b05a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/2k1j6m",
        "bg-light": "https://wallhaven.cc/w/p2q8pp",
        "avatar": "https://wallhaven.cc/w/r2o9lm"
      }
    },
    {
      "id": "elysia",
      "name": "Elysia",
      "series": "Honkai Impact 3rd",
      "icons": true,
      "iconPalette": {
        "primary": "#ff9ccf",
        "primaryDeep": "#c8508f",
        "primarySoft": "#ffbadd",
        "error": "#e5484d",
        "success": "#c9a8ff",
        "successAlt": "#c98edd",
        "successDeep": "#8d76b2",
        "warn": "#e0902a",
        "warnAlt": "#8e6cc9",
        "teal": "#e4a2e7",
        "neutral": "#c0bcbe",
        "neutralLight": "#fff9fc",
        "extra": "#7a52c0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/gpz95e",
        "bg-light": "https://wallhaven.cc/w/l3l5lp",
        "avatar": "https://wallhaven.cc/w/l3l5lp"
      }
    },
    {
      "id": "verina",
      "name": "Verina",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#9be0a0",
        "primaryDeep": "#3f8a4a",
        "primarySoft": "#b9e9bc",
        "error": "#e5484d",
        "success": "#ffb8d0",
        "successAlt": "#c5aaa8",
        "successDeep": "#b28192",
        "warn": "#e0902a",
        "warnAlt": "#c97892",
        "teal": "#cdccb8",
        "neutral": "#bcbebc",
        "neutralLight": "#f9fdf9",
        "extra": "#c0607f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/6d1zvx",
        "bg-light": "https://wallhaven.cc/w/85w1py",
        "avatar": "https://wallhaven.cc/w/85w1py"
      }
    },
    {
      "id": "ellen",
      "name": "Ellen Joe",
      "series": "Zenless Zone Zero",
      "icons": true,
      "iconPalette": {
        "primary": "#ff5a6a",
        "primaryDeep": "#b02a34",
        "primarySoft": "#ff8c97",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#d7afb2",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#4a4a4a",
        "teal": "#f4a1a9",
        "neutral": "#c0b9ba",
        "neutralLight": "#fff5f5",
        "extra": "#2a2a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/l8p6dy",
        "bg-light": "https://wallhaven.cc/w/x6ojqd",
        "avatar": "https://wallhaven.cc/w/m35wj1"
      }
    },
    {
      "id": "tribbie",
      "name": "Tribbie",
      "series": "Honkai: Star Rail",
      "icons": true,
      "iconPalette": {
        "primary": "#ffcc6a",
        "primaryDeep": "#c07a1a",
        "primarySoft": "#ffdb97",
        "error": "#e5484d",
        "success": "#ff9ccf",
        "successAlt": "#ec9299",
        "successDeep": "#b26d91",
        "warn": "#e0902a",
        "warnAlt": "#c3658e",
        "teal": "#ffb49c",
        "neutral": "#c0beba",
        "neutralLight": "#fffcf5",
        "extra": "#b84a7a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/rrvgxm",
        "bg-light": "https://wallhaven.cc/w/211dyx",
        "avatar": "https://wallhaven.cc/w/rrvgxm"
      }
    },
    {
      "id": "remilia",
      "name": "Remilia Scarlet",
      "series": "Touhou Project",
      "icons": true,
      "iconPalette": {
        "primary": "#ff4a6a",
        "primaryDeep": "#a01a3a",
        "primarySoft": "#ff8097",
        "error": "#e5484d",
        "success": "#c9a8ff",
        "successAlt": "#bd7dc4",
        "successDeep": "#8d76b2",
        "warn": "#e0902a",
        "warnAlt": "#7358ae",
        "teal": "#e479b4",
        "neutral": "#c0b8ba",
        "neutralLight": "#fff4f5",
        "extra": "#5a3aa0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/eoyygo",
        "bg-light": "https://wallhaven.cc/w/6og2l7",
        "avatar": "https://wallhaven.cc/w/72gk59"
      }
    },
    {
      "id": "rem",
      "name": "Rem",
      "series": "Re:Zero",
      "icons": true,
      "iconPalette": {
        "primary": "#7aa8ff",
        "primaryDeep": "#2f5fc8",
        "primarySoft": "#a2c2ff",
        "error": "#e5484d",
        "success": "#e0e6ff",
        "successAlt": "#abbeee",
        "successDeep": "#9da1b2",
        "warn": "#e0902a",
        "warnAlt": "#656580",
        "teal": "#adc7ff",
        "neutral": "#babcc0",
        "neutralLight": "#f6f9ff",
        "extra": "#4a4a6a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/6k3oyq",
        "bg-light": "https://wallhaven.cc/w/mp19lm",
        "avatar": "https://wallhaven.cc/w/1j1om9"
      }
    },
    {
      "id": "ram",
      "name": "Ram",
      "series": "Re:Zero",
      "icons": true,
      "iconPalette": {
        "primary": "#ff8ab0",
        "primaryDeep": "#c84a72",
        "primarySoft": "#ffadc8",
        "error": "#e5484d",
        "success": "#f0e0ea",
        "successAlt": "#e4b3c6",
        "successDeep": "#a89da4",
        "warn": "#e0902a",
        "warnAlt": "#656580",
        "teal": "#f8b5cd",
        "neutral": "#c0bbbc",
        "neutralLight": "#fff8fa",
        "extra": "#4a4a6a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/od5el9",
        "bg-light": "https://wallhaven.cc/w/eokelr",
        "avatar": "https://wallhaven.cc/w/eokelr"
      }
    },
    {
      "id": "haruhi-fujioka",
      "name": "Haruhi Fujioka",
      "series": "Ouran High School Host Club",
      "icons": true,
      "iconPalette": {
        "primary": "#b89ae0",
        "primaryDeep": "#5e3f80",
        "primarySoft": "#cdb8e9",
        "error": "#e5484d",
        "success": "#ffb0d0",
        "successAlt": "#cf8eb8",
        "successDeep": "#b27b92",
        "warn": "#e0902a",
        "warnAlt": "#bc7892",
        "teal": "#dca5d8",
        "neutral": "#bcbcbe",
        "neutralLight": "#faf9fd",
        "extra": "#b0607f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/z89r5v",
        "bg-light": "https://wallhaven.cc/w/q2o8l5",
        "avatar": "https://wallhaven.cc/w/q2o8l5"
      }
    },
    {
      "id": "caesar",
      "name": "Caesar King",
      "series": "Zenless Zone Zero",
      "icons": true,
      "iconPalette": {
        "primary": "#ffc84a",
        "primaryDeep": "#a8760f",
        "primarySoft": "#ffd880",
        "error": "#e5484d",
        "success": "#ff6a5a",
        "successAlt": "#e56e44",
        "successDeep": "#b24a3f",
        "warn": "#e0902a",
        "warnAlt": "#b54841",
        "teal": "#ff9952",
        "neutral": "#c0beb8",
        "neutralLight": "#fffcf4",
        "extra": "#a8281f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/5y7zw8",
        "bg-light": "https://wallhaven.cc/w/5yrzy1",
        "avatar": "https://wallhaven.cc/w/1qd9o1"
      }
    },
    {
      "id": "klee",
      "name": "Klee",
      "series": "Genshin Impact",
      "icons": true,
      "iconPalette": {
        "primary": "#ff6a5a",
        "primaryDeep": "#c8281f",
        "primarySoft": "#ff978c",
        "error": "#e5484d",
        "success": "#ffd06a",
        "successAlt": "#ee9e53",
        "successDeep": "#b2924a",
        "warn": "#e0902a",
        "warnAlt": "#b58c33",
        "teal": "#ff9d62",
        "neutral": "#c0bab9",
        "neutralLight": "#fff5f5",
        "extra": "#a8780f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/1k1gkg",
        "bg-light": "https://wallhaven.cc/w/zm1qdo",
        "avatar": "https://wallhaven.cc/w/zm1qdo"
      }
    },
    {
      "id": "rapi",
      "name": "Rapi",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#ff5a5a",
        "primaryDeep": "#a82424",
        "primarySoft": "#ff8c8c",
        "error": "#e5484d",
        "success": "#d8d8d8",
        "successAlt": "#caa2a2",
        "successDeep": "#979797",
        "warn": "#e0902a",
        "warnAlt": "#585858",
        "teal": "#ec9999",
        "neutral": "#c0b9b9",
        "neutralLight": "#fff5f5",
        "extra": "#3a3a3a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/gppyy7",
        "bg-light": "https://wallhaven.cc/w/y89ldk",
        "avatar": "https://wallhaven.cc/w/gppyy7"
      }
    },
    {
      "id": "deku",
      "name": "Izuku Midoriya",
      "series": "My Hero Academia",
      "icons": true,
      "iconPalette": {
        "primary": "#5ad08a",
        "primaryDeep": "#25784a",
        "primarySoft": "#8cdead",
        "error": "#e5484d",
        "success": "#ff6a5a",
        "successAlt": "#be6e55",
        "successDeep": "#b24a3f",
        "warn": "#e0902a",
        "warnAlt": "#c34f41",
        "teal": "#ac9d72",
        "neutral": "#b9bebb",
        "neutralLight": "#f5fcf8",
        "extra": "#b8301f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j8rz9p",
        "bg-light": "https://wallhaven.cc/w/r75po7",
        "avatar": "https://wallhaven.cc/w/r75po7"
      }
    },
    {
      "id": "bakugo",
      "name": "Katsuki Bakugo",
      "series": "My Hero Academia",
      "icons": true,
      "iconPalette": {
        "primary": "#ff9a3a",
        "primaryDeep": "#c0600f",
        "primarySoft": "#ffb875",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#dcbfa7",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#4a4a4a",
        "teal": "#f4c191",
        "neutral": "#c0bcb8",
        "neutralLight": "#fff9f2",
        "extra": "#2a2a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/2kv2gg",
        "bg-light": "https://wallhaven.cc/w/r7emdj",
        "avatar": "https://wallhaven.cc/w/2kv2gg"
      }
    },
    {
      "id": "todoroki",
      "name": "Shoto Todoroki",
      "series": "My Hero Academia",
      "icons": true,
      "iconPalette": {
        "primary": "#ff6a5a",
        "primaryDeep": "#b8281f",
        "primarySoft": "#ff978c",
        "error": "#e5484d",
        "success": "#8ac8ff",
        "successAlt": "#9898bc",
        "successDeep": "#618cb2",
        "warn": "#e0902a",
        "warnAlt": "#4e89c9",
        "teal": "#c499ac",
        "neutral": "#c0bab9",
        "neutralLight": "#fff5f5",
        "extra": "#2f74c0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/eyv8m8",
        "bg-light": "https://wallhaven.cc/w/2k5xdg",
        "avatar": "https://wallhaven.cc/w/2k5xdg"
      }
    },
    {
      "id": "uraraka",
      "name": "Ochaco Uraraka",
      "series": "My Hero Academia",
      "icons": true,
      "iconPalette": {
        "primary": "#ff9ab0",
        "primaryDeep": "#c84a6a",
        "primarySoft": "#ffb8c8",
        "error": "#e5484d",
        "success": "#e0d8f0",
        "successAlt": "#d9adc8",
        "successDeep": "#9d97a8",
        "warn": "#e0902a",
        "warnAlt": "#585873",
        "teal": "#f0b9d0",
        "neutral": "#c0bcbc",
        "neutralLight": "#fff9fa",
        "extra": "#3a3a5a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/8358rk",
        "bg-light": "https://wallhaven.cc/w/2k6mmy",
        "avatar": "https://wallhaven.cc/w/8358rk"
      }
    },
    {
      "id": "iida",
      "name": "Tenya Iida",
      "series": "My Hero Academia",
      "icons": true,
      "iconPalette": {
        "primary": "#6a90ff",
        "primaryDeep": "#2a4a9a",
        "primarySoft": "#97b1ff",
        "error": "#e5484d",
        "success": "#d0d8e8",
        "successAlt": "#9eadd1",
        "successDeep": "#9297a2",
        "warn": "#e0902a",
        "warnAlt": "#738093",
        "teal": "#9db4f4",
        "neutral": "#babbc0",
        "neutralLight": "#f5f8ff",
        "extra": "#5a6a80"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/g81w63",
        "bg-light": "https://wallhaven.cc/w/57jo23",
        "avatar": "https://wallhaven.cc/w/vgvp9p"
      }
    },
    {
      "id": "makoto-yuki",
      "name": "Makoto Yuki",
      "series": "Persona",
      "icons": true,
      "iconPalette": {
        "primary": "#6a90e0",
        "primaryDeep": "#2a4a8a",
        "primarySoft": "#97b1e9",
        "error": "#e5484d",
        "success": "#8ad0ff",
        "successAlt": "#6da8dc",
        "successDeep": "#6192b2",
        "warn": "#e0902a",
        "warnAlt": "#4e89c9",
        "teal": "#7ab0f0",
        "neutral": "#babbbe",
        "neutralLight": "#f5f8fd",
        "extra": "#2f74c0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/837x3k",
        "bg-light": "https://wallhaven.cc/w/k8zd97",
        "avatar": "https://wallhaven.cc/w/837x3k"
      }
    },
    {
      "id": "joker",
      "name": "Joker (Ren Amamiya)",
      "series": "Persona",
      "icons": true,
      "iconPalette": {
        "primary": "#ff3a3a",
        "primaryDeep": "#b01f2a",
        "primarySoft": "#ff7575",
        "error": "#e5484d",
        "success": "#f0f0f0",
        "successAlt": "#ddb1b5",
        "successDeep": "#a8a8a8",
        "warn": "#e0902a",
        "warnAlt": "#3c3c3c",
        "teal": "#f89595",
        "neutral": "#c0b8b8",
        "neutralLight": "#fff2f2",
        "extra": "#1a1a1a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/767m9o",
        "bg-light": "https://wallhaven.cc/w/3kxl13",
        "avatar": "https://wallhaven.cc/w/767m9o"
      }
    },
    {
      "id": "ann",
      "name": "Ann Takamaki",
      "series": "Persona",
      "icons": true,
      "iconPalette": {
        "primary": "#ff4a5a",
        "primaryDeep": "#b8233a",
        "primarySoft": "#ff808c",
        "error": "#e5484d",
        "success": "#ffb0c0",
        "successAlt": "#ea8698",
        "successDeep": "#b27b86",
        "warn": "#e0902a",
        "warnAlt": "#bc8093",
        "teal": "#ff7d8d",
        "neutral": "#c0b8b9",
        "neutralLight": "#fff4f5",
        "extra": "#b06a80"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/zx2k6w",
        "bg-light": "https://wallhaven.cc/w/kwor61",
        "avatar": "https://wallhaven.cc/w/kwor61"
      }
    },
    {
      "id": "futaba",
      "name": "Futaba Sakura",
      "series": "Persona",
      "icons": true,
      "iconPalette": {
        "primary": "#ff9a3a",
        "primaryDeep": "#c0600f",
        "primarySoft": "#ffb875",
        "error": "#e5484d",
        "success": "#6ad0a0",
        "successAlt": "#84ae74",
        "successDeep": "#4a9270",
        "warn": "#e0902a",
        "warnAlt": "#418e73",
        "teal": "#b4b56d",
        "neutral": "#c0bcb8",
        "neutralLight": "#fff9f2",
        "extra": "#1f7a5a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/8ovrjo",
        "bg-light": "https://wallhaven.cc/w/g781jl",
        "avatar": "https://wallhaven.cc/w/g781jl"
      }
    },
    {
      "id": "makoto-niijima",
      "name": "Makoto Niijima",
      "series": "Persona",
      "icons": true,
      "iconPalette": {
        "primary": "#8a8ae0",
        "primaryDeep": "#34347a",
        "primarySoft": "#adade9",
        "error": "#e5484d",
        "success": "#ff6a7a",
        "successAlt": "#c25a7a",
        "successDeep": "#b24a55",
        "warn": "#e0902a",
        "warnAlt": "#9c4a58",
        "teal": "#c47aad",
        "neutral": "#bbbbbe",
        "neutralLight": "#f8f8fd",
        "extra": "#8a2a3a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/k9r1k7",
        "bg-light": "https://wallhaven.cc/w/ymdqr7",
        "avatar": "https://wallhaven.cc/w/ymdqr7"
      }
    },
    {
      "id": "changli",
      "name": "Changli",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#ff6a4a",
        "primaryDeep": "#b8331f",
        "primarySoft": "#ff9780",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#eaa25f",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#b59341",
        "teal": "#ff9e62",
        "neutral": "#c0bab8",
        "neutralLight": "#fff5f4",
        "extra": "#a8801f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/6lylg6",
        "bg-light": "https://wallhaven.cc/w/qzkwjl",
        "avatar": "https://wallhaven.cc/w/6lylg6"
      }
    },
    {
      "id": "camellya",
      "name": "Camellya",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#e8e8e8",
        "primaryDeep": "#2a2a2a",
        "primarySoft": "#efefef",
        "error": "#e5484d",
        "success": "#ff4a5a",
        "successAlt": "#bf404c",
        "successDeep": "#b2343f",
        "warn": "#e0902a",
        "warnAlt": "#bc414a",
        "teal": "#f499a1",
        "neutral": "#bebebe",
        "neutralLight": "#fdfdfd",
        "extra": "#b0202a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/kxoqx6",
        "bg-light": "https://wallhaven.cc/w/5gxxd9",
        "avatar": "https://wallhaven.cc/w/kxoqx6"
      }
    },
    {
      "id": "jinhsi",
      "name": "Jinhsi",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#ffd27a",
        "primaryDeep": "#a8801a",
        "primarySoft": "#ffe0a2",
        "error": "#e5484d",
        "success": "#a0c8ff",
        "successAlt": "#a2b2ba",
        "successDeep": "#708cb2",
        "warn": "#e0902a",
        "warnAlt": "#5880b5",
        "teal": "#d0cdbc",
        "neutral": "#c0beba",
        "neutralLight": "#fffcf6",
        "extra": "#3a6aa8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/jxpjyw",
        "bg-light": "https://wallhaven.cc/w/kxp5r7",
        "avatar": "https://wallhaven.cc/w/jxpjyw"
      }
    },
    {
      "id": "shorekeeper",
      "name": "Shorekeeper",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#8ab0ff",
        "primaryDeep": "#3456a8",
        "primarySoft": "#adc8ff",
        "error": "#e5484d",
        "success": "#c8a8ff",
        "successAlt": "#9c8fe5",
        "successDeep": "#8c76b2",
        "warn": "#e0902a",
        "warnAlt": "#8065c3",
        "teal": "#a9acff",
        "neutral": "#bbbcc0",
        "neutralLight": "#f8faff",
        "extra": "#6a4ab8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/qzy187",
        "bg-light": "https://wallhaven.cc/w/jx25qw",
        "avatar": "https://wallhaven.cc/w/jx25qw"
      }
    },
    {
      "id": "carlotta",
      "name": "Carlotta",
      "series": "Wuthering Waves",
      "icons": true,
      "iconPalette": {
        "primary": "#a8c8ff",
        "primaryDeep": "#4a6aa8",
        "primarySoft": "#c2d8ff",
        "error": "#e5484d",
        "success": "#e8d8a8",
        "successAlt": "#b9b7a8",
        "successDeep": "#a29776",
        "warn": "#e0902a",
        "warnAlt": "#a99365",
        "teal": "#c8d0d4",
        "neutral": "#bcbec0",
        "neutralLight": "#f9fcff",
        "extra": "#9a804a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/o5zgw5",
        "bg-light": "https://wallhaven.cc/w/x6vkeo",
        "avatar": "https://wallhaven.cc/w/x6vkeo"
      }
    },
    {
      "id": "shiroko",
      "name": "Shiroko",
      "series": "Blue Archive",
      "icons": true,
      "iconPalette": {
        "primary": "#8ab8f0",
        "primaryDeep": "#2f5f98",
        "primarySoft": "#adcdf4",
        "error": "#e5484d",
        "success": "#d8dce8",
        "successAlt": "#a5b6d0",
        "successDeep": "#979aa2",
        "warn": "#e0902a",
        "warnAlt": "#737380",
        "teal": "#b1caec",
        "neutral": "#bbbcbf",
        "neutralLight": "#f8fafe",
        "extra": "#5a5a6a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j3qjjy",
        "bg-light": "https://wallhaven.cc/w/d65xol",
        "avatar": "https://wallhaven.cc/w/d65xol"
      }
    },
    {
      "id": "hoshino",
      "name": "Hoshino",
      "series": "Blue Archive",
      "icons": true,
      "iconPalette": {
        "primary": "#ffa0b8",
        "primaryDeep": "#c8607f",
        "primarySoft": "#ffbccd",
        "error": "#e5484d",
        "success": "#8ad0ff",
        "successAlt": "#9daed9",
        "successDeep": "#6192b2",
        "warn": "#e0902a",
        "warnAlt": "#4e8ec3",
        "teal": "#c4b8dc",
        "neutral": "#c0bcbc",
        "neutralLight": "#fff9fa",
        "extra": "#2f7ab8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/zpz1lv",
        "bg-light": "https://wallhaven.cc/w/vqm8qm",
        "avatar": "https://wallhaven.cc/w/vqm8qm"
      }
    },
    {
      "id": "aru",
      "name": "Aru",
      "series": "Blue Archive",
      "icons": true,
      "iconPalette": {
        "primary": "#ff5a6a",
        "primaryDeep": "#a02a3a",
        "primarySoft": "#ff8c97",
        "error": "#e5484d",
        "success": "#e8c8a8",
        "successAlt": "#d29987",
        "successDeep": "#a28c76",
        "warn": "#e0902a",
        "warnAlt": "#65584a",
        "teal": "#f49189",
        "neutral": "#c0b9ba",
        "neutralLight": "#fff5f5",
        "extra": "#4a3a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/l3xw82",
        "bg-light": "https://wallhaven.cc/w/3l7gqd",
        "avatar": "https://wallhaven.cc/w/gw18le"
      }
    },
    {
      "id": "hina",
      "name": "Hina",
      "series": "Blue Archive",
      "icons": true,
      "iconPalette": {
        "primary": "#b89ae0",
        "primaryDeep": "#5e3f90",
        "primarySoft": "#cdb8e9",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#bfb5ce",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#737373",
        "teal": "#d0c1e4",
        "neutral": "#bcbcbe",
        "neutralLight": "#faf9fd",
        "extra": "#5a5a5a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/9dep2k",
        "bg-light": "https://wallhaven.cc/w/x63pml",
        "avatar": "https://wallhaven.cc/w/kx6d36"
      }
    },
    {
      "id": "yuuka",
      "name": "Yuuka",
      "series": "Blue Archive",
      "icons": true,
      "iconPalette": {
        "primary": "#8aa8ff",
        "primaryDeep": "#3456a8",
        "primarySoft": "#adc2ff",
        "error": "#e5484d",
        "success": "#d8dce8",
        "successAlt": "#a7b4d5",
        "successDeep": "#979aa2",
        "warn": "#e0902a",
        "warnAlt": "#737380",
        "teal": "#b1c2f4",
        "neutral": "#bbbcc0",
        "neutralLight": "#f8f9ff",
        "extra": "#5a5a6a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/2y3mo6",
        "bg-light": "https://wallhaven.cc/w/2y3mo6",
        "avatar": "https://wallhaven.cc/w/2y3mo6"
      }
    },
    {
      "id": "endministrator",
      "name": "Endministrator",
      "series": "Arknights: Endfield",
      "icons": true,
      "iconPalette": {
        "primary": "#ffcc3a",
        "primaryDeep": "#a8760f",
        "primarySoft": "#ffdb75",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#d5c6a7",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#4a4a4a",
        "teal": "#f4da91",
        "neutral": "#c0beb8",
        "neutralLight": "#fffcf2",
        "extra": "#2a2a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/w56zxx",
        "bg-light": "https://wallhaven.cc/w/qrjwpd",
        "avatar": "https://wallhaven.cc/w/w56zxx"
      }
    },
    {
      "id": "perlica",
      "name": "Perlica",
      "series": "Arknights: Endfield",
      "icons": true,
      "iconPalette": {
        "primary": "#8ac0ff",
        "primaryDeep": "#2f6aa8",
        "primarySoft": "#add3ff",
        "error": "#e5484d",
        "success": "#ffe07a",
        "successAlt": "#c1bd88",
        "successDeep": "#b29d55",
        "warn": "#e0902a",
        "warnAlt": "#b59a41",
        "teal": "#c4d0bc",
        "neutral": "#bbbdc0",
        "neutralLight": "#f8fbff",
        "extra": "#a8881f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/5y3qv7",
        "bg-light": "https://wallhaven.cc/w/7j9dev",
        "avatar": "https://wallhaven.cc/w/7j9dev"
      }
    },
    {
      "id": "chen-qianyu",
      "name": "Chen Qianyu",
      "series": "Arknights: Endfield",
      "icons": true,
      "iconPalette": {
        "primary": "#6ad0b0",
        "primaryDeep": "#1f6a5a",
        "primarySoft": "#97dec8",
        "error": "#e5484d",
        "success": "#ff6a5a",
        "successAlt": "#bc6a5a",
        "successDeep": "#b24a3f",
        "warn": "#e0902a",
        "warnAlt": "#c34841",
        "teal": "#b49d85",
        "neutral": "#babebc",
        "neutralLight": "#f5fcfa",
        "extra": "#b8281f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/5yz133",
        "bg-light": "https://wallhaven.cc/w/rqgv6q",
        "avatar": "https://wallhaven.cc/w/mlg379"
      }
    },
    {
      "id": "ember",
      "name": "Ember",
      "series": "Arknights: Endfield",
      "icons": true,
      "iconPalette": {
        "primary": "#ff7a3a",
        "primaryDeep": "#b8401a",
        "primarySoft": "#ffa275",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#eaa65d",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#4a4a4a",
        "teal": "#ffa65a",
        "neutral": "#c0bab8",
        "neutralLight": "#fff6f2",
        "extra": "#2a2a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/ogyk2m",
        "bg-light": "https://wallhaven.cc/w/7j9drv",
        "avatar": "https://wallhaven.cc/w/k8zmd7"
      }
    },
    {
      "id": "yvonne",
      "name": "Yvonne",
      "series": "Arknights: Endfield",
      "icons": true,
      "iconPalette": {
        "primary": "#8ad8ff",
        "primaryDeep": "#2f7ab8",
        "primarySoft": "#ade4ff",
        "error": "#e5484d",
        "success": "#ffa0c8",
        "successAlt": "#c195c3",
        "successDeep": "#b2708c",
        "warn": "#e0902a",
        "warnAlt": "#c3658e",
        "teal": "#c4bce4",
        "neutral": "#bbbec0",
        "neutralLight": "#f8fdff",
        "extra": "#b84a7a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/d839v3",
        "bg-light": "https://wallhaven.cc/w/og61mm",
        "avatar": "https://wallhaven.cc/w/og61mm"
      }
    },
    {
      "id": "special-week",
      "name": "Special Week",
      "series": "Umamusume: Pretty Derby",
      "icons": true,
      "iconPalette": {
        "primary": "#ff8ad0",
        "primaryDeep": "#a83f7f",
        "primarySoft": "#ffadde",
        "error": "#e5484d",
        "success": "#8aa8ff",
        "successAlt": "#9388d9",
        "successDeep": "#6176b2",
        "warn": "#e0902a",
        "warnAlt": "#4a60b5",
        "teal": "#c499e8",
        "neutral": "#c0bbbe",
        "neutralLight": "#fff8fc",
        "extra": "#2a44a8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/pkzoj3",
        "bg-light": "https://wallhaven.cc/w/vm7v7m",
        "avatar": "https://wallhaven.cc/w/vm7v7m"
      }
    },
    {
      "id": "silence-suzuka",
      "name": "Silence Suzuka",
      "series": "Umamusume: Pretty Derby",
      "icons": true,
      "iconPalette": {
        "primary": "#7ad0a0",
        "primaryDeep": "#2f7a4a",
        "primarySoft": "#a2debc",
        "error": "#e5484d",
        "success": "#ffc86a",
        "successAlt": "#c1b160",
        "successDeep": "#b28c4a",
        "warn": "#e0902a",
        "warnAlt": "#bc8e41",
        "teal": "#bccc85",
        "neutral": "#babebc",
        "neutralLight": "#f6fcf9",
        "extra": "#b07a1f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/l3wgkq",
        "bg-light": "https://wallhaven.cc/w/mdqz39",
        "avatar": "https://wallhaven.cc/w/l3wgkq"
      }
    },
    {
      "id": "tokai-teio",
      "name": "Tokai Teio",
      "series": "Umamusume: Pretty Derby",
      "icons": true,
      "iconPalette": {
        "primary": "#7a9aff",
        "primaryDeep": "#2a44a8",
        "primarySoft": "#a2b8ff",
        "error": "#e5484d",
        "success": "#ff8aa0",
        "successAlt": "#bf75a2",
        "successDeep": "#b26170",
        "warn": "#e0902a",
        "warnAlt": "#c94f69",
        "teal": "#bc92d0",
        "neutral": "#babcc0",
        "neutralLight": "#f6f9ff",
        "extra": "#c0304f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/m91e38",
        "bg-light": "https://wallhaven.cc/w/721lp3",
        "avatar": "https://wallhaven.cc/w/m91e38"
      }
    },
    {
      "id": "gold-ship",
      "name": "Gold Ship",
      "series": "Umamusume: Pretty Derby",
      "icons": true,
      "iconPalette": {
        "primary": "#ff5a6a",
        "primaryDeep": "#a82434",
        "primarySoft": "#ff8c97",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#e59e65",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#b59a41",
        "teal": "#ff9672",
        "neutral": "#c0b9ba",
        "neutralLight": "#fff5f5",
        "extra": "#a8881f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/3zv9z6",
        "bg-light": "https://wallhaven.cc/w/l3d3my",
        "avatar": "https://wallhaven.cc/w/3zv9z6"
      }
    },
    {
      "id": "rice-shower",
      "name": "Rice Shower",
      "series": "Umamusume: Pretty Derby",
      "icons": true,
      "iconPalette": {
        "primary": "#c08ae0",
        "primaryDeep": "#5a2a7a",
        "primarySoft": "#d3ade9",
        "error": "#e5484d",
        "success": "#8aa8ff",
        "successAlt": "#7c82d7",
        "successDeep": "#6176b2",
        "warn": "#e0902a",
        "warnAlt": "#5260b5",
        "teal": "#a599f0",
        "neutral": "#bdbbbe",
        "neutralLight": "#fbf8fd",
        "extra": "#3444a8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/j326mp",
        "bg-light": "https://wallhaven.cc/w/9dxv2x",
        "avatar": "https://wallhaven.cc/w/72v32y"
      }
    },
    {
      "id": "red-hood",
      "name": "Red Hood",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#ff3a3a",
        "primaryDeep": "#a81f24",
        "primarySoft": "#ff7575",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#d5acad",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#4a4a4a",
        "teal": "#f49191",
        "neutral": "#c0b8b8",
        "neutralLight": "#fff2f2",
        "extra": "#2a2a2a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/w565g6",
        "bg-light": "https://wallhaven.cc/w/9ogv5d",
        "avatar": "https://wallhaven.cc/w/w565g6"
      }
    },
    {
      "id": "snow-white",
      "name": "Snow White",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#d0dcf0",
        "primaryDeep": "#4a5a7a",
        "primarySoft": "#dee6f4",
        "error": "#e5484d",
        "success": "#8ad0ff",
        "successAlt": "#77add7",
        "successDeep": "#6192b2",
        "warn": "#e0902a",
        "warnAlt": "#4e8eb5",
        "teal": "#add6f8",
        "neutral": "#bebebf",
        "neutralLight": "#fcfdfe",
        "extra": "#2f7aa8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/3z28p3",
        "bg-light": "https://wallhaven.cc/w/3z28p3",
        "avatar": "https://wallhaven.cc/w/3z28p3"
      }
    },
    {
      "id": "scarlet",
      "name": "Scarlet",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#ff4a5a",
        "primaryDeep": "#a01a2a",
        "primarySoft": "#ff808c",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#e29b62",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#b59a41",
        "teal": "#ff8e6a",
        "neutral": "#c0b8b9",
        "neutralLight": "#fff4f5",
        "extra": "#a8881f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/l8ooql",
        "bg-light": "https://wallhaven.cc/w/gw9gwe",
        "avatar": "https://wallhaven.cc/w/rr1xjm"
      }
    },
    {
      "id": "modernia",
      "name": "Modernia",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#a8a8ff",
        "primaryDeep": "#4a4aa8",
        "primarySoft": "#c2c2ff",
        "error": "#e5484d",
        "success": "#e8e8f0",
        "successAlt": "#b9b9da",
        "successDeep": "#a2a2a8",
        "warn": "#e0902a",
        "warnAlt": "#8e8ea1",
        "teal": "#c8c8f8",
        "neutral": "#bcbcc0",
        "neutralLight": "#f9f9ff",
        "extra": "#7a7a90"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/x68r2l",
        "bg-light": "https://wallhaven.cc/w/x68r2l",
        "avatar": "https://wallhaven.cc/w/x68r2l"
      }
    },
    {
      "id": "dorothy",
      "name": "Dorothy",
      "series": "Goddess of Victory: NIKKE",
      "icons": true,
      "iconPalette": {
        "primary": "#ffa0c8",
        "primaryDeep": "#b04a7a",
        "primarySoft": "#ffbcd8",
        "error": "#e5484d",
        "success": "#a8e0a0",
        "successAlt": "#aab395",
        "successDeep": "#769d70",
        "warn": "#e0902a",
        "warnAlt": "#658e58",
        "teal": "#d4c0b4",
        "neutral": "#c0bcbe",
        "neutralLight": "#fff9fc",
        "extra": "#4a7a3a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/lymxol",
        "bg-light": "https://wallhaven.cc/w/6d6116",
        "avatar": "https://wallhaven.cc/w/6d6116"
      }
    },
    {
      "id": "cynthia",
      "name": "Cynthia",
      "series": "Pokémon",
      "icons": true,
      "iconPalette": {
        "primary": "#f0c840",
        "primaryDeep": "#1a1a1a",
        "primarySoft": "#f4d879",
        "error": "#e5484d",
        "success": "#e8e8e8",
        "successAlt": "#aaaaaa",
        "successDeep": "#a2a2a2",
        "warn": "#e0902a",
        "warnAlt": "#b59333",
        "teal": "#ecd894",
        "neutral": "#bfbeb8",
        "neutralLight": "#fefcf3",
        "extra": "#a8800f"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/gw8l7d",
        "bg-light": "https://wallhaven.cc/w/g7xq37",
        "avatar": "https://wallhaven.cc/w/ly98py"
      }
    },
    {
      "id": "ash",
      "name": "Ash Ketchum",
      "series": "Pokémon",
      "icons": true,
      "iconPalette": {
        "primary": "#ff4a4a",
        "primaryDeep": "#c01f2a",
        "primarySoft": "#ff8080",
        "error": "#e5484d",
        "success": "#ffd83a",
        "successAlt": "#eca035",
        "successDeep": "#b29729",
        "warn": "#e0902a",
        "warnAlt": "#4a60b5",
        "teal": "#ff9142",
        "neutral": "#c0b8b8",
        "neutralLight": "#fff4f4",
        "extra": "#2a44a8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/8od7ey",
        "bg-light": "https://wallhaven.cc/w/l8z7rq",
        "avatar": "https://wallhaven.cc/w/8od7ey"
      }
    },
    {
      "id": "iono",
      "name": "Iono",
      "series": "Pokémon",
      "icons": true,
      "iconPalette": {
        "primary": "#ff8ac8",
        "primaryDeep": "#c8408a",
        "primarySoft": "#ffadd8",
        "error": "#e5484d",
        "success": "#ffe04a",
        "successAlt": "#eeb05d",
        "successDeep": "#b29d34",
        "warn": "#e0902a",
        "warnAlt": "#4e73c3",
        "teal": "#ffb589",
        "neutral": "#c0bbbe",
        "neutralLight": "#fff8fc",
        "extra": "#2f5ab8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/7j215o",
        "bg-light": "https://wallhaven.cc/w/og6yd5",
        "avatar": "https://wallhaven.cc/w/7j215o"
      }
    },
    {
      "id": "miku",
      "name": "Hatsune Miku",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#4fe0d6",
        "primaryDeep": "#1f9a96",
        "primarySoft": "#84e9e2",
        "error": "#e5484d",
        "success": "#ff8ab8",
        "successAlt": "#bc8fae",
        "successDeep": "#b26181",
        "warn": "#e0902a",
        "warnAlt": "#d05d8e",
        "teal": "#a7b5c7",
        "neutral": "#b8bebe",
        "neutralLight": "#f4fdfd",
        "extra": "#c8407a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/1ppld1",
        "bg-light": "https://wallhaven.cc/w/1kg8eg",
        "avatar": "https://wallhaven.cc/w/0q3q8q"
      }
    },
    {
      "id": "teto",
      "name": "Kasane Teto",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#ff4a5a",
        "primaryDeep": "#b8202f",
        "primarySoft": "#ff808c",
        "error": "#e5484d",
        "success": "#c8c8d0",
        "successAlt": "#c396a0",
        "successDeep": "#8c8c92",
        "warn": "#e0902a",
        "warnAlt": "#73737a",
        "teal": "#e48995",
        "neutral": "#c0b8b9",
        "neutralLight": "#fff4f5",
        "extra": "#5a5a62"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/3q6kmd",
        "bg-light": "https://wallhaven.cc/w/xlpm9z",
        "avatar": "https://wallhaven.cc/w/xlpm9z"
      }
    },
    {
      "id": "rin",
      "name": "Kagamine Rin",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#ffd84a",
        "primaryDeep": "#b88a0a",
        "primarySoft": "#ffe480",
        "error": "#e5484d",
        "success": "#f4f4f4",
        "successAlt": "#e2d4ae",
        "successDeep": "#ababab",
        "warn": "#e0902a",
        "warnAlt": "#4e80bc",
        "teal": "#fae69f",
        "neutral": "#c0beb8",
        "neutralLight": "#fffdf4",
        "extra": "#2f6ab0"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/ym31yk",
        "bg-light": "https://wallhaven.cc/w/83xgrj",
        "avatar": "https://wallhaven.cc/w/83xgrj"
      }
    },
    {
      "id": "len",
      "name": "Kagamine Len",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#f0d860",
        "primaryDeep": "#a8900f",
        "primarySoft": "#f4e490",
        "error": "#e5484d",
        "success": "#d8e8f4",
        "successAlt": "#caceaf",
        "successDeep": "#97a2ab",
        "warn": "#e0902a",
        "warnAlt": "#4e8eb5",
        "teal": "#e4e0aa",
        "neutral": "#bfbeb9",
        "neutralLight": "#fefdf5",
        "extra": "#2f7aa8"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/3z9x9d",
        "bg-light": "https://wallhaven.cc/w/ymzvw7",
        "avatar": "https://wallhaven.cc/w/3z9x9d"
      }
    },
    {
      "id": "luka",
      "name": "Megurine Luka",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#ff9ac0",
        "primaryDeep": "#c84a7a",
        "primarySoft": "#ffb8d3",
        "error": "#e5484d",
        "success": "#ffd27a",
        "successAlt": "#eea97a",
        "successDeep": "#b29355",
        "warn": "#e0902a",
        "warnAlt": "#b5933c",
        "teal": "#ffb69d",
        "neutral": "#c0bcbd",
        "neutralLight": "#fff9fb",
        "extra": "#a8801a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/eyp9xl",
        "bg-light": "https://wallhaven.cc/w/0jr68p",
        "avatar": "https://wallhaven.cc/w/0jr68p"
      }
    },
    {
      "id": "gumi",
      "name": "GUMI",
      "series": "Vocaloid / UTAU",
      "icons": true,
      "iconPalette": {
        "primary": "#8ae06a",
        "primaryDeep": "#3f9a2a",
        "primarySoft": "#ade997",
        "error": "#e5484d",
        "success": "#ffa04a",
        "successAlt": "#c59e40",
        "successDeep": "#b27034",
        "warn": "#e0902a",
        "warnAlt": "#d7853c",
        "teal": "#c4c05a",
        "neutral": "#bbbeba",
        "neutralLight": "#f8fdf5",
        "extra": "#d0701a"
      },
      "sources": {
        "bg-dark": "https://wallhaven.cc/w/45jm55",
        "bg-light": "https://wallhaven.cc/w/lqyrrq",
        "avatar": "https://wallhaven.cc/w/lqyrrq"
      }
    }
  ]
};
