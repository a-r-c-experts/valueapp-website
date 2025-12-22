// /wiki/wiki-page-config.js
(function () {
  // ---------- Language detection + base path ----------

  function getSupportedLangsFromDOM() {
    // If the header is injected later, this might be empty at first.
    // That's fine: we treat "empty" as "unknown, allow anything".
    return Array.from(document.querySelectorAll("[data-lang]"))
      .map((b) => (b.getAttribute("data-lang") || "").toLowerCase())
      .filter(Boolean);
  }

  function detectLang() {
    // 1) URL: /wiki/{lang}/...
    const m = window.location.pathname.match(/^\/wiki\/([^/]+)(\/|$)/);
    const urlLang = m?.[1]?.toLowerCase();

    // 2) localStorage fallbacks (be tolerant)
    const stored = (
      localStorage.getItem("lang") ||
      localStorage.getItem("valueapp_lang") ||
      localStorage.getItem("valueappLang") ||
      ""
    )
      .toLowerCase()
      .trim();

    // 3) <html lang="...">
    const htmlLang = (document.documentElement.getAttribute("lang") || "")
      .slice(0, 2)
      .toLowerCase();

    // 4) browser
    const navLang = (navigator.language || "").slice(0, 2).toLowerCase();

    const supported = getSupportedLangsFromDOM();
    const isSupported = (l) => !supported.length || supported.includes(l);

    if (urlLang && isSupported(urlLang)) return urlLang;
    if (stored && isSupported(stored)) return stored;
    if (htmlLang && isSupported(htmlLang)) return htmlLang;
    if (navLang && isSupported(navLang)) return navLang;

    return supported[0] || "en";
  }

  function getWikiBase(lang) {
    return "/wiki/" + (lang || detectLang()) + "/";
  }

  // Expose for other scripts if useful
  window.WIKI_detectLang = detectLang;
  window.WIKI_getWikiBase = getWikiBase;

  // ---------- Link rewiring (works for injected header/footer too) ----------

  function wireWikiLinks(root) {
    const lang = detectLang();
    const base = getWikiBase(lang);
    const scope = root || document;

    scope.querySelectorAll("[data-wiki-link]").forEach((a) => {
      const file = a.getAttribute("data-wiki-link");
      if (!file) return;
      a.setAttribute("href", base + file);
    });

    // Keep label in sync if present
    const label = document.getElementById("currentLangLabel");
    if (label) label.textContent = lang.toUpperCase();
  }

  window.WIKI_wireWikiLinks = wireWikiLinks;

  // Run now (for pages like /wiki/en/...)
  wireWikiLinks(document);

  // If your language switcher dispatches this, we rewire again.
  document.addEventListener("languageChanged", () => wireWikiLinks(document));

  // Handle injected partials (header/footer): rewire when they appear.
  const obs = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if (node.matches?.("[data-wiki-link]") || node.querySelector?.("[data-wiki-link]")) {
          wireWikiLinks(node);
        }
      }
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });

  // ---------- Page registry (language-agnostic) ----------

  window.WIKI_PAGES = [
    // Wiki home inside language folder (recommended)
    {
      id: "home",
      file: "index.html",
      titleKey: "wiki.home.title",
      navKey: "wiki.nav.home",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "introduction",
      file: "introduction.html",
      titleKey: "wiki.introduction.title",
      navKey: "wiki.nav.introduction",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "getting-started",
      file: "getting-started.html",
      titleKey: "wiki.gettingStarted.title",
      navKey: "wiki.nav.gettingStarted",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "knowledge-base",
      file: "knowledge-base.html",
      titleKey: "wiki.knowledgeBase.title",
      navKey: "wiki.nav.knowledgeBase",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "workflows",
      file: "workflows.html",
      titleKey: "wiki.workflows.title",
      navKey: "wiki.nav.workflows",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "reference",
      file: "reference.html",
      titleKey: "wiki.reference.title",
      navKey: "wiki.nav.reference",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "examples",
      file: "examples.html",
      titleKey: "wiki.examples.title",
      navKey: "wiki.nav.examples",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "support",
      file: "support.html",
      titleKey: "wiki.support.title",
      navKey: "wiki.nav.support",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "faq",
      file: "faq.html",
      titleKey: "wiki.faq.title",
      navKey: "wiki.nav.faq",
      lastUpdated: "2025-12-11",
      searchable: true
    },

    // Existing pages you still have (keep if they exist in /wiki/{lang}/...)
    {
      id: "definitions",
      file: "definitions.html",
      titleKey: "wiki.definitions.title",
      navKey: "wiki.nav.definitions",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "tutorial",
      file: "tutorial.html",
      titleKey: "wiki.tutorial.title",
      navKey: "wiki.nav.tutorial",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "project-section",
      file: "project-section.html",
      titleKey: "wiki.projectSection.title",
      navKey: "wiki.nav.projectSection",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "how-it-works",
      file: "how-it-works.html",
      titleKey: "wiki.howItWorks.title",
      navKey: "wiki.nav.howItWorks",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "why-valueapp",
      file: "why-valueapp.html",
      titleKey: "wiki.whyValueApp.title",
      navKey: "wiki.nav.whyValueApp",
      lastUpdated: "2025-12-11",
      searchable: true
    },

    // Search page itself (usually not searchable)
    {
      id: "search",
      url: "/wiki/search.html", // if this is language-neutral; otherwise make it file: "search.html"
      titleKey: "wiki.search.title",
      navKey: null,
      lastUpdated: "2025-12-11",
      searchable: false
    }
  ];

  // Language-aware URL resolver (no hardcoded language list)
  window.getWikiPageUrlForLang = function getWikiPageUrlForLang(page, lang) {
    if (!page) return null;
    if (page.url) return page.url; // absolute / special
    if (page.file) return getWikiBase(lang) + page.file;
    return null;
  };

  // Merge auto-generated wiki pages (from markdown build), if present
  if (Array.isArray(window.WIKI_GENERATED_PAGES)) {
    const existingIds = new Set(window.WIKI_PAGES.map((p) => p.id));
    window.WIKI_GENERATED_PAGES.forEach((p) => {
      if (!existingIds.has(p.id)) window.WIKI_PAGES.push(p);
    });
  }
})();