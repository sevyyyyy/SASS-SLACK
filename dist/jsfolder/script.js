const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
toggleMenu.classList.toggle("open");
headerNav.classList.toggle("open");
});

const drop = document.querySelectorAll(".header__nav ul.nav li");
drop.forEach((link) => {
    link.addEventListener("click", () => {
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("i").classList.toggle("open");
    });
});
