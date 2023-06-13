$(function () {

    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext')
    });

    $('.content_Slide').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.mainContent .arrows .left').on('click', function () {
        $('.content_Slide').slick('slickPrev')
    });
    $('.mainContent .arrows .right').on('click', function () {
        $('.content_Slide').slick('slickNext')
    });
})

