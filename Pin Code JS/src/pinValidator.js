// Validating a 6-digit Indian PIN Code (Only digits, no alphabets or special chars at start or end)
function validatePinCode(pinCode) {
    const pinCodeRegex = /^[0-9]{6}$/;
    return pinCodeRegex.test(pinCode);
}

// Exporting function for testing
module.exports = validatePinCode;


