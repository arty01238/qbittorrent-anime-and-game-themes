import asyncio, os, sys
from pathlib import Path
from playwright.async_api import async_playwright
# qBittorrent skips the login page on loopback. Set QBT_LOGIN_URL to the same
# WebUI reached through a non-loopback address. QBT_MAIN_URL is the main UI
# (localhost auth bypass). Screenshots go under screens/ at the repo root.
ROOT = Path(__file__).resolve().parent.parent
MAIN = os.environ.get("QBT_MAIN_URL", "http://127.0.0.1:8080/")
LOGIN = os.environ.get("QBT_LOGIN_URL", "")
OUT = Path(os.environ.get("ANIME_SCREEN_DIR", ROOT / "screens"))
CHARS = sys.argv[1].split(",") if len(sys.argv) > 1 else ["kurumi", "siesta", "madoka", "homura"]
async def main():
    if not LOGIN:
        sys.exit("Set QBT_LOGIN_URL to the WebUI via a non-loopback address (localhost skips the login page).")
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch()
        errs = []
        for cid in CHARS:
            for scheme in ("dark", "light"):
                ctx = await b.new_context(viewport={"width": 1600, "height": 900}, color_scheme=scheme)
                await ctx.add_init_script("try{localStorage.setItem('qbtAnimeCharacter','%s');localStorage.removeItem('qbtAnimeScheme')}catch(e){}" % cid)
                pg = await ctx.new_page()
                pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
                pg.on("pageerror", lambda e: errs.append(str(e)))
                await pg.goto(MAIN); await pg.wait_for_timeout(3000)
                rows = pg.locator("#torrentsTableDiv tbody tr")
                if await rows.count() > 1:
                    await rows.nth(1).click(); await pg.wait_for_timeout(1000)
                info = await pg.evaluate("[document.documentElement.dataset.character, document.documentElement.classList.contains('dark')]")
                await pg.screenshot(path=f"{OUT}/main-{cid}-{scheme}.png")
                await pg.goto(LOGIN); await pg.wait_for_timeout(1200)
                await pg.screenshot(path=f"{OUT}/login-{cid}-{scheme}.png")
                print(cid, scheme, info, flush=True)
                await ctx.close()
        # picker open (kurumi dark)
        ctx = await b.new_context(viewport={"width": 1600, "height": 900}, color_scheme="dark")
        pg = await ctx.new_page(); await pg.goto(MAIN); await pg.wait_for_timeout(2500)
        await pg.click(".ap-button"); await pg.wait_for_timeout(500)
        await pg.screenshot(path=f"{OUT}/picker-open.png", clip={"x": 1000, "y": 0, "width": 600, "height": 640})
        print("picker:", await pg.evaluate("[document.querySelectorAll('.ap-item').length, document.querySelectorAll('.ap-group').length, document.querySelectorAll('.ap-list img[src]').length, getComputedStyle(document.querySelector('.ap-list')).overflowY, document.querySelector('.ap-menu').getBoundingClientRect().height]"))
        await pg.keyboard.type("pok"); await pg.wait_for_timeout(200)
        print("search pok:", await pg.evaluate("Array.from(document.querySelectorAll('.ap-item')).filter(e=>!e.hidden).map(e=>e.dataset.id)"))
        await pg.screenshot(path=f"{OUT}/picker-search.png", clip={"x": 1000, "y": 0, "width": 600, "height": 400})
        await pg.keyboard.press("ArrowDown"); await pg.keyboard.press("ArrowDown"); await pg.keyboard.press("Enter"); await pg.wait_for_timeout(800)
        print("kbd pick:", await pg.evaluate("document.documentElement.dataset.character"))
        await pg.click(".ap-button"); await pg.wait_for_timeout(300)
        await pg.locator(".ap-item[data-id=homura]").click(); await pg.wait_for_timeout(1200)
        print("after pick:", await pg.evaluate("[document.documentElement.dataset.character, localStorage.getItem('qbtAnimeCharacter')]"))
        await ctx.close()
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, color_scheme="light")
        pg = await ctx.new_page(); await pg.goto(LOGIN); await pg.wait_for_timeout(1000)
        await pg.click(".ap-button"); await pg.wait_for_timeout(400)
        await pg.screenshot(path=f"{OUT}/login-picker-open.png")
        await ctx.close(); await b.close()
        print("errors:", sorted(set(errs))[:10])
asyncio.run(main())
