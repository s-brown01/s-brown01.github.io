// this is an example javascript page
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // this adds a listener for clicking
    menuToggle.addEventListener('click', function() {
        // when click, toggle active
        navMenu.classList.toggle('active');
    });
});