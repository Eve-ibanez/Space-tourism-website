const menuButton = document.querySelector ('.nav-menu-img');
const menuResponsive = document.querySelector ('.nav__div-menu');
const menuClose = document.querySelector ('.menu-close');

menuButton.addEventListener ("click", ()=> {
    menuResponsive.style.display = 'block';
    menuClose.addEventListener ("click", ()=> {
        menuResponsive.style.display = 'none';
    })
})