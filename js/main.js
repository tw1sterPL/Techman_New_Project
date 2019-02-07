// Preloader by jQuery
$(window).on("load",function() {
    setTimeout(
        function() {
            $(".first-screen").fadeOut();
        }, 3000)
});
// Menu hamburger by jQuery
$(".burger").on("click", function () {
    $(".fas,aside,.burger").toggleClass("show");
});