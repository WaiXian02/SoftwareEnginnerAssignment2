// calculator.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    
    // Define calculator functions
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
});