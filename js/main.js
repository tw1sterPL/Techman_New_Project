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