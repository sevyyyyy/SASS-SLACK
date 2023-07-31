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

const kamote = document.querySelector(".header");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 500) {
        kamote.classList.add("white");
    } else {
        kamote.classList.remove("white");
    }
});

const modal = document.querySelector('.modal');
const btnRegion = document.querySelector('.region');
const btnClose = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');

btnRegion.addEventListener('click',()=>{
    btnRegion.classList.toggle('active')
    btnRegion.nextElementSibling.classList.toggle('active')
})

const openModalHandler = () =>{
    btnRegion.classList.toggle('active');
    btnRegion.nextElementSibling.classList.toggle('toggle');
    overlay.classList.toggle('active');
}

const closeModalHandler = () =>{
    modal.classList.toggle('active');
    btnRegion.classList.toggle('active');
    overlay.classList.toggle('active');
}

const closeOverlay = () =>{
    closeModalHandler();
}

var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    navPosition: "bottom",
    responsive: {
        900: {
            items: 4
        }
    }
})

btnClose.addEventListener('click',closeModalHandler);
btnRegion.addEventListener('click',openModalHandler);
overlay.addEventListener('click',closeOverlay);


