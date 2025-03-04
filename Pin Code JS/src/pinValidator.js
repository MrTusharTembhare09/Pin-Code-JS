// Validating a 6-digit Indian PIN Code
function validatePinCode(pinCode) {
    const pinCodeRegex = /^[0-9]{6}$/;
    return pinCodeRegex.test(pinCode);
}

// Exporting function for testing
module.exports = validatePinCode;
