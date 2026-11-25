import "./styles/main.scss";

// Menu hamburguesa en movil
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
});
