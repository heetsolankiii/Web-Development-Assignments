function pythagoras() {
    let c = document.getElementById("hypotenuse").value;
    let a = document.getElementById("base").value;
    let b = document.getElementById("height").value;
    
    let squareOfC = Math.pow(c, 2);
    let squareOfA = Math.pow(a, 2);
    let squareOfB = Math.pow(b, 2);
    
    if(a === "" || b === "" || c === "") {
        alert("Please enter valid numbers");
    }
    else if(squareOfC  == (squareOfA + squareOfB)) {
        document.getElementById("result").innerHTML=`It is a pythagoras triplet. i.e. c² = a² + b²`;
    }
    else {
        document.getElementById("result").innerHTML=`It is not a pythagoras triplet. i.e. c² ≠ a² + b²`;
    }

}