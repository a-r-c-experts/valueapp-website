function getCurrentPath() {
  return window.location.pathname.replace(/\/+$/, "");
}

function getWikiPagesSafe() {
  const pages = window.WIKI_PAGES;
  return Array.isArray(pages) ? pages : [];
}

function findCurrentPageConfig() {
  const path = getCurrentPath();
  const pages = getWikiPagesSafe();
  return pages.find(p => p.url === path) || null;
}

function formatLastUpdated(isoString) {
  if (!isoString) return null;
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return null;

  const lang = (document.documentElement.lang || "en").toLowerCase();
  const fmt = d.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return fmt;
}

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-last-updated-target]");
  if (!target) return;

  const pageCfg = findCurrentPageConfig();
  if (!pageCfg || !pageCfg.lastUpdated) return;

  const formatted = formatLastUpdated(pageCfg.lastUpdated);
  if (!formatted) return;

  target.textContent = `Last updated: ${formatted}`;
});