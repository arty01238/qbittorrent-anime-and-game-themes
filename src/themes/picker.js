/* Anime theme pack - character picker (main UI menubar + login page corner).
   Scales to many characters: search box, grouping by series (manifest order of first
   appearance), avatars lazy-loaded only once the menu is first opened. */
(function () {
    "use strict";
    var T = window.AnimeTheme;
    if (!T || window.top !== window) return;

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }
    function avatar(c, lazy) {
        var i = el("img", "ap-avatar");
        var src = "themes/" + c.id + "/avatar.webp";
        if (lazy) { i.setAttribute("data-src", src); i.loading = "lazy"; } else i.src = src;
        i.alt = ""; i.width = 20; i.height = 20; i.decoding = "async";
        return i;
    }
    function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

    function build() {
        var wrap = el("div", "anime-picker" + (T.isLogin ? " anime-picker-login" : ""));
        wrap.id = "animePicker";
        var btn = el("button", "ap-button");
        btn.type = "button";
        btn.setAttribute("aria-haspopup", "listbox");
        btn.title = "Character theme";
        var menu = el("div", "ap-menu");
        menu.hidden = true;
        var search = el("input", "ap-search");
        search.type = "search"; search.placeholder = "Search characters / series\u2026";
        search.setAttribute("aria-label", "Search characters");
        search.autocomplete = "off"; search.spellcheck = false;
        var list = el("ul", "ap-list");
        list.setAttribute("role", "listbox");
        var empty = el("div", "ap-empty", "No match"); empty.hidden = true;
        menu.appendChild(search); menu.appendChild(list); menu.appendChild(empty);

        // group by series, keeping manifest order of first appearance
        var groups = [], byS = {};
        T.list().forEach(function (c) {
            var s = c.series || "Other";
            if (!byS[s]) { byS[s] = { name: s, items: [] }; groups.push(byS[s]); }
            byS[s].items.push(c);
        });
        var rows = [];   // {li, key, header}
        groups.forEach(function (g) {
            var h = el("li", "ap-group", g.name);
            h.setAttribute("role", "presentation");
            list.appendChild(h);
            var hdr = { li: h, items: [] };
            g.items.forEach(function (c) {
                var li = el("li", "ap-item");
                li.setAttribute("role", "option");
                li.setAttribute("data-id", c.id);
                li.tabIndex = -1;
                li.appendChild(avatar(c, true));
                var txt = el("span", "ap-text");
                txt.appendChild(el("span", "ap-item-name", c.name));
                txt.appendChild(el("span", "ap-item-series", c.series || ""));
                li.appendChild(txt);
                li.addEventListener("click", function () { T.set(c.id, true); close(); });
                list.appendChild(li);
                var r = { li: li, key: norm(c.name + " " + c.id + " " + (c.series || "")) };
                hdr.items.push(r); rows.push(r);
            });
            rows.push({ li: h, header: hdr });
        });

        function visibleItems() {
            return Array.prototype.filter.call(list.querySelectorAll(".ap-item"), function (li) { return !li.hidden; });
        }
        function filter() {
            var q = norm(search.value).trim().split(/\s+/).filter(Boolean), any = false;
            rows.forEach(function (r) {
                if (r.header) {
                    r.li.hidden = !r.header.items.some(function (x) { return !x.li.hidden; });
                } else {
                    r.li.hidden = !q.every(function (w) { return r.key.indexOf(w) >= 0; });
                    if (!r.li.hidden) any = true;
                }
            });
            empty.hidden = any;
        }
        search.addEventListener("input", filter);

        function renderButton() {
            var c = T.current();
            btn.textContent = "";
            if (!c) return;
            btn.appendChild(avatar(c, false));
            btn.appendChild(el("span", "ap-name", c.name));
            btn.appendChild(el("span", "ap-caret", "\u25BE"));
            var items = list.querySelectorAll(".ap-item");
            for (var i = 0; i < items.length; i++)
                items[i].setAttribute("aria-selected", items[i].getAttribute("data-id") === c.id ? "true" : "false");
        }

        var loaded = false;
        function loadAvatars() {
            if (loaded) return; loaded = true;
            var imgs = list.querySelectorAll("img[data-src]");
            for (var i = 0; i < imgs.length; i++) { imgs[i].src = imgs[i].getAttribute("data-src"); imgs[i].removeAttribute("data-src"); }
        }
        function place() {
            var r = btn.getBoundingClientRect(), vh = document.documentElement.clientHeight;
            menu.style.top = (r.bottom + 4) + "px";
            menu.style.right = Math.max(4, document.documentElement.clientWidth - r.right) + "px";
            menu.style.maxHeight = Math.max(200, Math.min(560, vh - r.bottom - 16)) + "px";
        }
        function open() {
            place(); loadAvatars(); menu.hidden = false; btn.setAttribute("aria-expanded", "true");
            search.value = ""; filter();
            var sel = list.querySelector('.ap-item[aria-selected="true"]');
            if (sel) sel.scrollIntoView({ block: "nearest" });
            search.focus();
        }
        function close() { if (menu.hidden) return; menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
        function move(d) {
            var v = visibleItems(); if (!v.length) return;
            var i = v.indexOf(document.activeElement);
            var n = i < 0 ? (d > 0 ? 0 : v.length - 1) : Math.max(0, Math.min(v.length - 1, i + d));
            v[n].focus(); v[n].scrollIntoView({ block: "nearest" });
        }
        menu.addEventListener("keydown", function (e) {
            if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
            else if (e.key === "ArrowUp") { e.preventDefault(); if (document.activeElement === visibleItems()[0]) search.focus(); else move(-1); }
            else if (e.key === "Enter" || (e.key === " " && document.activeElement !== search)) {
                var t = document.activeElement.classList.contains("ap-item") ? document.activeElement : (document.activeElement === search ? visibleItems()[0] : null);
                if (t) { e.preventDefault(); t.click(); }
            }
        });
        btn.addEventListener("click", function (e) { e.stopPropagation(); if (menu.hidden) open(); else close(); });
        document.addEventListener("click", function (e) { if (!menu.contains(e.target)) close(); });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); } });
        window.addEventListener("resize", close);
        window.addEventListener("animecharacterchange", renderButton);

        wrap.appendChild(btn);
        renderButton();
        var nav = document.getElementById("desktopNavbar");
        if (nav && !T.isLogin) nav.insertBefore(wrap, nav.firstChild);
        else document.body.appendChild(wrap);
        document.body.appendChild(menu);   // menu lives on <body> so the menubar's overflow can't clip it
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
    else build();
})();
