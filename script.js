const customNavbar = document.querySelector("#customNavbar");
const customNavbarA = document.querySelectorAll(".nav-link");
const navbarToggle = document.querySelector(".navbar-toggler");

const form = document.querySelector("#contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.open("./thankyou.html", "_self");
});
