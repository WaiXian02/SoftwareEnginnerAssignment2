// Pure functions for testing
function appendToDisplayPure(value, displayObj) {
    displayObj.value += value;
}

function clearDisplayPure(displayObj) {
    displayObj.value = '';
}

function calculatePure(displayObj) {
    try {
        const expression = displayObj.value.replace(/×/g, '*');
        displayObj.value = eval(expression);
    } catch (error) {
        displayObj.value = 'Error';
    }
}

// DOM functions
function setupCalculator() {
    const display = document.getElementById('display');
    
    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            const expression = display.value.replace(/×/g, '*');
            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    // Button event handlers
    document.querySelectorAll('button[data-value]').forEach(button => {
        button.addEventListener('click', () => {
            appendToDisplay(button.dataset.value);
        });
    });
    
    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('equals').addEventListener('click', calculate);
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (/[0-9+\-*/.]/.test(e.key)) {
            appendToDisplay(e.key);
        } else if (e.key === 'Enter' || e.key === '=') {
            calculate();
        } else if (e.key === 'Escape') {
            clearDisplay();
        } else if (e.key === 'Backspace') {
            backspace();
        }
    });
}

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupCalculator);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        appendToDisplay: appendToDisplayPure,
        clearDisplay: clearDisplayPure,
        calculate: calculatePure
    };
}
