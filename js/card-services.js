document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        direction: 'ttb', // Вертикальное направление
        height: '314px', // Высота слайдера
        width: '87px',
        pagination: false, // Отключение встроенной пагинации
        cover: true, // Изображения занимают всю ширину слайда
        gap: '2vw', // Расстояние между слайдами
        perPage: 3, // Количество видимых слайдов
        arrows: false,
        keyboard: false,  // Splide listens to key events at the document level and moves ALL carousels when arrow keys are used. Also, keyboard controls are not expected by real users.
        slideFocus: false,
        breakpoints: {
            '800': {
                perPage: 1,
                direction: 'ltr',
                pagination: true,
                height: '68vw',
                width: null,
            }
        }
    }).mount();

    const smallImages = document.querySelectorAll('.splide__slide');
    const bigImage = document.querySelector('.goods-main__big-picture img');

    smallImages.forEach(function (smallImage) {
        smallImage.addEventListener('click', function () {
            smallImage.classList.add('active')
            smallImages.forEach(el => {
                if (el !== smallImage) el.classList.remove('active')
            })
            bigImage.setAttribute('src', smallImage.querySelector('img').getAttribute('src'))
        });
    });

    let aboutGood = document.querySelector('.about-good')
    let goodReviews = document.querySelector('.good-reviews')
    let goodPrice = document.querySelector('.good-price')

    let inpts = [aboutGood, goodReviews, goodPrice]

    let aboutGoodModal = document.querySelector('.about-good-modal')
    let goodReviewsModal = document.querySelector('.good-reviews-modal')
    let goodPriceModal = document.querySelector('.good-price-modal')

    let modals = [aboutGoodModal, goodReviewsModal, goodPriceModal]

    aboutGood.addEventListener('click', () => {

    })

    function openActive(currentPage) {
        currentPage.style.display = 'grid'
        modals.forEach(el => {
            if (el !== currentPage) {
                el.style.display = 'none'
            }
        })
    }

    inpts.forEach(input => {
        input.addEventListener('click', () => {
            input.classList.add('active-title')
            inpts.forEach(el => {
                if (el !== input) el.classList.remove('active-title')
            })

            if (input === aboutGood) {
                openActive(aboutGoodModal)
            }
            if (input === goodReviews) {
                openActive(goodReviewsModal)
            }
            if (input === goodPrice) {
                openActive(goodPriceModal)
            }
        })
    })
})