$('.goods__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
});
$('.arrows__left_goods-main-left').click(function () {
    $('.goods__slider').slick('slickPrev');
});
$('.arrows__right_goods-main-right').click(function () {
    $('.goods__slider').slick('slickNext');
});


$('.slider-tarif').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
});

$('.close-tarif__arrow-left').click(function () {
    $('.slider-tarif').slick('slickPrev');
});

// При клике на стрелку вправо
$('.close-tarif__arrow-right').click(function () {
    $('.slider-tarif').slick('slickNext');
});


$('.uslugi__body').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
});

$('.arrows-uslugi-left').click(function () {
    $('.uslugi__body').slick('slickPrev');
});

// При клике на стрелку вправо
$('.arrows-uslugi-right').click(function () {
    $('.uslugi__body').slick('slickNext');
});


$('.reviews__margin').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
});

$('.arrows-reviews__left').click(function () {
    $('.reviews__margin').slick('slickPrev');
});

// При клике на стрелку вправо
$('.arrows-reviews__right').click(function () {
    $('.reviews__margin').slick('slickNext');
});


document.addEventListener('DOMContentLoaded', function () {

    if (document.querySelector('.splide')) {
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 1,
            arrows: false,
            drag: false,
            focus: 'center'
        }).mount();

        var prevButton = document.querySelector('.arrow-beatiful-number-left');
        var nextButton = document.querySelector('.arrow-beatiful-number-right');

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                console.log('sssssssss')
                splide.go('-1'); // Переход на предыдущий слайд
            });
        }


        if (nextButton) {
            nextButton.addEventListener('click', function () {
                splide.go('+1'); // Переход на следующий слайд
            });
        }


        var prevButtonUslugi = document.querySelector('.arrows__left_orange');
        var nextButtonUslugi = document.querySelector('.arrows__right_orange');

        if (prevButtonUslugi) {
            prevButtonUslugi.addEventListener('click', function () {
                console.log('sssssssss')
                splide.go('-1'); // Переход на предыдущий слайд
            });
        }

        if (nextButtonUslugi) {
            nextButtonUslugi.addEventListener('click', function () {
                splide.go('+1'); // Переход на следующий слайд
            });
        }

    }

});
