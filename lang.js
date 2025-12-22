// lang.js
// Uses window.content + getStoredLanguage / setStoredLanguage
// provided by /i18n/lang-loader.js

(function () {
  /* ---------------------------
   * Helpers: language + wiki URL
   * --------------------------- */

  const SUPPORTED_WIKI_LANGS = ["en", "de", "fr"];

  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      return window.getStoredLanguage();
    }
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

  function isWikiPage() {
    return window.location.pathname.startsWith("/wiki");
  }

  function isLocalizedWikiPage() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    // /wiki/en/tutorial.html → ["wiki","en","tutorial.html"]
    return (
      parts.length >= 3 &&
      parts[0] === "wiki" &&
      SUPPORTED_WIKI_LANGS.includes(parts[1])
    );
  }

  function buildWikiUrlForLang(lang) {
    const pathname = window.location.pathname;
    const parts = pathname.split("/").filter(Boolean);

    // Only rewrite URLs if we're on /wiki/{lang}/...
    if (parts.length >= 3 && parts[0] === "wiki" && SUPPORTED_WIKI_LANGS.includes(parts[1])) {
      parts[1] = lang;
      return "/" + parts.join("/");
    }

    // For root wiki pages (/wiki/index.html, /wiki/getting-started.html, /wiki/faq.html, …)
    // we stay on the same URL; i18n just swaps the text in place.
    return null;
  }

  /* ---------------------------
   * i18n dictionary handling
   * --------------------------- */

  function getDict(lang) {
    const all = window.content || {};
    return all[lang] || all.en || {};
  }

  function applyTranslationsForLang(lang) {
    const dict = getDict(lang);

    // update <html lang="…">
    document.documentElement.lang = lang;

    // translate all data-i18n nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key];
      if (typeof value === "undefined") return;

      // allow inline HTML in translations
      el.innerHTML = value;
    });

    // header language label
    const labelEl = document.getElementById("currentLangLabel");
    if (labelEl) {
      labelEl.textContent = lang.toUpperCase();
    }

    // adjust wiki nav hrefs for this language
    updateWikiNavLinksForLang(lang);
  }

  // Expose this so other code can force a refresh
  window.applyTranslations = function applyTranslations() {
    const lang = getCurrentLang();
    applyTranslationsForLang(lang);
  };

  /* ---------------------------
   * Wiki nav links: per-language URLs
   * --------------------------- */

  function updateWikiNavLinksForLang(lang) {
  if (!isWikiPage()) return;

  const nav = document.querySelector("nav.main-nav");
  if (!nav) return;

  const base = "/wiki/" + lang + "/";

  // If the header uses data-wiki-link, we respect that and wire it properly.
  const links = nav.querySelectorAll("a[data-wiki-link]");
  links.forEach((a) => {
    const file = a.getAttribute("data-wiki-link");
    if (!file) return;
    a.href = base + file;
  });
}

  /* ---------------------------
   * Language menu (header)
   * --------------------------- */

  function bindLanguageMenu() {
    const toggle = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");

    if (!toggle || !menu) return;

    // avoid binding twice when partials load
    if (menu.dataset.bound === "1") return;
    menu.dataset.bound = "1";

    const options = menu.querySelectorAll(".lang-option");

    // open/close dropdown
    toggle.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close on outside click
    document.addEventListener("click", (ev) => {
      if (!menu.classList.contains("open")) return;
      if (!menu.contains(ev.target) && ev.target !== toggle) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // select language
    options.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        const lang = (btn.getAttribute("data-lang") || "").toLowerCase();
        if (!lang) return;

        if (typeof window.setStoredLanguage === "function") {
          window.setStoredLanguage(lang);
        } else {
          document.documentElement.lang = lang;
        }

        // If we are on a localized wiki HTML page (/wiki/{lang}/...)
        // redirect to the same slug in the other language
        if (isWikiPage()) {
          const targetUrl = buildWikiUrlForLang(lang);
          if (targetUrl && targetUrl !== window.location.pathname) {
            window.location.href = targetUrl;
            return;
          }
        }

        // Non-localized pages: just re-translate UI in place
        window.applyTranslations();

        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------
   * Mobile nav (main + wiki)
   * --------------------------- */

  function setupMobileNav() {
    const btn = document.getElementById("mobileNavToggle");
    const nav = document.querySelector(".main-nav");

    if (!btn || !nav) return;

    // avoid double binding
    if (btn.dataset.bound === "1") return;
    btn.dataset.bound = "1";

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---------------------------
   * Init on main & wiki
   * --------------------------- */

  function initI18nAndNav() {
    bindLanguageMenu();
    setupMobileNav();
    window.applyTranslations();
  }

  document.addEventListener("DOMContentLoaded", initI18nAndNav);
  document.addEventListener("partials:loaded", initI18nAndNav);
})();