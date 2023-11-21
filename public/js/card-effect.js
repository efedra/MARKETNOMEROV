let swiper = new Swiper('.Slider-container',{
    effect: 'cards',
    grabCursor: true,
    centerdSlides: true,
    loop: true,
})

const leftArrow = document.querySelector('.arrows__left_orange');
const rightArrow = document.querySelector('.arrows__right_orange');

// Добавляем обработчики событий для стрелок
leftArrow.addEventListener('click', () => {
    swiper.slidePrev(); // Перелистываем на предыдущий слайд
});

rightArrow.addEventListener('click', () => {
    swiper.slideNext(); // Перелистываем на следующий слайд
});