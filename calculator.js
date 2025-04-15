// calculator.js

// Get the display element once when the script loads
const display = document.getElementById('display');

// Define the functions and attach them to the window object
window.appendToDisplay = function(value) {
    display.value += value;
};

window.clearDisplay = function() {
    display.value = '';
};

window.calculate = function() {
    try {
        // Replace × with * for proper evaluation
        const expression = display.value.replace(/×/g, '*');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
};