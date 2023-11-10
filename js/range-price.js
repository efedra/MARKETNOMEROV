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

// priceSlider.noUiSlider.on("update", function(values, handle) {
//     inputs[handle].value = values[handle];
//
//     /* begin Listen to keypress on the input */
//     function setSliderHandle(i, value) {
//         var r = [null, null];
//         r[i] = value;
//         priceSlider.noUiSlider.set(r);
//     }
//
//     // Listen to keydown events on the input field.
//     inputs.forEach(function(input, handle) {
//         input.addEventListener("change", function() {
//             setSliderHandle(handle, this.value);
//         });
//
//     });
//     /* end Listen to keypress on the input */
// });
