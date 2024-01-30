var swiper = new Swiper(".slide-contentT", {
    // slidesPerView: 2, // Adjust this value for smaller screens
    // spaceBetween: 20, // Adjust this value as needed
    loop: true,
    breakpoints: {
        1320: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
    },
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    autoplay: {
        delay: 1000, // Time in milliseconds between slides
        disableOnInteraction: false, // Enable autoplay even when the user interacts with the swiper
    },
});
