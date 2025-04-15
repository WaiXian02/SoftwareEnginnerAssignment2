// For Node.js testing environment
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Set up JSDOM to simulate browser environment
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
const { window } = dom;
const { document } = window;

// Mock the calculator functions from the browser environment
const { 
  appendToDisplay,
  clearDisplay,
  calculate 
} = require('./calculator.js');

describe('Calculator Functions', () => {
    let display;
    
    beforeEach(() => {
        // Create a mock display object
        display = { value: '' };
        
        // If you want to test with actual DOM element:
        // display = document.getElementById('display');
        // display.value = '';
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