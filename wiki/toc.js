// wiki/toc.js
(function () {
  function buildToc() {
    // If we already built a TOC on this page, don't do it again
    if (document.querySelector(".wiki-toc")) return;

    const main = document.querySelector("main");
    if (!main) return;

    // Collect headings in main
    const allHeadings = Array.from(main.querySelectorAll("h1, h2, h3"));
    if (allHeadings.length === 0) return;

    // Skip first H1 + first H2 (page title + subtitle from Markdown)
    const trimmed = allHeadings.slice(2);

    // Only H2/H3 go into the TOC
    const headings = trimmed.filter(
      (h) => h.tagName === "H2" || h.tagName === "H3"
    );
    if (!headings.length) return;

    // Ensure IDs on headings so we can link to them
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

    // Create TOC container
    const toc = document.createElement("nav");
    toc.className = "wiki-toc";
    toc.setAttribute("aria-label", "Table of contents");

    // Header row (title + mobile toggle)
    const header = document.createElement("div");
    header.className = "wiki-toc-header";

    const titleEl = document.createElement("div");
    titleEl.className = "wiki-toc-title";
    titleEl.setAttribute("data-i18n", "wiki.toc.title");
    titleEl.textContent = "Contents"; // fallback text

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "wiki-toc-toggle";
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("data-i18n", "wiki.toc.toggle");
    toggleBtn.textContent = "Contents"; // mobile label fallback

    header.appendChild(titleEl);
    header.appendChild(toggleBtn);
    toc.appendChild(header);

    // List of links
    const list = document.createElement("ul");
    list.className = "wiki-toc-list";

    headings.forEach((h) => {
      const li = document.createElement("li");
      li.className =
        h.tagName === "H2"
          ? "wiki-toc-item level-2"
          : "wiki-toc-item level-3";

      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();

      li.appendChild(a);
      list.appendChild(li);
    });

    toc.appendChild(list);

    // Place TOC near the top: right before the first content H2
    const firstContentHeading = headings[0];
    if (firstContentHeading && firstContentHeading.parentElement === main) {
      main.insertBefore(toc, firstContentHeading);
    } else {
      // fallback: after first element in <main>
      const firstChild = main.firstElementChild;
      if (firstChild) {
        main.insertBefore(toc, firstChild.nextSibling);
      } else {
        main.appendChild(toc);
      }
    }

    // Mobile toggle behaviour (matches CSS "is-open" class)
    toggleBtn.addEventListener("click", () => {
      const isOpen = toc.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Re-run translations so "wiki.toc.*" gets localised
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations();
    }
  }

  document.addEventListener("DOMContentLoaded", buildToc);
  // Still listen to partials:loaded, but buildToc guards against duplicates
  document.addEventListener("partials:loaded", buildToc);
})();