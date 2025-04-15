// calculator.js
function appendToDisplay(value, display) {
    display.value += value;
}

function clearDisplay(display) {
    display.value = '';
}

function calculate(display) {
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

module.exports = {
    appendToDisplay,
    clearDisplay,
    calculate
};