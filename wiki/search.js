if (typeof WIKI_PAGES === "undefined") {
  console.warn("WIKI_PAGES not found, using minimal fallback config.");
  var WIKI_PAGES = [
    { url: "/wiki/index.html", id: "home", titleKey: "wiki.home.title" }
  ];
}


function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, "");
}


function getCurrentLangSafe() {
  const docLang = (document.documentElement.lang || "").toLowerCase();
  if (docLang === "en" || docLang === "de") {
    return docLang;
  }

  try {
    if (typeof getStoredLanguage === "function") {
      return getStoredLanguage();
    }
  } catch (e) {
    console.warn("getStoredLanguage not available:", e);
  }
  return "en";
}

function tSearch(key, lang, params = {}) {
  if (typeof content === "undefined") {
    // brutal fallback
    if (key === "enterTerm")  return "Enter a search term in the header search field.";
    if (key === "resultsFor") return `Results for “${params.q || ""}”`;
    if (key === "noResults")  return "No results found. Try a different term or a simpler phrase.";
    return "";
  }

  const dict = content[lang] || content.en || {};
  let raw = "";

  if (key === "enterTerm") {
    raw = dict["wiki.search.label.enterTerm"] || "";
  } else if (key === "resultsFor") {
    raw = dict["wiki.search.label.resultsFor"] || "";
  } else if (key === "noResults") {
    raw = dict["wiki.search.noResults"] || "";
  }

  if (params.q) {
    raw = raw.replace("{q}", params.q);
  }
  return raw || "";
}

function getLocalizedTitle(page, html, lang) {
  if (typeof content !== "undefined" && page.titleKey) {
    const dictLang = content[lang] || content.en || {};
    const dictEn   = content.en || {};
    const t = dictLang[page.titleKey] || dictEn[page.titleKey];
    if (t) return t;
  }
  // fallback to the raw <title> or URL
  return extractTitle(html) || page.url;
}

// Build a "virtual" text for a page from its i18n keys
function extractI18nText(html, lang) {
  // If we don't have the content dict, fall back to raw text
  if (typeof content === "undefined") {
    return extractVisibleText(html);
  }

  const dictLang = content[lang] || content.en || {};
  const dictEn   = content.en || {};

  const keys = [];
  const regex = /data-i18n\s*=\s*"([^"]+)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    keys.push(m[1]);
  }

  if (!keys.length) {
    // No i18n keys? Just use raw text.
    return extractVisibleText(html);
  }

  const pieces = [];
  for (const k of keys) {
    const t = dictLang[k] || dictEn[k];
    if (t) pieces.push(t);
  }

  if (!pieces.length) {
    return extractVisibleText(html);
  }

  return pieces.join(" ");
}


function bindWikiSearchForm() {
  const form = document.getElementById("wikiSearchForm");
  const input = document.getElementById("wikiSearchInput");

  if (!form || !input) return;
  if (form.dataset.bound === "1") return;  // avoid double-binding

  form.dataset.bound = "1";

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    window.location.href = `/wiki/search.html?q=${encodeURIComponent(q)}`;
  });
}

// Wire up the search box in the header
document.addEventListener("DOMContentLoaded", () => {
  bindWikiSearchForm();

  if (getCurrentPath().endsWith("/wiki/search.html")) {
    runWikiSearch();
  }
});

// After header/footer partials have been injected
document.addEventListener("partials:loaded", () => {
  bindWikiSearchForm();

  if (getCurrentPath().endsWith("/wiki/search.html")) {
    runWikiSearch();
  }
});
async function runWikiSearch() {
  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").trim();
  const labelNode = document.getElementById("wikiSearchQueryLabel");
  const resultsNode = document.getElementById("wikiSearchResults");

  if (!resultsNode) return;

  const currentLang = getCurrentLangSafe();

  if (!query) {
    if (labelNode) {
      labelNode.textContent = tSearch("enterTerm", currentLang);
    }
    resultsNode.innerHTML = "";
    return;
  }

  if (labelNode) {
    labelNode.textContent = tSearch("resultsFor", currentLang, { q: query });
  }

  const lcQuery = query.toLowerCase();
  const results = [];

  for (const page of WIKI_PAGES) {
    if (page.url.endsWith("/wiki/search.html")) continue;

    try {
      const resp = await fetch(page.url);
      if (!resp.ok) continue;

      const html = await resp.text();

      const text =
        currentLang === "en"
          ? extractVisibleText(html)
          : extractI18nText(html, currentLang);

      const lcText = text.toLowerCase();
      const idx = lcText.indexOf(lcQuery);

      if (idx !== -1) {
        const title = getLocalizedTitle(page, html, currentLang);
        const snippet = buildSnippet(text, idx, query.length);
        results.push({ url: page.url, title, snippet });
      }
    } catch (e) {
      console.error("Search fetch failed for", page.url, e);
    }
  }

  if (results.length === 0) {
    resultsNode.innerHTML = `
      <div class="wiki-search-no-results">
        ${escapeHtml(tSearch("noResults", currentLang))}
      </div>
    `;
    return;
  }

  resultsNode.innerHTML = results
    .map((r) => {
      return `
        <article class="wiki-search-result-item">
          <div class="wiki-search-result-title">
            <a href="${r.url}">${escapeHtml(r.title)}</a>
          </div>
          <div class="wiki-search-result-snippet">
            ${escapeHtml(r.snippet)}
          </div>
        </article>
      `;
    })
    .join("");
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : "";
}

function extractVisibleText(html) {
  // Kill scripts and styles first
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  const withoutStyles = withoutScripts.replace(/<style[\s\S]*?<\/style>/gi, "");
  // Remove tags
  const textOnly = withoutStyles.replace(/<\/?[^>]+>/g, " ");
  // Collapse whitespace
  return textOnly.replace(/\s+/g, " ").trim();
}

function buildSnippet(text, index, queryLen) {
  const radius = 90;
  const start = Math.max(0, index - radius);
  const end = Math.min(text.length, index + queryLen + radius);
  let snippet = text.slice(start, end).trim();

  if (start > 0) snippet = "… " + snippet;
  if (end < text.length) snippet = snippet + " …";
  return snippet;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}