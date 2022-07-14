const navHamburger = document.querySelector('.nav__hamburger');
const hideMenu = document.querySelector('.nav__x');
const navLinks = document.querySelector('.nav__links');


navHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('nav__links--enabled');
});




