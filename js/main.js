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
    $(".google-maps").toggleClass("on");
});