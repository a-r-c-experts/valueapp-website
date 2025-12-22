async function applyWikiVersion() {
  const span = document.getElementById("wikiVersionLabel");
  if (!span) return;

  try {
    const res = await fetch("/wiki/wiki-version.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const parts = [];
    if (data.wikiVersion) parts.push(`Wiki version: ${data.wikiVersion}`);
    if (data.appVersion) parts.push(`App: ${data.appVersion}`);
    if (data.note) parts.push(data.note);
    if (data.commit) parts.push(`commit: ${data.commit}`);

    span.textContent = parts.join(" · ");
  } catch {
    // optional fallback
    span.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", applyWikiVersion);
document.addEventListener("partials:loaded", applyWikiVersion);