// /wiki/search.js
(function () {
  const form = document.getElementById("wikiSearchForm");
  const input = document.getElementById("wikiSearchInput");
  if (!form || !input) return;

  // Where we render results
  let resultsBox = document.getElementById("wikiSearchResults");
  if (!resultsBox) {
    resultsBox = document.createElement("div");
    resultsBox.id = "wikiSearchResults";
    resultsBox.className = "wiki-search-results";
    form.insertAdjacentElement("afterend", resultsBox);
  }

  const parser = new DOMParser();
  const pageCache = new Map();

  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      const stored = window.getStoredLanguage();
      if (stored) return stored;
    }
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

  function getPagesForCurrentLang() {
    const lang = getCurrentLang();
    const pages = (window.WIKI_PAGES || []);
    const urlForLang =
      typeof window.getWikiPageUrlForLang === "function"
        ? window.getWikiPageUrlForLang
        : (p, l) => (p.urlByLang && p.urlByLang[l]) || p.url || null;

    return pages
      .filter((p) => p.searchable !== false)
      .map((p) => {
        const url = urlForLang(p, lang);
        if (!url) return null;
        return { ...p, url };
      })
      .filter(Boolean);
  }

  async function fetchPageData(page) {
    if (pageCache.has(page.url)) {
      return pageCache.get(page.url);
    }

    try {
      const res = await fetch(page.url);
      if (!res.ok) return null;
      const html = await res.text();
      const doc = parser.parseFromString(html, "text/html");

      const content =
        doc.querySelector(".wiki-content") ||
        doc.querySelector("main") ||
        doc.body;

      const heading =
        content.querySelector("h1") ||
        content.querySelector("h2") ||
        doc.querySelector("h1");

      const titleText = heading
        ? heading.textContent.trim()
        : page.id || page.url;

      const text = (content.textContent || "")
        .replace(/\s+/g, " ")
        .trim();

      const data = { title: titleText, text };
      pageCache.set(page.url, data);
      return data;
    } catch (err) {
      console.error("Wiki search fetch failed for", page.url, err);
      return null;
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  async function performSearch(queryRaw) {
    const query = queryRaw.trim().toLowerCase();
    if (!query) {
      resultsBox.innerHTML = "";
      return;
    }

    const pages = getPagesForCurrentLang();
    const results = [];

    for (const page of pages) {
      const data = await fetchPageData(page);
      if (!data) continue;

      const idx = data.text.toLowerCase().indexOf(query);
      if (idx === -1) continue;

      const snippetStart = Math.max(0, idx - 80);
      const snippetEnd = Math.min(
        data.text.length,
        idx + query.length + 80
      );
      let snippet = data.text.slice(snippetStart, snippetEnd);
      if (snippetStart > 0) snippet = "…" + snippet;
      if (snippetEnd < data.text.length) snippet += "…";

      results.push({
        page,
        title: data.title,
        snippet,
      });
    }

    if (!results.length) {
      resultsBox.innerHTML =
        '<div class="wiki-search-empty">Keine Treffer.</div>';
      return;
    }

    resultsBox.innerHTML = `
      <div class="wiki-search-results-inner">
        ${results
          .map(
            (r) => `
          <article class="wiki-search-result">
            <h3><a href="${r.page.url}">${escapeHtml(r.title)}</a></h3>
            <p>${escapeHtml(r.snippet)}</p>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    performSearch(input.value);
  });

  // Optional: live search on typing
  input.addEventListener("input", function () {
    // very low-effort throttle
    if (input.value.length === 0) {
      resultsBox.innerHTML = "";
      return;
    }
    performSearch(input.value);
  });
})();