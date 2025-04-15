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
        expect(display.value).toBe(4);
        
        display.value = '10/2';
        calculate(display);
        expect(display.value).toBe(5);
    });
    
    test('calculate shows Error for invalid expressions', () => {
        display.value = '2+';
        calculate(display);
        expect(display.value).toBe('Error');
    });
});