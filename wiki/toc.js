// wiki/toc.js
(function () {
  function buildToc() {
    const main = document.querySelector("main");
    if (!main) return;

    const allHeadings = Array.from(
      main.querySelectorAll("h1, h2, h3")
    );
    if (allHeadings.length === 0) return;

    // Skip first H1 and H2 (page title + subtitle)
    const trimmed = allHeadings.slice(2);

    // Only H2/H3 go into the TOC
    const headings = trimmed.filter(
      (h) => h.tagName === "H2" || h.tagName === "H3"
    );
    if (!headings.length) return;

    // Ensure IDs
    headings.forEach((h, idx) => {
      if (!h.id) {
        const base = (h.textContent || "section")
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");
        h.id = base || `section-${idx}`;
      }
    });

    const toc = document.createElement("nav");
    toc.className = "wiki-toc";
    toc.setAttribute("aria-label", "Table of contents");

    // Header wrapper (title + toggle button)
    const header = document.createElement("div");
    header.className = "wiki-toc-header";

    const titleEl = document.createElement("div");
    titleEl.className = "wiki-toc-title";
    titleEl.setAttribute("data-i18n", "wiki.toc.title");
    titleEl.textContent = "Contents"; // fallback

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "wiki-toc-toggle";
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("data-i18n", "wiki.toc.toggle");
    toggleBtn.textContent = "Contents"; // mobile label (fallback)

    header.appendChild(titleEl);
    header.appendChild(toggleBtn);
    toc.appendChild(header);

    const list = document.createElement("ul");
    list.className = "wiki-toc-list";

    headings.forEach((h) => {
      const li = document.createElement("li");
      li.className =
        h.tagName === "H2" ? "wiki-toc-item level-2" : "wiki-toc-item level-3";

      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();

      li.appendChild(a);
      list.appendChild(li);
    });

    toc.appendChild(list);

    // Insert TOC near the top
    const firstSection = main.firstElementChild;
    if (firstSection) {
      main.insertBefore(toc, firstSection.nextSibling);
    } else {
      main.insertBefore(toc, main.firstChild);
    }

    // Toggle for mobile
    toggleBtn.addEventListener("click", () => {
      const isOpen = toc.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Re-run translations so wiki.toc.* gets localised
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations();
    }
  }

  document.addEventListener("DOMContentLoaded", buildToc);
  document.addEventListener("partials:loaded", buildToc);
})();