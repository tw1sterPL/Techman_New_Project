// Preloader
$(window).on("load", function () {
    $(".first-screen").fadeOut();
});
// Menu hamburger
$(".burger").on("click", function () {
    $(".fas,aside,.burger").toggleClass("show");
});
["PCV WINDOWS", "DOORS", "BLINDS", "GARAGE PITS"],
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
//Typed Text Eng
$(function () {
    new Typed('#typed-eng', {
        typeSpeed: 100,
        strings: ["PCV WINDOWS", "DOORS", "BLINDS", "GARAGE GATES"],
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
$('.close-button').on('click', function () {
    $('.go-maps').removeClass('on');
});
// Carousel Glide

var glide = new Glide('.glide', {
    type: 'carousel',
    //   focusAt: 'center',
    autoplay: 2000,
    hoverpause: false,
    breakpoints: {
        415: {
            perView: 2
        },
        1000: {
            perView: 3
        },
        2000: {
            perView: 4
        }
    },
    animationDuration: 2000
})

glide.mount()

var glide = new Glide('.glide_alu', {
    type: 'carousel',
    autoplay: 2000,
    hoverpause: false,
    breakpoints: {
        415: {
            perView: 2
        },
        2000: {
            perView: 2
        }
    },
    animationDuration: 2500
})

glide.mount()