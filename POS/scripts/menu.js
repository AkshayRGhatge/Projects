//variables
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('sidebar');
const mainContent=document.getElementsByClassName('main-content');

//If hamburger got click make the menu display
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('display-none');

    //if the menu contain displaynone from left make the main content 0px other wise 150px
    if(navMenu.classList.contains('display-none'))
    {
      mainContent[0].style.left='0';
    }
    else{
       mainContent[0].style.left='150px';
    }
});

