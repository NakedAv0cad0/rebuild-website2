// Navigation
const links = document.querySelectorAll(".nav-link");
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
