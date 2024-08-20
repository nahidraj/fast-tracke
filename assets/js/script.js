$(function () {
  "use strict";

  // gallery popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // offcanvas js
  $(".offcanvas-menu-btn").on("click", function () {
    $(".menu_overlay").addClass("active_menu_overlay");
    $(".menu_main_area").addClass("active_menu_main_area");
  });

  $(".close_offcanvas, .menu_overlay").on("click", function () {
    $(".menu_overlay").removeClass("active_menu_overlay");
    $(".menu_main_area").removeClass("active_menu_main_area");
  });

  // video js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  $('.courses-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.course-slider-prev').on('click', function () {
    $('.courses-slider').slick('slickPrev');
  });

  $('.course-slider-next').on('click', function () {
    $('.courses-slider').slick('slickNext');
  });

  // banner slider js
  $(".banner-slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // Clients review slider js
  $(".clients-review-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    prevArrow: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow-left icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>`,
    nextArrow: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon arrow arrow-right icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  // Fixed menu js start
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");

    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // back to top js
  let btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // Animation on scroll
  AOS.init({
    once: true,
  });
  // // Mobile menu js start

  // // Mobile menu js start
  // $(".mobile-topbar .bars").on("click", function () {
  //   $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  //   return false;
  // });

  // $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
  //   $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  // });

  // $(".sub-mobile-menu ul").hide();
  // $(".sub-mobile-menu a").on("click", function () {
  //   $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
  //   $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  // });

});