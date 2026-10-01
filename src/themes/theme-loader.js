/* Anime theme pack - applies the chosen character as early as possible (sync, in <head>).
   Choice is stored in localStorage (same origin => login page, main UI and dialogs agree). */
(function () {
    "use strict";
    var M = window.ANIME_THEMES || { characters: [] };
    var ICONS = window.ANIME_ICON_NAMES || [];
    var KEY = "qbtAnimeCharacter";
    var SCHEME_KEY = "qbtAnimeScheme";
    var root = document.documentElement;
    var script = document.currentScript;
    var isLogin = !!(script && script.getAttribute("data-page") === "login");
    var current = null;

    function find(id) {
        for (var i = 0; i < M.characters.length; i++)
            if (M.characters[i].id === id) return M.characters[i];
        return null;
    }
    function abs(p) { return new URL(p, document.baseURI).href; }
    function cssUrl(p) { return "url(\"" + abs(p) + "\")"; }
    function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

    function updateDom(c) {
        var base = "themes/" + c.id + "/";
        var icons = document.querySelectorAll("link[rel~='icon']");
        for (var i = 0; i < icons.length; i++) { icons[i].href = abs(base + "favicon.png"); icons[i].type = "image/png"; }
        var av = document.querySelectorAll("img[data-anime-avatar]");
        for (var j = 0; j < av.length; j++) { av[j].src = abs(base + "avatar.webp"); av[j].alt = c.name; }
    }

    function apply(id, persist) {
        var c = find(id) || find(M["default"]) || M.characters[0];
        if (!c) return null;
        current = c;
        var base = "themes/" + c.id + "/";
        var s = root.style;
        root.setAttribute("data-character", c.id);
        s.setProperty("--a-bg-dark", cssUrl(base + "bg-dark.webp"));
        s.setProperty("--a-bg-light", cssUrl(base + "bg-light.webp"));
        s.setProperty("--a-avatar", cssUrl(base + "avatar.webp"));
        for (var i = 0; i < ICONS.length; i++) {
            if (c.icons) s.setProperty("--qi-" + ICONS[i], cssUrl(base + "icons/" + ICONS[i] + ".svg"));
            else s.removeProperty("--qi-" + ICONS[i]);
        }
        var href = base + "theme.css?v=" + (M.version || "1");
        var link = document.getElementById("animeCharacterCss");
        if (!link && document.readyState === "loading") {
            document.write("<link id=\"animeCharacterCss\" rel=\"stylesheet\" href=\"" + href + "\">");
        } else {
            if (!link) {
                link = document.createElement("link");
                link.id = "animeCharacterCss"; link.rel = "stylesheet";
                document.head.appendChild(link);
            }
            if (link.getAttribute("href") !== href) link.setAttribute("href", href);
        }
        if (document.readyState !== "loading") updateDom(c);
        if (persist) { try { localStorage.setItem(KEY, c.id); } catch (e) { /* private mode */ } }
        // push to same-origin dialog iframes immediately (storage event covers other tabs)
        var frames = document.getElementsByTagName("iframe");
        for (var k = 0; k < frames.length; k++) {
            try { if (frames[k].contentWindow.AnimeTheme) frames[k].contentWindow.AnimeTheme.set(c.id, false); } catch (e) { /* cross-origin */ }
        }
        try { window.dispatchEvent(new CustomEvent("animecharacterchange", { detail: c })); } catch (e) { /* old browser */ }
        return c;
    }

    // Colour scheme: main UI follows qBittorrent's own setting (the .dark class);
    // the login page has no session, so it reuses the last scheme seen in the main UI.
    function prefersDark() { return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; }
    if (isLogin) {
        var sch = null;
        try { sch = localStorage.getItem(SCHEME_KEY); } catch (e) { /* ignore */ }
        root.classList.toggle("dark", sch ? sch === "dark" : prefersDark());
        root.classList.add("anime-login");
    } else if (window.top === window) {
        var remember = function () { try { localStorage.setItem(SCHEME_KEY, root.classList.contains("dark") ? "dark" : "light"); } catch (e) { /* ignore */ } };
        new MutationObserver(remember).observe(root, { attributes: true, attributeFilter: ["class"] });
        document.addEventListener("DOMContentLoaded", remember);
    }

    apply(stored(), false);
    document.addEventListener("DOMContentLoaded", function () { if (current) updateDom(current); });
    window.addEventListener("storage", function (e) { if (e.key === KEY && e.newValue) apply(e.newValue, false); });

    window.AnimeTheme = {
        list: function () { return M.characters.slice(); },
        current: function () { return current; },
        set: function (id, persist) { return apply(id, persist !== false); },
        isLogin: isLogin
    };
})();
