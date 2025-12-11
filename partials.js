// Poor man's templating: load HTML fragments into placeholders.
async function loadPartials() {
  const includeNodes = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(includeNodes).map(async (node) => {
      const url = node.getAttribute("data-include");
      try {
        const resp = await fetch(url);
        if (!resp.ok) return;
        const html = await resp.text();
        node.outerHTML = html;
      } catch (e) {
        // Fail silently. Life is pain anyway.
        console.error("Failed to load partial:", url, e);
      }
    })
  );
}

// Expose a hook for other scripts (like lang.js) if needed
window.__wikiPartialsLoaded = loadPartials();

document.addEventListener("DOMContentLoaded", () => {
  // If loadPartials hasn't run yet, ensure it runs
  if (!window.__wikiPartialsLoaded) {
    window.__wikiPartialsLoaded = loadPartials();
  }
});