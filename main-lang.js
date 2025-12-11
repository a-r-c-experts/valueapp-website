// main-lang.js
function applyTranslations() {
  const lang = window.getStoredLanguage
    ? window.getStoredLanguage()
    : "en";

  const dict =
    (window.content && window.content[lang]) ||
    (window.content && window.content.en) ||
    {};

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;

    const value = dict[key];
    if (!value) return; // silently ignore missing keys

    // Allow HTML where you actually used tags in the translations
    if (value.indexOf("<") !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Update the little "EN / DE / FR..." label
  const labelEl = document.getElementById("currentLangLabel");
  if (labelEl) {
    labelEl.textContent = lang.toUpperCase();
  }

  // Keep <html lang="…"> consistent
  document.documentElement.lang = lang;
}

// Make it visible so wiki / search / whoever can also call it if needed
window.applyTranslations = applyTranslations;

function setupLanguageMenu() {
  const toggle = document.getElementById("langToggle");
  const menu = document.getElementById("langMenu");
  const currentLabel = document.getElementById("currentLangLabel");

  if (!toggle || !menu) return;

  // Initial label
  const initialLang = window.getStoredLanguage
    ? window.getStoredLanguage()
    : "en";
  if (currentLabel) {
    currentLabel.textContent = initialLang.toUpperCase();
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const next = !isOpen;
    toggle.setAttribute("aria-expanded", String(next));
    menu.classList.toggle("is-open", next);
  });

  menu.addEventListener("click", (event) => {
    const btn = event.target.closest(".lang-option");
    if (!btn) return;

    const lang = btn.dataset.lang;
    if (!lang) return;

    if (window.setStoredLanguage) {
      window.setStoredLanguage(lang);
    }
    applyTranslations();

    // Close menu
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    if (
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
}

function setupMobileNav() {
  const btn = document.getElementById("mobileNavToggle");
  const nav = document.querySelector(".main-nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageMenu();
  setupMobileNav();
  applyTranslations();
});