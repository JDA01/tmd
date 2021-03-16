const toggler = document.querySelector(".toggler");
const burger = document.querySelector(".burger");
// const navigation = document.querySelector(".navigation");
const mobileNav = document.querySelector("#mobile-nav");


toggler.addEventListener("click", function(){
    burger.classList.toggle("open");
    // navigation.classList.toggle("active");
    mobileNav.classList.toggle("width");
});




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