//variables

//Hamburger menu
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });