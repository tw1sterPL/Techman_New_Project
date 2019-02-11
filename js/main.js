// Preloader
$(window).on("load", function () {
    $(".first-screen").fadeOut();
});
// Menu hamburger
$(".burger").on("click", function () {
    $(".fas,aside,.burger").toggleClass("show");
});

//Typed Text
$(function () {
    new Typed('#typed', {
        strings: ["OKNA", "DRZWI", "ROLETY", "BRAMY", "WERTIKALE"],
        typeSpeed: 100,
        backDelay: 1500,
        loop: true,
        callback: function () {}
    });
});
// Scroll Icon Aside
$('.menu a').on('click', function () {
    const goToScroll = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToScroll).offset().top
    })
});
// Scroll Arrow
$('.arrow a').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    })
});
// Google Maps
$(".open-maps").on('click', function () {
    $(".go-maps").toggleClass('on');
});
$('.close-button').on('click', function(){
    $('.go-maps').removeClass('on');
});
// Carousel Glide

var glide = new Glide('.glide', {
    type: 'carousel',
//   focusAt: 'center',
  autoplay: 2000,
  hoverpause: false,
  breakpoints: {
    600: { perView: 2 },
    2000: { perView: 3 }
  },
  animationDuration: 1000
})

glide.mount()

var glide = new Glide('.glide_alu', {
    type: 'carousel',
  autoplay: 2000,
  hoverpause: false,
  breakpoints: {
    600: { perView: 1 },
    2000: { perView: 2 }
  },
  animationDuration: 1000
})

glide.mount()
