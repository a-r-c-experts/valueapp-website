// lang.js
// Uses window.content + getStoredLanguage / setStoredLanguage
// provided by /i18n/lang-loader.js

(function () {
  // -----------------------------
  // Language helpers
  // -----------------------------
  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      return window.getStoredLanguage();
    }
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

  // Detect if current page is inside /wiki/… (supports GH Pages base path)
  function isWikiPage() {
    return window.location.pathname.split("/").includes("wiki");
  }

  function getWikiSlugFromPath() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const wikiIndex = parts.indexOf("wiki");

    // expect pattern: ... / wiki / <lang> / <slug>
    if (wikiIndex !== -1 && parts.length >= wikiIndex + 3) {
      return parts[wikiIndex + 2]; // e.g. "tutorial.html"
    }

    // fallback: index
    return "index.html";
  }

  function buildWikiUrlForLang(lang) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const wikiIndex = parts.indexOf("wiki");
    const slug = getWikiSlugFromPath(); // e.g. "tutorial.html"

    // Base path before "wiki" ("" locally, "/valueapp-website" on GH Pages, etc.)
    let base = "";
    if (wikiIndex > 0) {
      base = "/" + parts.slice(0, wikiIndex).join("/");
    }

    return `${base}/wiki/${lang}/${slug}`;
  }

  // -----------------------------
  // i18n dictionary + rendering
  // -----------------------------
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

    // label in header
    const labelEl = document.getElementById("currentLangLabel");
    if (labelEl) {
      labelEl.textContent = lang.toUpperCase();
    }
  }

  // Expose this so other code can force a refresh
  window.applyTranslations = function applyTranslations() {
    const lang = getCurrentLang();
    applyTranslationsForLang(lang);
  };

  // -----------------------------
  // Mobile nav
  // -----------------------------
  function setupMobileNav() {
    const btn = document.getElementById("mobileNavToggle");
    const nav = document.querySelector("header .main-nav");

    if (!btn || !nav) return;

    // avoid binding twice (important on wiki when header appears later)
    if (btn.dataset.navBound === "1") return;
    btn.dataset.navBound = "1";

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // -----------------------------
  // Language menu wiring
  // -----------------------------
  function bindLanguageMenu() {
    const toggle = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");

    if (!toggle || !menu) return;

    // avoid binding twice when header appears later
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
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;

        if (typeof window.setStoredLanguage === "function") {
          window.setStoredLanguage(lang);
        } else {
          document.documentElement.lang = lang;
        }

        // If we are on a wiki HTML page, also switch the page URL
        if (isWikiPage()) {
          const targetUrl = buildWikiUrlForLang(lang);
          if (targetUrl && targetUrl !== window.location.pathname) {
            window.location.href = targetUrl;
            return; // page will reload, no need to applyTranslations
          }
        }

        // Non-wiki pages: just re-translate UI in place
        window.applyTranslations();

        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // -----------------------------
  // Init (main + wiki, with async header)
  // -----------------------------
  function initOncePossible(observer) {
    bindLanguageMenu();
    setupMobileNav();
    window.applyTranslations();

    // Stop observing once both things are bound
    const toggle = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");
    const btn = document.getElementById("mobileNavToggle");

    const langBound = menu && menu.dataset.bound === "1";
    const navBound = btn && btn.dataset.navBound === "1";

    if (observer && langBound && navBound) {
      observer.disconnect();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Try once immediately (main page header is already there)
    initOncePossible(null);

    // For wiki: header is injected later, so watch the DOM
    const observer = new MutationObserver(() => {
      initOncePossible(observer);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
})();