function initMobileTocBehavior() {
  const toc = document.querySelector(".wiki-toc");
  if (!toc) return;

  // Start open on mobile
  if (window.matchMedia("(max-width: 900px)").matches) {
    toc.classList.add("is-open");
  }

  // Close after selecting a link (mobile)
  toc.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    if (window.matchMedia("(max-width: 900px)").matches) {
      toc.classList.remove("is-open");
    }
  });
}

document.addEventListener("DOMContentLoaded", initMobileTocBehavior);
document.addEventListener("partials:loaded", initMobileTocBehavior);