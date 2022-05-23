
// when the bars are touched it displays the navbar as a dropdown

const menu = document.querySelector('#mobile_setup');
const menuLinks = document.querySelector('.navbar_menu');

const menuMobile = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', menuMobile);

