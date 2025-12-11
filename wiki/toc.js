// wiki/toc.js
(function () {
  function initWikiToc() {
    const main = document.querySelector("main");
    if (!main) return;

    // Prevent duplicates
    if (main.dataset.tocBound === "1") return;
    main.dataset.tocBound = "1";

    // Collect headings
    const rawHeadings = Array.from(main.querySelectorAll("h1, h2, h3"));
    if (rawHeadings.length === 0) return;

    // Skip H1 and first H2 (title + subtitle)
    let skippedH1 = false;
    let skippedH2 = false;
    const headings = [];

    for (const h of rawHeadings) {
      const level = parseInt(h.tagName.substring(1), 10);

      if (level === 1 && !skippedH1) {
        skippedH1 = true;
        continue;
      }
      if (level === 2 && !skippedH2) {
        skippedH2 = true;
        continue;
      }

      if (level === 2 || level === 3) {
        headings.push(h);
      }
    }

    if (!headings.length) return;

    // Assign IDs
    headings.forEach((h, i) => {
      if (!h.id) {
        h.id =
          (h.textContent || "section")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "") || `sec-${i}`;
      }
    });

    // Wrapper (toggle + toc together)
    const wrapper = document.createElement("div");
    wrapper.className = "wiki-toc-wrapper";

    // Mobile toggle button
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "wiki-toc-toggle";
    toggle.setAttribute("data-i18n", "wiki.toc.toggle");
    toggle.textContent = "Contents";

    // The actual TOC box
    const toc = document.createElement("nav");
    toc.className = "wiki-toc";
    toc.setAttribute("aria-label", "Table of contents");

    const title = document.createElement("div");
    title.className = "wiki-toc-title";
    title.setAttribute("data-i18n", "wiki.toc.title");
    title.textContent = "Contents";

    const ul = document.createElement("ul");
    ul.className = "wiki-toc-list";

    headings.forEach((h) => {
      const li = document.createElement("li");
      li.className =
        h.tagName === "H2"
          ? "wiki-toc-item level-h2"
          : "wiki-toc-item level-h3";

      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();

      li.appendChild(a);
      ul.appendChild(li);
    });

    toc.appendChild(title);
    toc.appendChild(ul);

    wrapper.appendChild(toggle);
    wrapper.appendChild(toc);

    // Insert after first block of content
    const firstChild = main.firstElementChild;
    if (firstChild) {
      main.insertBefore(wrapper, firstChild.nextElementSibling);
    } else {
      main.appendChild(wrapper);
    }

    // Mobile toggle
    toggle.addEventListener("click", () => {
      toc.classList.toggle("is-open");
    });

    // Re-apply translations
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations();
    }
  }

  document.addEventListener("DOMContentLoaded", initWikiToc);
})();