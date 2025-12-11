// wiki-page-config.js

(function () {
  window.WIKI_PAGES = [
    // Language-neutral pages (same URL for EN / DE)
    {
      id: "home",
      url: "/wiki/index.html",
      titleKey: "wiki.home.title",
      navKey: "wiki.nav.home",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "getting-started",
      url: "/wiki/getting-started.html",
      titleKey: "wiki.gettingStarted.title",
      navKey: "wiki.nav.gettingStarted",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "faq",
      url: "/wiki/faq.html",
      titleKey: "wiki.faq.title",
      navKey: "wiki.nav.faq",
      lastUpdated: "2025-12-11",
      searchable: true
    },

    // Language-specific pages generated from markdown
    {
      id: "definitions",
      urlByLang: {
        en: "/wiki/en/definitions.html",
        de: "/wiki/de/definitions.html"
      },
      titleKey: "wiki.definitions.title",
      navKey: "wiki.nav.definitions",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "examples",
      urlByLang: {
        en: "/wiki/en/examples.html",
        de: "/wiki/de/examples.html"
      },
      titleKey: "wiki.examples.title",
      navKey: "wiki.nav.examples",
      lastUpdated: "2025-12-11",
      searchable: true
    },
    {
      id: "tutorial",
      urlByLang: {
        en: "/wiki/en/tutorial.html",
        de: "/wiki/de/tutorial.html"
      },
      titleKey: "wiki.tutorial.title",
      navKey: "wiki.nav.tutorial",
      lastUpdated: "2025-12-11",
      searchable: true
    },

    // Search page itself (usually not searchable)
    {
      id: "search",
      url: "/wiki/search.html",
      titleKey: "wiki.search.title",
      navKey: null,
      lastUpdated: "2025-12-11",
      searchable: false
    }
  ];

  // Helper for language-aware URL resolution
  window.getWikiPageUrlForLang = function getWikiPageUrlForLang(page, lang) {
    if (page.urlByLang && page.urlByLang[lang]) {
      return page.urlByLang[lang];
    }
    if (page.url) {
      return page.url;
    }
    return null;
  };
})();