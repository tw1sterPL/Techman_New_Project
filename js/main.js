// Preloader
$(window).on("load", function () {
    setTimeout(
        function () {
            $(".first-screen").fadeOut();
        }, 3000)
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