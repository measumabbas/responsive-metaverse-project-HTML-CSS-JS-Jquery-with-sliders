/* Template: Corso - Free Training Course Landing Page Template
   Author: Inovatik
   Created: Nov 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */

    /* Image Slider - Swiper */
    var imageSliderTwo = new Swiper('.image-slider-2', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
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
    var imageSliderThree = new Swiper('.image-slider-3', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
		breakpoints: {
            // when window is <= 580px
            580: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            850: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            
            // when window is <= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },

        }
    });
    var imageSliderThree = new Swiper('.image-slider-4', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
    });


   

    
})(jQuery);

