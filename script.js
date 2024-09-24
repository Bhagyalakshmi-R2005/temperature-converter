const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector(".C");
const F = document.querySelector(".F");

const swap = () => {
    if (C.innerHTML === 'C') {
        C.innerHTML = 'F';
        F.innerHTML = 'C';
        converter.placeholder = "Temperature in °F";
    } else {
        F.innerHTML = 'F';
        C.innerHTML = 'C';
        converter.placeholder = "Temperature in °C";
    }
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
};

const convert = () => {
    const inputValue = converter.value.trim();
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(inputValue)) {
        result.style.color = "black";
        if (C.innerHTML === 'C') {
            let value = (inputValue * 1.8) + 32;
            result.innerHTML = `${inputValue}°C is equal to ${value.toFixed(2)}°F`;
        } else {
            let value = (inputValue - 32) / 1.8;
            result.innerHTML = `${inputValue}°F is equal to ${value.toFixed(2)}°C`;
        }
    } else if (inputValue === '') {
        result.style.color = "#993300";
        result.innerHTML = 'Enter some number';
    } else {
        result.style.color = "#993300";
        result.innerHTML = 'Enter only numbers!!!';
    }
};

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
