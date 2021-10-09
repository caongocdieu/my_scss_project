const menuBtn = document.querySelector('.menu-btn');
const hamburgerButton = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

var navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburgerButton.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburgerButton.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

// navItems.forEach((item,index) => {
//     item.onclick = function() {

//         console.log(item);
//         console.log(document.querySelector('.menu-nav__item.active'));

//         // item.classList.remove('active');

//          item.classList.add('active');
        

//         event.preventDefault();
//     }
// })