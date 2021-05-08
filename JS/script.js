const hamburgerMenu = document.querySelector(".header__hamburger");
const headerMenu = document.querySelector(".header__menu");

function toggleMenuState(){
    hamburgerMenu.classList.toggle("header__hamburger_active");
    headerMenu.classList.toggle("header__menu_active");
}



hamburgerMenu.addEventListener('click',toggleMenuState);