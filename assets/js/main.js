(function($){
    "use strict";

    // testimonial
    var swiper = new Swiper(".tc-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },

        navigation: {
          nextEl: ".tc-test-button-next",
          prevEl: ".tc-test-button-prev",
        },
      });

    // text slider
    var swiper = new Swiper(".tc-brand-top-active", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freemode:true,
      centeredSlide:true,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },

    });

    // text slider
    var swiper = new Swiper(".tc-brand-bottom-active", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freemode:true,
      centeredSlide:true,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },

    });

    // team slider
    var swiper = new Swiper(".tc-team-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },

      navigation: {
        nextEl: ".tc-team-button-next",
        prevEl: ".tc-team-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });

    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });


      const title = document.querySelector('.tc-hero-title');
      const text = title.textContent;
      const heroText = text.split("");
  
      let letter = "";
  
      heroText.forEach(function(e){
        letter = letter + `<span>${e}</span>`;
      })
console.log(letter);



    gsap.from('tc-hero-title, span',{
      y:200,
      opacity:0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3
    })


})(jQuery);