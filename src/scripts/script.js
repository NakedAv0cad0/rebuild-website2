// Header
const header = document.querySelector("header");
let lastScroll = 0;

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  header.classList.toggle("atTop", currentScroll !== 0);
  header.classList.toggle("sticky", lastScroll > currentScroll);
  lastScroll = currentScroll;
});

// Navigation
const links = document.querySelectorAll(".nav-link");
const sections = [];

links.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) sections.push(section);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => [link.classList.remove("active")]);
    e.target.classList.add("active");
  });
});

// Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

document.addEventListener("click", (e) => {
  if (e.target.id === menuBtn.id) {
    menuBtn.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    return;
  }
  menuBtn.classList.add("hidden");
  menu.classList.add("hidden");
});

// Overlays
const overlays = document.querySelectorAll(".overlay");

const loaded = (overlay) => {
  overlay.classList.add("loaded");
};

overlays.forEach((overlay) => {
  const img = overlay.querySelector("img");
  if (img.complete) loaded(overlay);
  if (!img.complete) img.addEventListener("load", () => loaded(overlay));
});
