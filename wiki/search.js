// wiki/search.js
(function () {
  // --- helpers -----------------------------------------------------

  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      const stored = window.getStoredLanguage();
      if (stored) return stored;
    }
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

  function getPageUrl(page, lang) {
    if (typeof window.getWikiPageUrlForLang === "function") {
      const url = window.getWikiPageUrlForLang(page, lang);
      if (url) return url;
    }
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

      // Collapse whitespace so snippets don’t look insane
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
      // Strip any inline HTML from title
      const tmp = document.createElement("div");
      tmp.innerHTML = dict[page.titleKey];
      return tmp.textContent || tmp.innerText || dict[page.titleKey];
    }
    return page.id || "Page";
  }

  function renderResults(query, results, lang) {
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

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const q = input.value.trim();
      const lang = getCurrentLang();
      const base = "/wiki/search.html";
      const url = q
        ? `${base}?q=${encodeURIComponent(q)}&lang=${encodeURIComponent(lang)}`
        : base;
      window.location.href = url;
    });
  }

  // --- main search logic (only on /wiki/search.html) ---------------

  async function runSearchIfNeeded() {
    if (!/\/wiki\/search\.html$/.test(window.location.pathname)) {
      return; // we’re not on the search page
    }

    const q = getQueryParam("q").trim();
    const langParam = getQueryParam("lang");
    const lang = (langParam || getCurrentLang()).toLowerCase();

    const input = document.getElementById("wikiSearchInput");
    if (input) input.value = q;

    if (!q) {
      renderResults("", [], lang);
      return;
    }

    const qLower = q.toLowerCase();

    const pages = (window.WIKI_PAGES || []).filter(
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

    renderResults(q, results, lang);
  }

  // --- init --------------------------------------------------------

  document.addEventListener("DOMContentLoaded", () => {
    setupSearchForm();
    runSearchIfNeeded();
  });

  // header is injected via partials → rebind search form
  document.addEventListener("partials:loaded", () => {
    setupSearchForm();
  });
})();