# AI-art audit (manifest v6, 2026-10-01)

Method: wallhaven API tags/uploader/source for every id; AI-site source check (PixAI, Civitai, NovelAI, Midjourney, SeaArt, Tensor.art); pixiv `aiType` lookup for pixiv sources; upload date (no-source uploads after 2022-10-01, when NovelAI-style anime models appeared, count as unverifiable); visual pass of every image.
Result: no image had an AI tag, an AI-site source or a pixiv AI flag. One image showed clear AI rendering tells (Elysia dark). All unverifiable post-2022 no-source/repost images and the weak picks were replaced with credited human art (pixiv declared non-AI, artist X accounts, official accounts, or pre-2022 uploads).

| Character | Slot | Old id | Reason | New id | Artist / source |
|---|---|---|---|---|---|
| Kurumi Tokisaki | avatar | m3dkyk | no-source post-AI-era upload (2022-12), unverifiable | 3zmmdy | pixiv Feint 2022-06-24 (pre-AI): https://www.pixiv.net/en/artworks/99261338 |
| Chisato Nishikigi | bg-light | 7pgd63 | no-source upload 2022-10-10 (AI era), unverifiable | k7yxd6 | pixiv 陌芋Marginal 2022-07-21 (pre-AI): https://www.pixiv.net/artworks/99901109 |
| Chisato Nishikigi | avatar | 7pgd63 | same unverifiable image as old bg-light | rdmdrj | pixiv 陌芋Marginal 2022-07-19 (pre-AI): https://www.pixiv.net/artworks/99846070 |
| Aru | avatar | l8kgp2 | no-source post-2022 upload, unverifiable | gw18le | x:_okkizzz: https://x.com/_okkizzz/status/2096889085604643114 |
| Hoshino | bg-dark | 2yoowy | no-source 2023 upload, single image reused for all slots | zpz1lv | pixiv どうむ (declared non-AI): https://www.pixiv.net/en/artworks/140767918 |
| Hoshino | bg-light | 2yoowy | no-source 2023 upload | vqm8qm | pixiv アラシオモト (declared non-AI): https://www.pixiv.net/en/artworks/102538839 |
| Hoshino | avatar | 2yoowy | no-source 2023 upload | vqm8qm | pixiv アラシオモト (declared non-AI): https://www.pixiv.net/en/artworks/102538839 |
| Hatsune Miku | bg-light | d6dyx3 | source is only a pixiv user page (no artwork), unverifiable | 1kg8eg | pixiv はむねずこ 2021-08-30 (pre-AI): https://www.pixiv.net/artworks/92395954 |
| Perlica | bg-light | 2yxe2x | Lofter repost, no verifiable artist | 7j9dev | x:ryuzakiichi: https://x.com/ryuzakiichi/status/2014176248680063402 |
| Perlica | avatar | 2yxe2x | Lofter repost, no verifiable artist | 7j9dev | x:ryuzakiichi: https://x.com/ryuzakiichi/status/2014176248680063402 |
| Verina | bg-dark | 3ljlk3 | no source, glossy rendering (suspect) | 6d1zvx | x:Yunouou10: https://x.com/Yunouou10/status/1741044988098785786 |
| Verina | bg-light | kx5wk1 | no source, glossy rendering (suspect) | 85w1py | x:Yunouou10: https://x.com/Yunouou10/status/1759057890802053326 |
| Verina | avatar | kx5wk1 | no source, glossy rendering (suspect) | 85w1py | x:Yunouou10: https://x.com/Yunouou10/status/1759057890802053326 |
| Jinhsi | bg-dark | 5go1w8 | Weibo repost, no verifiable artist | jxpjyw | pixiv ShotGunMan (declared non-AI): https://www.pixiv.net/en/artworks/121220322 |
| Jinhsi | avatar | 5go1w8 | Weibo repost, no verifiable artist | jxpjyw | pixiv ShotGunMan (declared non-AI): https://www.pixiv.net/en/artworks/121220322 |
| Ellen Joe | bg-light | jee15p | source is only a pixiv user page, unverifiable | x6ojqd | pixiv Salmon88 (declared non-AI): https://www.pixiv.net/en/artworks/120285707 |
| Ellen Joe | avatar | jee15p | source is only a pixiv user page, unverifiable | m35wj1 | pixiv 天祈Eric (declared non-AI): https://www.pixiv.net/en/artworks/120667198 |
| Cyrene | bg-dark | 1qqpm9 | Xiaohongshu login-redirect source, no artist | 8gkkm2 | pixiv HAYUN (declared non-AI): https://www.pixiv.net/en/artworks/141187720 |
| Cyrene | bg-light | vpp9xl | no source, 2025 upload | 2116k9 | pixiv 爱画画的噗叽 (declared non-AI): https://www.pixiv.net/en/artworks/137779240 |
| Gold Ship | bg-light | 9omdk1 | no source, 2025 upload | l3d3my | pre-AI upload (2021-10-25): no link |
| Scarlet | bg-dark | pokg5j | blurry Stellar Blade gameplay screenshot (weak; also Eve, not Scarlet focus) | l8ooql | pixiv 米粒Duona (declared non-AI): https://www.pixiv.net/artworks/113864358 |
| Scarlet | bg-light | pokg5j | same weak screenshot | gw9gwe | pixiv shiej007 (declared non-AI): https://www.pixiv.net/en/artworks/126202213 |
| Scarlet | avatar | pokg5j | same weak screenshot | rr1xjm | pixiv moda (declared non-AI): https://www.pixiv.net/artworks/114914491 |
| Makoto Yuki | bg-light | 7j27po | no source, 2025 upload | k8zd97 | x:Jurawings1: https://twitter.com/Jurawings1/status/1857342655866474778 |
| Dorothy | bg-dark | vpzwyp | Stellar Blade collab CGI (Eve in Dorothy outfit), wrong character, no source | lymxol | https://nikke-concert.jp/s/nikke24/: https://nikke-concert.jp/s/nikke24/ |
| Dorothy | bg-light | 9ogv5d | was a 13-character group shot (Dorothy tiny) | 6d6116 | pixiv Megu (declared non-AI): https://www.pixiv.net/artworks/115194378 |
| Dorothy | avatar | vpzwyp | avatar crop was not Dorothy | 6d6116 | pixiv Megu (declared non-AI): https://www.pixiv.net/artworks/115194378 |
| Red Hood | bg-dark | 9ogv5d | was a 20+ character group shot (weak) | w565g6 | pixiv なつむ。＠Skeb大募集 (declared non-AI): https://www.pixiv.net/artworks/141326642 |
| Red Hood | avatar | 9ogv5d | avatar from group shot (weak) | w565g6 | pixiv なつむ。＠Skeb大募集 (declared non-AI): https://www.pixiv.net/artworks/141326642 |
| Chen Qianyu | bg-light | gw53dl | no source, 2026 upload | rqgv6q | x:hoshieve: https://x.com/hoshieve/status/2014142559195468231 |
| Roxy Migurdia | bg-light | yq2glk | no source, 2026 upload | 1pvlg9 | pixiv loong (declared non-AI): https://www.pixiv.net/en/artworks/121142450 |
| Endministrator | bg-light | vpo3m5 | bilibili repost, no verifiable artist | qrjwpd | x:wisdafuzuo: https://x.com/wisdafuzuo/status/2014234154972692834 |
| Elysia | bg-dark | m3o5w9 | AI tells: inconsistent hair strands, mushy hands, airbrushed gloss; source account unverifiable | gpz95e | x:HonkaiImpact3rd: https://twitter.com/HonkaiImpact3rd/status/1573885002726653952 |
| Rem | avatar | 73opq3 | semi-photoreal painted face (weak, off-style) | 1j1om9 | pre-AI upload (2016-08-11): no link |
| Ash Ketchum | bg-light | 5yyvw5 | Ash barely visible in crowded Pokémon scene (weak) | l8z7rq | x:Lv01KOKUEN: https://twitter.com/Lv01KOKUEN/status/1639210841303289857 |
