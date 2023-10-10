//script start

const clesiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const covertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//window load
window.addEventListener("load", () => {
    degree.value = "";
    clesiusField.innerHTML = "";

});

covertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTocelsius();
});

function convertTocelsius() {
    let inputValue = degree.value;

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        clesiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(tempType.value === "kelvin") {
        const kelvinToCelsius = inputValue -273.15;
        clesiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
        c`;
    }
}