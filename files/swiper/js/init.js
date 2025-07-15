const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

/* Home fs slider -> */
const homeFsSlider = document.getElementById('home-fs-slider');
if (homeFsSlider) {
   new Swiper(homeFsSlider, {
      navigation: {
         prevEl: '#home-fs-slider-button-prev',
         nextEl: '#home-fs-slider-button-next',
      },
      pagination: {
         el: '#home-fs-slider-pagination',
         clickable: true,
      },
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 30,
      loop: false,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            loop: true,
         },
         861: {
            loop: false,
         }
      },
   });
}
/* <- Home fs slider */

/* Cases slider -> */
let swiper2Instance = null;
const breakpoint2 = 860;
const slider2 = document.getElementById('casey-slider');

function initOrDestroySlider2() {
   const screenWidth2 = Math.min(window.innerWidth, window.innerHeight); // учитываем ориентацию

   if (screenWidth2 <= breakpoint2 && !swiper2Instance && slider2) {
      
      swiper2Instance = new Swiper(slider2, {
         navigation: {
            prevEl: '#casey-button-prev',
            nextEl: '#casey-button-next',
         },
         pagination: {
            el: '#casey-pagination',
            clickable: true,
         },
         centeredSlides: true,
         autoHeight: false,
         slidesPerView: 1.14,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 20,
         loop: true,
         speed: 1000,
         effect: 'slide',
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
      });
   }

   if (screenWidth2 > breakpoint2 && swiper2Instance) {
      swiper2Instance.destroy(true, true);
      swiper2Instance = null;
   }
}

// запустить при загрузке
window.addEventListener('load', initOrDestroySlider2);
// пересчитывать при изменении размера или ориентации
window.addEventListener('resize', initOrDestroySlider2);
window.addEventListener('orientationchange', initOrDestroySlider2);
/* <- Cases slider */

/* Other cases slider -> */
const otherCasesSlider = document.getElementById('other-cases-slider');
if (otherCasesSlider) {
   new Swiper(otherCasesSlider, {
      navigation: {
         prevEl: [document.getElementById('other-cases-swiper-btn-prev'), document.getElementById('other-cases-swiper-btn-mobile-prev')],
         nextEl: [document.getElementById('other-cases-swiper-btn-next'), document.getElementById('other-cases-swiper-btn-mobile-next')],
      },
      pagination: {
         el: '#other-cases-swiper-pagination',
         clickable: true,
      },
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 30,
      loop: false,
      speed: 1000,
      effect: 'slide',
      centeredSlides: false,
      breakpoints: {
         0: {
            slidesPerView: 1.10,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
         },
         481: {
            slidesPerView: 1.10,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
         },
         768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
            centeredSlides: false,
            loop: false,
         },
         1100: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: false,
         }
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}
/* <- Other cases slider */

/* Reviews slider -> */
const reviewsSlider = document.getElementById('reviews-slider');
if (reviewsSlider) {
   new Swiper(reviewsSlider, {
      navigation: {
         prevEl: [document.getElementById('reviews-swiper-btn-prev'), document.getElementById('reviews-swiper-btn-mobile-prev')],
         nextEl: [document.getElementById('reviews-swiper-btn-next'), document.getElementById('reviews-swiper-btn-mobile-next')],
      },
      pagination: {
         el: '#reviews-swiper-pagination',
         clickable: true,
      },
      autoHeight: false,
      slidesPerView: 2,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 30,
      loop: false,
      speed: 1000,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.12,
            spaceBetween: 21,
         },
         481: {
            slidesPerView: 1,
            spaceBetween: 30,
         },
         1100: {
            slidesPerView: 2,
         }
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}
/* <- Reviews slider */

/* be-a-partner slider -> */
let swiperInstance3 = null;
const breakpoint3 = 640;
const slider3 = document.getElementById('be-a-partner');

function initOrDestroySlider3() {
   const screenWidth = Math.min(window.innerWidth, window.innerHeight); // учитываем ориентацию

   if (screenWidth <= breakpoint3 && !swiperInstance3 && slider3) {
      
      swiperInstance3 = new Swiper(slider3, {
         navigation: {
            prevEl: '#be-a-partner-button-prev',
            nextEl: '#be-a-partner-button-next',
         },
         pagination: {
            el: '#be-a-partner-pagination',
            clickable: true,
         },
         centeredSlides: true,
         autoHeight: false,
         slidesPerView: 1.14,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 20,
         loop: true,
         speed: 1000,
         effect: 'slide',
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
      });
   }

   if (screenWidth > breakpoint3 && swiperInstance3) {
      swiperInstance3.destroy(true, true);
      swiperInstance3 = null;
   }
}

// запустить при загрузке
window.addEventListener('load', initOrDestroySlider3);
// пересчитывать при изменении размера или ориентации
window.addEventListener('resize', initOrDestroySlider3);
window.addEventListener('orientationchange', initOrDestroySlider3);
/* <- be-a-partner slider */

/* We are in numbers slider -> */
let swiperInstance = null;
const breakpoint = 640;
const slider = document.getElementById('we-are-in-numbers-slider');

function initOrDestroySlider() {
   const screenWidth = Math.min(window.innerWidth, window.innerHeight); // учитываем ориентацию

   if (screenWidth <= breakpoint && !swiperInstance && slider) {
      
      swiperInstance = new Swiper(slider, {
         navigation: {
            prevEl: '#we-are-in-numbers-button-prev',
            nextEl: '#we-are-in-numbers-button-next',
         },
         pagination: {
            el: '#we-are-in-numbers-pagination',
            clickable: true,
         },
         centeredSlides: true,
         autoHeight: false,
         slidesPerView: 1.14,
         slidesPerGroup: 1,
         watchOverflow: true,
         spaceBetween: 20,
         loop: true,
         speed: 1000,
         effect: 'slide',
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
      });
   }

   if (screenWidth > breakpoint && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
   }
}

// запустить при загрузке
window.addEventListener('load', initOrDestroySlider);
// пересчитывать при изменении размера или ориентации
window.addEventListener('resize', initOrDestroySlider);
window.addEventListener('orientationchange', initOrDestroySlider);
/* <- We are in numbers slider */

/* Realization slider -> */
const realizationSlider = document.getElementById('realization-slider');
if (realizationSlider) {
   new Swiper(realizationSlider, {
      navigation: {
         prevEl: [document.getElementById('d-realization-button-prev'), document.getElementById('realization-swiper-btn-prev')],
         nextEl: [document.getElementById('d-realization-button-next'), document.getElementById('realization-swiper-btn-next')],
      },
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 50,
      loop: false,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
   });
}
/* <- Realization slider */

/* Google rewiews slider -> */
const googleRewiewsSlider = document.getElementById('google-rewiews-slider');
if (googleRewiewsSlider) {
   new Swiper(googleRewiewsSlider, {
      navigation: {
         prevEl: '#google-rewiews-btn-prev',
         nextEl: '#google-rewiews-btn-next',
      },
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
      watchOverflow: true,
      spaceBetween: 23,
      loop: false,
      speed: 1000,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 1.12,
            spaceBetween: 14,
            initialSlide: 1,
            centeredSlides: true,
         },
         768: {
            slidesPerView: 1.08,
            spaceBetween: 18,
            initialSlide: 1,
            centeredSlides: true,
         },
         1025: {
            slidesPerView: 3,
            spaceBetween: 23,
            initialSlide: 0,
            centeredSlides: false,
         }
      },
   });
}
/* <- Google rewiews slider */