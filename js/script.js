// Popup
document.querySelector('#show-login').addEventListener('click', function() {
    document.querySelector('.popup').classList.add('active');
})

document.querySelector('.popup .close-btn').addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('active');
})


// Sticky Header
const stickyHeader = document.querySelector('header');
window.addEventListener('scroll', () => {
    stickyHeader.classList.toggle('sticky', scrollY > 0);
})

// Hamburger-Menu
const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})

// Dark Mode
const darkMode = document.querySelector('body');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    darkMode.classList.toggle('dark') ? (toggle.firstElementChild.className='far fa-moon') : (toggle.firstElementChild.className='far fa-sun');
})


