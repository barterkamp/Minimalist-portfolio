const hamburger = document.querySelector(".navigation__hamburger");
const navMenu = document.querySelector(".navigation__list");
const navLink = document.querySelector(".navigation__link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
