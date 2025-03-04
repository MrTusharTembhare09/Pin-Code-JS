// Validating a 6-digit Indian PIN Code (Allows optional space in the middle)
function validatePinCode(pinCode) {
    const pinCodeRegex = /^[0-9]{3} ?[0-9]{3}$/;
    return pinCodeRegex.test(pinCode);
}

// Exporting function for testing
module.exports = validatePinCode;


