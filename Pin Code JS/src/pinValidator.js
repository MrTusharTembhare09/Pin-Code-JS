// Validating a 6-digit Indian PIN Code (Must start with a digit)
function validatePinCode(pinCode) {
    const pinCodeRegex = /^[0-9][0-9]{5}$/;
    return pinCodeRegex.test(pinCode);
}

// Exporting function for testing
module.exports = validatePinCode;

