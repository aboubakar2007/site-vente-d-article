// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// ===== Navbar Hide/Show on Scroll =====
let lastScrollY = 0;
const navbar = document.querySelector("header");

if (navbar) {
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // Scrolling down — hide navbar
      navbar.style.top = "-100px";
    } else {
      // Scrolling up — show navbar
      navbar.style.top = "0";
    }

    lastScrollY = currentScrollY;
  });
}
