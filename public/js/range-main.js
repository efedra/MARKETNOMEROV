var Slider = document.querySelector(".range-main");


noUiSlider.create(Slider, {
    start: [3000, 10000],
    connect: true,
    step: 10,
    range: {
        min: [0],
        max: [26000]
    },
});