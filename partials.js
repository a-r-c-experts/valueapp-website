// include-partials.js
document.addEventListener("DOMContentLoaded", () => {
  const includeNodes = document.querySelectorAll("[data-include]");
  if (!includeNodes.length) {
    return;
  }

  const promises = Array.from(includeNodes).map(async (node) => {
    const url = node.getAttribute("data-include");
    if (!url) return;

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        console.error("Include failed for", url, resp.status);
        return;
      }
      const html = await resp.text();
      node.innerHTML = html;
    } catch (err) {
      console.error("Include error for", url, err);
    }
  });

  Promise.all(promises).then(() => {
    // Signal to other scripts (like search.js) that header/footer exist now
    document.dispatchEvent(new Event("partials:loaded"));
  });
});