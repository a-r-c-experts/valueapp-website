// wiki/toc.js
(function () {
  function buildToc() {
    const main = document.querySelector("main");
    if (!main) return;

    const content = main.querySelector(".wiki-content") || main;

    // Use the pre-rendered container if present
    let toc = document.getElementById("wikiToc") || document.querySelector(".wiki-toc");

    // If we somehow have a container that is already built, don't do it twice
    if (toc && toc.dataset.tocBuilt === "true") return;

    // If no container exists (future-proof), create one
    if (!toc) {
      toc = document.createElement("aside");
      toc.className = "wiki-toc";
      toc.id = "wikiToc";
      // Put it before the content section
      main.insertBefore(toc, content);
    }

    // Collect headings **only inside the content**, not in header/footer
    const allHeadings = Array.from(content.querySelectorAll("h1, h2, h3"));
    if (!allHeadings.length) return;

    // Clone so we can mutate safely
    const tocSource = allHeadings.slice();

    // 1) Skip page title (H1), if present
    if (tocSource.length && tocSource[0].tagName === "H1") {
      tocSource.shift();
    }

    // 2) Skip subtitle (first H2 right after H1), if present
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

    // Clear any previous content in the aside
    toc.innerHTML = "";

    // Header row: title + mobile toggle
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
    toggleBtn.innerHTML = "▾";
    toggleBtn.setAttribute("aria-label", "Toggle table of contents");
    toggleBtn.addEventListener("click", () => {
      const isOpen = toc.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggleBtn.innerHTML = isOpen ? "▴" : "▾";
    });

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

    // Mark as built so we don't rebuild on "partials:loaded"
    toc.dataset.tocBuilt = "true";

    // Mobile toggle behaviour (CSS uses .wiki-toc.is-open)
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