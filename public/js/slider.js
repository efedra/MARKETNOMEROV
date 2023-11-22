$('.goods__slider[data-goods="1"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$('.goods__slider[data-goods="2"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$('.goods__slider[data-goods="3"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.arrows__left_goods-main-left').click(function () {
    $('.goods__slider').slick('slickPrev');
});
$('.arrows__right_goods-main-right').click(function () {
    $('.goods__slider').slick('slickNext');
});


$('.slider-tarif[data-tarif="1"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$('.slider-tarif[data-tarif="2"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$('.slider-tarif[data-tarif="3"]').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
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
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.arrows-uslugi-left').click(function () {
    $('.uslugi__body').slick('slickPrev');
});

// При клике на стрелку вправо
$('.arrows-uslugi-right').click(function () {
    $('.uslugi__body').slick('slickNext');
});

$('.tarif-grid').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.arrows-tarif-left').click(function () {
    $('.tarif-grid').slick('slickPrev');
});

// При клике на стрелку вправо
$('.arrows-tarif-right').click(function () {
    $('.tarif-grid').slick('slickNext');
});


$('.reviews__margin').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
});

$('.arrows-reviews__left').click(function () {
    $('.reviews__margin').slick('slickPrev');
});

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
                splide.go('-1'); // Переход на предыдущий слайд
            });
        }


        if (nextButton) {
            nextButton.addEventListener('click', function () {
                splide.go('+1'); // Переход на следующий слайд
            });
        }

        //ТОВАРЫ
        var prevButtonGoods = document.querySelector('.arrows__left_goods-main-left');
        var nextButtonGoods = document.querySelector('.arrows__right_goods-main-right');

        if (prevButtonGoods) {
            prevButtonGoods.addEventListener('click', function () {
                splide.go('-1'); // Переход на предыдущий слайд
            });
        }


        if (nextButtonGoods) {
            nextButtonGoods.addEventListener('click', function () {
                splide.go('+1'); // Переход на следующий слайд
            });
        }

        //О КОМПАНИИ ОРАНЖЕВЫЕ СТРЕЛКИ
        var prevButtonUslugi = document.querySelector('.arrows__left_orange');
        var nextButtonUslugi = document.querySelector('.arrows__right_orange');

        if (prevButtonUslugi) {
            prevButtonUslugi.addEventListener('click', function () {
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
