(function($){
    "use strict";

    // // mobile menu 
    var tdMenuWrap = $('.td-mobile-menu-active > ul').clone();
    var tdSideMenu = $('.td-offcanvas-menu nav');
    tdSideMenu.append(tdMenuWrap);
    if ($(tdSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
      $(tdSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="td-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.td-offcanvas-menu nav > ul > li button.td-menu-close, .td-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      console.log(e);
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .td-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .td-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });

    

    // side bar
    $(".offcanvas-toogle").click(function(){
      $(".td-offcanvas").addClass("td-offcanvas-open");
      $(".td-offcanvas-overlay").addClass("td-offcanvas-overlay-open");
    });
    $(".td-offcanvas-close-toggle,.td-offcanvas-overlay").click(function(){
      $(".td-offcanvas").removeClass("td-offcanvas-open");
      $(".td-offcanvas-overlay").removeClass("td-offcanvas-overlay-open");
    });

    // data background
    $("[data-background]").each(function(){
      $(this).css("background-image", "url("+ $(this).attr("data-background")+ " )");
    });

    // data background color
    $("[data-bg-color]").each(function(){
      $(this).css("background-color",  $(this).attr("data-bg-color"));
    });
       // data background color
       $("[data-color]").each(function(){
        $(this).css("color",  $(this).attr("data-color"));
      });

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

    // testimonial
    var swiper = new Swiper(".tc-test-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
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

      navigation: {
        nextEl: ".tc-test-5-right",
        prevEl: ".tc-test-5-left",
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

    // text slider
    var swiper = new Swiper(".tc-brand-text-active", {
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

    // testimonial slider
    var swiper_thumb = new Swiper(".tc-testimonial-thumb-active", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper_content = new Swiper(".tc-testimonial-content-active", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-testimonial-next",
        prevEl: ".swiper-testimonial-prev",
      },
      thumbs: {
        swiper: swiper_thumb,
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

    // project slider
    var swiper = new Swiper(".tc-project-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },

      navigation: {
        nextEl: ".tc-project-button-next",
        prevEl: ".tc-project-button-prev",
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


})(jQuery);