const { appendToDisplay, clearDisplay, calculate } = require('./calculator.js');

describe('Calculator Functions', () => {
    let display;
    
    beforeEach(() => {
        display = { value: '' };
    });
    
    test('appendToDisplay adds characters', () => {
        appendToDisplay('1', display);
        expect(display.value).toBe('1');
        
        appendToDisplay('+', display);
        expect(display.value).toBe('1+');
    });
    
    test('clearDisplay resets display', () => {
        display.value = '123';
        clearDisplay(display);
        expect(display.value).toBe('');
    });
    
    test('calculate evaluates expressions correctly', () => {
        display.value = '2+2';
        calculate(display);
        expect(display.value).toBe('4');
        
        display.value = '10/2';
        calculate(display);
        expect(display.value).toBe('5');
    });
    
    test('calculate shows Error for invalid expressions', () => {
        display.value = '2+';
        calculate(display);
        expect(display.value).toBe('Error');
    });
    
    test('calculate handles decimal numbers', () => {
        display.value = '5.5+2.5';
        calculate(display);
        expect(display.value).toBe(8);
    });

    test('calculate handles long expressions', () => {
        display.value = '1+2+3+4+5';
        calculate(display);
        expect(display.value).toBe(15);
    });

    test('calculate handles negative numbers', () => {
        display.value = '5-10';
        calculate(display);
        expect(display.value).toBe(-5);
    });

    test('appendToDisplay handles multiple inputs in sequence', () => {
        ['1', '+', '2', '*', '3'].forEach(char => appendToDisplay(char, display));
        expect(display.value).toBe('1+2*3');
    });

    test('calculate respects parentheses and order of operations', () => {
        display.value = '(2 + 3) * 4';
        calculate(display);
        expect(display.value).toBe(20); 
    });
    
    test('calculate handles invalid characters', () => {
        display.value = '2+abc';
        calculate(display);
        expect(display.value).toBe('Error');
    });

});
