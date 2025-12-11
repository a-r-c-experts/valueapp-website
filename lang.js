// lang.js
// Uses window.content + getStoredLanguage / setStoredLanguage
// provided by /i18n/lang-loader.js

(function () {
  function getCurrentLang() {
    if (typeof window.getStoredLanguage === "function") {
      return window.getStoredLanguage();
    }
    const htmlLang = (document.documentElement.lang || "").toLowerCase();
    return htmlLang || "en";
  }

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
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;

        if (typeof window.setStoredLanguage === "function") {
          window.setStoredLanguage(lang);
        } else {
          document.documentElement.lang = lang;
        }

        window.applyTranslations();

        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initI18n() {
    bindLanguageMenu();
    window.applyTranslations();
  }

  // main page: header already in DOM
  document.addEventListener("DOMContentLoaded", initI18n);

  // wiki pages: header injected via partials.js
  document.addEventListener("partials:loaded", initI18n);
})();