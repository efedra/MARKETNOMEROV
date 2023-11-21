var priceSlider = document.querySelector('.slider-range-price');
var minPrice = document.querySelector('.price-filter__input-min')
var maxPrice = document.querySelector('.price-filter__input-max')
let inputs = [minPrice,maxPrice];

    noUiSlider.create(priceSlider, {
    start: [1000, 5000],
    connect: true,
    step: 1,
    range: {
        min: [0],
        max: [6000]
    }
});

priceSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

inputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        priceSlider.noUiSlider.setHandle(handle, this.value);
    });
});

//MOBILE


var priceSliderMobile = document.querySelector('.slider-range-price-mobile');
var minPriceMobile = document.querySelector('.price-filter__input-min-mobile')
var maxPriceMobile = document.querySelector('.price-filter__input-max-mobile')
let inputsMobile = [minPriceMobile,maxPriceMobile];

noUiSlider.create(priceSliderMobile, {
    start: [1000, 5000],
    connect: true,
    step: 1,
    range: {
        min: [0],
        max: [6000]
    }
});

priceSliderMobile.noUiSlider.on('update', function (values, handle) {
    inputsMobile[handle].value = Math.round(values[handle]);
});

inputsMobile.forEach(function (input, handle) {
    input.addEventListener('change', function () {
        priceSliderMobile.noUiSlider.setHandle(handle, this.value);
    });
});