import { appendToDisplay, clearDisplay, calculate } from './calculator';

describe('Calculator', () => {
    let mockDisplay;

    beforeEach(() => {
        mockDisplay = { value: '' };
    });

    test('appendToDisplay adds value', () => {
        appendToDisplay('7', mockDisplay);
        appendToDisplay('+', mockDisplay);
        appendToDisplay('3', mockDisplay);
        expect(mockDisplay.value).toBe('7+3');
    });

    test('clearDisplay clears value', () => {
        mockDisplay.value = '123';
        clearDisplay(mockDisplay);
        expect(mockDisplay.value).toBe('');
    });

    test('calculate evaluates expression', () => {
        mockDisplay.value = '4*5';
        calculate(mockDisplay);
        expect(mockDisplay.value).toBe(20);
    });

    test('calculate handles error', () => {
        mockDisplay.value = '4**';
        calculate(mockDisplay);
        expect(mockDisplay.value).toBe('Error');
    });
});
