// Update these when you cut a new "release" of the wiki.
const WIKI_VERSION = {
  wikiVersion: "2025-12-01",
  appVersion: "ValueApp 1.0.0-alpha",
  note: "Alpha user wiki"
};

document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("wikiVersionLabel");
  if (!span) return;

  const parts = [];
  if (WIKI_VERSION.wikiVersion) {
    parts.push(`Wiki version: ${WIKI_VERSION.wikiVersion}`);
  }
  if (WIKI_VERSION.appVersion) {
    parts.push(`App: ${WIKI_VERSION.appVersion}`);
  }
  if (WIKI_VERSION.note) {
    parts.push(WIKI_VERSION.note);
  }

  span.textContent = parts.join(" · ");
});