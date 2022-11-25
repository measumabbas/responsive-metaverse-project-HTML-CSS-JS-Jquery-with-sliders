const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.res-nav-overlay').style.display='grid'
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('.res-nav-overlay').style.display='none'

  }
});


var imageSliderTwo = new Swiper('.image-slider-2', {
  autoplay: {
      delay: 2000,
      disableOnInteraction: false
},
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  pagination: {
      el: '.offer-pagination',
            clickable: true,
        renderBullet: function (index, className) {
          return `<span class="offer-pagination ${className}"></span>`;
        },
    },
breakpoints: {
      // when window is <= 580px
      580: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window is <= 768px
      768: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      // when window is <= 992px
      992: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window is <= 1200px
      1200: {
          slidesPerView: 2,
          spaceBetween: 10
      },

  }
});