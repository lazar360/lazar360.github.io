/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*======MENU SHOW====*/
/* Validate if constant exists  */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.add("show-menu");
  });
}

/*======MENU HIDDEN====*/
/* Validate if constant exists  */
if (navClose) {
  navClose.addEventListener("click", () => {
    console.log("clicked");
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER PROJECTS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
