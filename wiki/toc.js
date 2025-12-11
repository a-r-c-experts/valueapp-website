// wiki/toc.js
(function () {
  function buildToc() {
    // Avoid duplicates if partials fire multiple times
    if (document.querySelector(".wiki-toc")) return;

    const main = document.querySelector("main");
    if (!main) return;

    const allHeadings = Array.from(main.querySelectorAll("h1, h2, h3"));
    if (!allHeadings.length) return;

    // Clone list so we can mutate safely
    const tocSource = allHeadings.slice();

    // 1) Skip page title (H1), if present
    if (tocSource.length && tocSource[0].tagName === "H1") {
      tocSource.shift();
    }

    // 2) Skip subtitle (first H2 after H1), if present
    if (tocSource.length && tocSource[0].tagName === "H2") {
      tocSource.shift();
    }

    // Only H2/H3 go into the TOC
    const headings = tocSource.filter(
      (h) => h.tagName === "H2" || h.tagName === "H3"
    );
    if (!headings.length) return;

    // Ensure IDs so we can link to headings
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

    // Header row: title + mobile toggle
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
    toggleBtn.textContent = "Contents"; // mobile label fallback

    header.appendChild(titleEl);
    header.appendChild(toggleBtn);
    toc.appendChild(header);

    // List content
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

    // Insert TOC right after the title / subtitle block
    // Anchor: H1, or H2 if we have a "subtitle" H2
    let anchor = allHeadings[0];
    if (
      allHeadings.length > 1 &&
      allHeadings[0].tagName === "H1" &&
      allHeadings[1].tagName === "H2"
    ) {
      anchor = allHeadings[1];
    }

    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(toc, anchor.nextSibling);
    } else {
      // Fallback: after first element in <main>
      const firstEl = main.firstElementChild;
      if (firstEl) {
        main.insertBefore(toc, firstEl.nextSibling);
      } else {
        main.appendChild(toc);
      }
    }

    // Mobile toggle: matches CSS (.wiki-toc.is-open)
    toggleBtn.addEventListener("click", () => {
      const isOpen = toc.classList.toggle("is-open");
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