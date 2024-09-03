document.addEventListener('DOMContentLoaded', function () {
  initializeSwiper();
});

function initializeSwiper() {
  var swiper = new Swiper('.card_slider', {
    // slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
