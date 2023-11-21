let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");

// Function to validate range and update the fill color on slider
function validateRange() {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    if (minPrice > maxPrice) {
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice = tempValue;
    }

    const minPercentage = (minPrice / 26000) * 100;
    const maxPercentage = (maxPrice / 26000) * 100;

    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%";

}

const inputElements = document.querySelectorAll("input[type=range]");

// Add an event listener to each input element
inputElements.forEach((element) => {
    element.addEventListener("input", validateRange);
});

// Initial call to validateRange
validateRange();