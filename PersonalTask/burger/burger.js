const mobileMenu = document.getElementById('moble-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click',() =>{
    navList.classList.toggle('active');
});