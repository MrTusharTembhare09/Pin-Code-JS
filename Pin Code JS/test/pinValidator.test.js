const validatePinCode = require('../src/pinValidator');

test('Valid PIN Code: 400088', () => {
    expect(validatePinCode('400088')).toBe(true);
});

test('Valid PIN Code: 400 088', () => {
    expect(validatePinCode('400 088')).toBe(true); // Now should be valid
});

test('Invalid PIN Code: 40 0088', () => {
    expect(validatePinCode('40 0088')).toBe(false); // Space at wrong place
});

test('Invalid PIN Code: 400  088', () => {
    expect(validatePinCode('400  088')).toBe(false); // Two spaces
});

test('Invalid PIN Code: 400088B', () => {
    expect(validatePinCode('400088B')).toBe(false); // Ends with alphabet
});

test('Invalid PIN Code: A400088', () => {
    expect(validatePinCode('A400088')).toBe(false); // Starts with alphabet
});

test('Invalid PIN Code: 400-088', () => {
    expect(validatePinCode('400-088')).toBe(false); // Dash instead of space
});

