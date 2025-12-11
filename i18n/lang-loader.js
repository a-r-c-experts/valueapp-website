// /i18n/lang-loader.js
import { contentEn } from "/i18n/en.js";
import { contentDe } from "/i18n/de.js";

const content = {
  en: contentEn,
  de: contentDe,
};

window.content = content;

function readBrowserLanguage() {
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("de")) return "de";
  return "en";
}

window.getStoredLanguage = function getStoredLanguage() {
  try {
    const stored = localStorage.getItem("valueAppLanguage");
    if (stored === "en" || stored === "de") return stored;
  } catch {}
  return readBrowserLanguage();
};

window.setStoredLanguage = function setStoredLanguage(lang) {
  try {
    if (lang === "en" || lang === "de") {
      localStorage.setItem("valueAppLanguage", lang);
      document.documentElement.lang = lang;
    }
  } catch {}
};