function highlightActiveNav() {
  const here = window.location.pathname.replace(/\/+$/, "");
  const navLinks = document.querySelectorAll("nav.main-nav a");

  navLinks.forEach((a) => {
    const target = a.getAttribute("href").replace(/\/+$/, "");
    if (target === here) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", highlightActiveNav);