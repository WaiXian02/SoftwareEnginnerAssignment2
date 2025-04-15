// calculator.js
export function appendToDisplay(value, display) {
    display.value += value;
}

export function clearDisplay(display) {
    display.value = '';
}

export function calculate(display) {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}
