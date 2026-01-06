// wiki/search.js
(function () {
  // --- helpers -----------------------------------------------------

  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      const stored = window.getStoredLanguage();
      if (stored) return stored.toLowerCase();
    }

    // If URL path contains /wiki/{lang}/..., prefer that
    const m = window.location.pathname.match(/^\/wiki\/(en|de|fr)(\/|$)/);
    if (m) return m[1];

    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

  function getPageUrl(page, lang) {
    // 1) Generated pages from build-wiki.mjs
    if (page && page.urlByLang && page.urlByLang[lang]) {
      return page.urlByLang[lang];
    }

    // 2) If wiki-page-config offers a resolver, try it
    if (typeof window.getWikiPageUrlForLang === "function") {
      const url = window.getWikiPageUrlForLang(page, lang);
      if (url) return url;
    }

    // 3) Legacy fallback
    return page.url || null;
  }

  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
  }

  async function fetchPageText(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) return "";
      const html = await resp.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const main = doc.querySelector("main") || doc.body;

      return (main.textContent || "").replace(/\s+/g, " ").trim();
    } catch (err) {
      console.warn("wiki search: failed to fetch", url, err);
      return "";
    }
  }

  function localiseTitle(page, lang) {
    const dictAll = window.content || {};
    const dict = dictAll[lang] || dictAll.en || {};
    if (page.titleKey && dict[page.titleKey]) {
      const tmp = document.createElement("div");
      tmp.innerHTML = dict[page.titleKey];
      return tmp.textContent || tmp.innerText || dict[page.titleKey];
    }
    return page.id || "Page";
  }

  function renderResults(query, results) {
    const container = document.getElementById("wikiSearchResults");
    if (!container) return;

    container.innerHTML = "";

    if (!query) {
      container.innerHTML = "<p>Enter a search term above.</p>";
      return;
    }

    if (!results.length) {
      container.innerHTML = "<p>No results found.</p>";
      return;
    }

    const list = document.createElement("div");
    list.className = "wiki-search-results-list";

    results.forEach((res) => {
      const item = document.createElement("article");
      item.className = "wiki-search-result";

      const h2 = document.createElement("h2");
      h2.className = "wiki-search-result-title";

      const a = document.createElement("a");
      a.href = res.url;
      a.textContent = res.title;
      h2.appendChild(a);

      const p = document.createElement("p");
      p.className = "wiki-search-snippet";
      p.textContent = res.snippet;

      item.appendChild(h2);
      item.appendChild(p);
      list.appendChild(item);
    });

    container.appendChild(list);
  }

  // --- search form wiring ------------------------------------------

  function setupSearchForm() {
    const form = document.getElementById("wikiSearchForm");
    const input = document.getElementById("wikiSearchInput");
    if (!form || !input) return;

    // Avoid stacking multiple listeners if partials reload
    if (form.__wikiSearchBound) return;
    form.__wikiSearchBound = true;

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const q = input.value.trim();

      // Search in the currently active language
      const lang = getCurrentLang();
      const base = "/wiki/search.html";

      const url = q
        ? `${base}?q=${encodeURIComponent(q)}&lang=${encodeURIComponent(lang)}`
        : `${base}?lang=${encodeURIComponent(lang)}`;

      window.location.href = url;
    });
  }

  // --- main search logic (only on /wiki/search.html) ---------------

  async function runSearchIfNeeded() {
    if (!/\/wiki\/search\.html$/.test(window.location.pathname)) {
      return;
    }

    const q = getQueryParam("q").trim();
    const langParam = getQueryParam("lang");
    const lang = (langParam || getCurrentLang()).toLowerCase();

    const input = document.getElementById("wikiSearchInput");
    if (input) input.value = q;

    if (!q) {
      renderResults("", []);
      return;
    }

    const qLower = q.toLowerCase();

    const combined = [
      ...(window.WIKI_PAGES || []),
      ...(window.WIKI_GENERATED_PAGES || [])
    ];

    // De-dupe by id, prefer entries that have urlByLang
    const byId = new Map();
    for (const p of combined) {
      if (!p || !p.id) continue;
      const existing = byId.get(p.id);
      if (!existing) {
        byId.set(p.id, p);
      } else {
        const existingHas = !!existing.urlByLang;
        const pHas = !!p.urlByLang;
        if (pHas && !existingHas) byId.set(p.id, p);
      }
    }

    const pages = Array.from(byId.values()).filter(
      (p) => p.searchable !== false && p.id !== "search"
    );

    const results = [];

    for (const page of pages) {
      const url = getPageUrl(page, lang);
      if (!url) continue;

      const text = await fetchPageText(url);
      if (!text) continue;

      const idx = text.toLowerCase().indexOf(qLower);
      if (idx === -1) continue;

      const start = Math.max(0, idx - 80);
      const end = Math.min(text.length, idx + q.length + 80);

      let snippet = text.slice(start, end).trim();
      if (start > 0) snippet = "… " + snippet;
      if (end < text.length) snippet = snippet + " …";

      results.push({
        url,
        title: localiseTitle(page, lang),
        snippet
      });
    }

    renderResults(q, results);
  }

  // --- init --------------------------------------------------------

  document.addEventListener("DOMContentLoaded", () => {
    setupSearchForm();
    runSearchIfNeeded();
  });

  document.addEventListener("partials:loaded", () => {
    setupSearchForm();
  });
})();