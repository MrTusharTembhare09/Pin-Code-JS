const validatePinCode = require('../src/pinValidator');

test('Valid PIN Code: 400088', () => {
    expect(validatePinCode('400088')).toBe(true);
});

test('Valid PIN Code: 123456', () => {
    expect(validatePinCode('123456')).toBe(true);
});

test('Invalid PIN Code: 40008', () => {
    expect(validatePinCode('40008')).toBe(false); // Less than 6 digits
});

test('Invalid PIN Code: 4000888', () => {
    expect(validatePinCode('4000888')).toBe(false); // More than 6 digits
});

test('Invalid PIN Code: abc123', () => {
    expect(validatePinCode('abc123')).toBe(false); // Contains letters
});

test('Invalid PIN Code: 400 088', () => {
    expect(validatePinCode('400 088')).toBe(false); // Contains space
});
