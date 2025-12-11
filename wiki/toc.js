// /wiki/toc.js
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("wikiToc");
    const content = document.querySelector(".wiki-content");
    if (!tocContainer || !content) return;

    const headings = content.querySelectorAll("h1, h2, h3");
    if (!headings.length) return;

    const list = document.createElement("ul");
    list.className = "wiki-toc-list";

    headings.forEach((h) => {
      const level = parseInt(h.tagName[1], 10); // 1,2,3
      if (!h.id) {
        const baseId = h.textContent
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]/g, "");
        let id = baseId || "section";
        // avoid collisions
        let counter = 1;
        while (document.getElementById(id)) {
          id = `${baseId}-${counter++}`;
        }
        h.id = id;
      }

      const li = document.createElement("li");
      li.className = `wiki-toc-item toc-level-${level}`;

      const a = document.createElement("a");
      a.href = `#${h.id}`;
      a.textContent = h.textContent.trim();

      li.appendChild(a);
      list.appendChild(li);
    });

    const title = document.createElement("div");
    title.className = "wiki-toc-title";
    title.textContent = "Inhalt";

    tocContainer.appendChild(title);
    tocContainer.appendChild(list);
  });
})();