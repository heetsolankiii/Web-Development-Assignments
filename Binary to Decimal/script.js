function convertBinaryToDecimal() {

    let binaryInput = document.getElementById("binaryInput").value;

    let decimalOutput = binaryToDecimal(binaryInput);
    
    document.getElementById("decimalOutput").innerText = `Decimal equivalent: ${decimalOutput}`;
}

function binaryToDecimal(binaryInput) {
    let decimalOutput = 0;
    let binaryDigits = binaryInput.split('').reverse();

    for (let i = 0; i < binaryDigits.length; i++) {
        decimalOutput += parseInt(binaryDigits[i]) * Math.pow(2, i);
    }

    return decimalOutput;
}