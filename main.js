/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__contentTe", {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 1000, // Time in milliseconds between slides
    disableOnInteraction: false, // Enable autoplay even when the user interacts with the swiper
},


});