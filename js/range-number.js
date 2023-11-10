var rangeSlider = document.querySelector(".slider-range-sum");


noUiSlider.create(rangeSlider, {
    start: [200000],
    connect: [true, false],
    step: 10000,
    range: {
        min: [50000],
        max: [1000000]
    },
});


var rangeSlider2 = document.querySelector(".slider-range-srok");


noUiSlider.create(rangeSlider2, {
    start: [12],
    connect: [true, false],
    step: 1,
    range: {
        min: [10],
        max: [24]
    }
});

rangeSlider.noUiSlider.on("update", function (values, handle) {
    let value = document.getElementById('deneg-dolzen')
    let parse = values[handle] / rangeSlider2.noUiSlider.get()

    const roundedValue = parseFloat(parse).toFixed(0); // Округление до 0 десятичных знаков
    const formattedValue = parseFloat(roundedValue).toLocaleString(); // Добавление разделителей тысяч
    const result = formattedValue + " ₽"; // Добавление знака рубля

    value.innerHTML =result;

});

rangeSlider2.noUiSlider.on("update", function (values, handle) {
    let value = document.getElementById('deneg-dolzen')
    let parse = rangeSlider.noUiSlider.get() / values[handle];

    const roundedValue = parseFloat(parse).toFixed(0); // Округление до 0 десятичных знаков
    const formattedValue = parseFloat(roundedValue).toLocaleString(); // Добавление разделителей тысяч
    const result = formattedValue + " ₽"; // Добавление знака рубля

    value.innerHTML =result;
});

