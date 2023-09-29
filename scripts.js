const inputTemp = document.getElementById('inputTemp');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const outputTemp = document.getElementById('outputTemp');

function convertTemperature() {
    const inputValue = parseFloat(inputTemp.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    
    let result;
    
    if (from === 'celsius' && to === 'fahrenheit') {
        result = (inputValue * 9/5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (inputValue - 32) * 5/9;
    } else if (from === 'celsius' && to === 'kelvin') {
        result = inputValue + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
        result = inputValue - 273.15;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        result = inputValue; 
    }

    outputTemp.textContent = `Result: ${result.toFixed(2)} ${toUnit.options[toUnit.selectedIndex].text}`;
}

convertBtn.addEventListener('click', convertTemperature);
