// /i18n/lang-loader.js
import { contentEn } from "/i18n/en.js";
import { contentDe } from "/i18n/de.js";
import { contentEs } from "/i18n/es.js";
import { contentFr } from "/i18n/fr.js";
import { contentIt } from "/i18n/it.js";
import { contentPt } from "/i18n/pt.js";

const SUPPORTED_LANGS = ["en", "de", "es", "fr", "it", "pt"];
const DEFAULT_LANG = "en";

const content = {
  en: contentEn,
  de: contentDe,
  es: contentEs,
  fr: contentFr,
  it: contentIt,
  pt: contentPt,
};

// expose to the rest of the site (wiki, search, etc.)
window.content = content;

function normalizeLang(raw) {
  if (!raw) return DEFAULT_LANG;
  const lower = raw.toLowerCase();

  // exact or prefix match (e.g. "de-CH" -> "de")
  for (const code of SUPPORTED_LANGS) {
    if (lower === code || lower.startsWith(code + "-")) {
      return code;
    }
  }
  return DEFAULT_LANG;
}

function readBrowserLanguage() {
  const navLang =
    (navigator.language ||
      navigator.userLanguage ||
      "").toLowerCase();
  return normalizeLang(navLang);
}

window.getStoredLanguage = function getStoredLanguage() {
  try {
    const stored = localStorage.getItem("valueAppLanguage");
    if (stored && SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }
  } catch {
    // storage is optional, universe is cruel
  }
  return readBrowserLanguage();
};

window.setStoredLanguage = function setStoredLanguage(lang) {
  const norm = normalizeLang(lang);

  try {
    localStorage.setItem("valueAppLanguage", norm);
  } catch {
    // ignore, user’s browser is having feelings
  }

  document.documentElement.lang = norm;

  // main site / wiki should already define this
  if (typeof window.applyTranslations === "function") {
    window.applyTranslations();
  }
};

