// CALCULATOR
let aNumber;
let typeAgain;
let numberArr = [];
let sumResult = 0;
let mulResult = 0;
let divResult = 0;
let subResult = 0;

function sumOp(arr) {
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}

function multOp(arr) {
    let result = 1;
    for (i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result
}

function divOp(arr) {
    let result = arr[0];
    for (i = 1; i < arr.length; i++) {
        result /= arr[i];
    }
    return result
}

function subsOp(arr) {
    let result = arr[0];
    for (i = 1; i < arr.length; i++) {
        result = result - arr[i];
    }
    return result
}


do {

    //Enter numbers
    do {

        do {
            aNumber = Number(window.prompt("Type a number.", "number"));
            if (isNaN(aNumber)) {
                alert('Character is not valid. Enter a Number.')
            } else {
                numberArr.push(aNumber);
            }

        } while (isNaN(aNumber)); // Repetir hasta que se introduzca valor correcto


        do {
            typeAgain = window.prompt("Continue? y/n", "y");
            typeAgain = typeAgain.toUpperCase();
        } while (typeAgain != 'N' && typeAgain != 'Y')

    } while (typeAgain != 'N')

    
    // Calculate everything
    sumResult = sumOp(numberArr);
    mulResult = multOp(numberArr);
    divResult = divOp(numberArr);
    subResult = subsOp(numberArr);

    // Enter result in an array
    const resultArr = [sumResult, mulResult, divResult, subResult]
    
    // Fixing number of decimals
    const decimalNumber = 3;
        for (i=0; i < resultArr.length; i++){
            resultArr[i] = parseFloat(resultArr[i].toFixed(decimalNumber));
        }

    //Show results
    
    alert(`Sum = ${resultArr[0]}. Multiplication = ${resultArr[1]}. Division = ${resultArr[2]}. Substraction = ${resultArr[3]}.`); // This should be done with for loop in case we need several kind of operations

    //Ask for continue/exit
    exitCalculator = confirm("New numbers?");

    //Restart variables
    numberArr = [];
    sumResult = 0;
    mulResult = 0;
    subResult = 0;
    divResult = 0;
} while (exitCalculator);