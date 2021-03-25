const toggler = document.querySelector(".toggler");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("#mobile-menu");
const nav = document.querySelector("nav");


toggler.addEventListener("click", function () {
  burger.classList.toggle("open");
  mobileMenu.classList.toggle("width");
});

// HIDE NAVBAR ON SCROLL DOWN
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  

  let currentScrollPos = window.pageYOffset;
  

  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-1000px";
  }
  prevScrollpos = currentScrollPos;

  
}


// Initialize Swiper 

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});