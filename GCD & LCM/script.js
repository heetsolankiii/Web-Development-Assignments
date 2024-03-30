function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

let numOne = 24;
let numTwo = 36;

let gcd = findGCD(numOne, numTwo);
let lcm = findLCM(numOne, numTwo);

document.getElementById("gcd").innerHTML = `The GCD of ${numOne} and ${numTwo} is: ${gcd}`;
document.getElementById("lcm").innerHTML = `The LCM of ${numOne} and ${numTwo} is: ${lcm}`;