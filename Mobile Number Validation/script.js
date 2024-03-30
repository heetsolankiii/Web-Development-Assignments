function validateMobileNumber() {
    let mobileNumber = document.getElementById("mobileNumber").value;

    if (isValidMobileNumber(mobileNumber)) {
        document.getElementById("result").innerText = "Valid mobile number";
    } else {
        document.getElementById("result").innerText = "Invalid mobile number";
    }
}

function isValidMobileNumber(mobileNumber) {
    let mobileNumberVerifier = /^[6-9]\d{9}$/;
    return mobileNumberVerifier.test(mobileNumber);
}
