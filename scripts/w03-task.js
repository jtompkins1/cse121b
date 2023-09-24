/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;

}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2) {
    return num1 - num2;
}


const subtractNumbers = function() {
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (fac1, fac2) => fac1 * fac2;
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;

}

function divideNumbers() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const yearElement = document.querySelector("#year");
yearElement.textContent = currentYear;
// or this... document.getElementByID("year").value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById("array");
arrayElement.textContent = array;

/* Output Odds Only Array */
function odd(number){
    if (number % 2 === 1){
        return true;
    }

}
const arrayOdd = array.filter(odd);
const oddElement = document.getElementById("odds");
oddElement.textContent = arrayOdd;

/* Output Evens Only Array */
function even(number){
    if (number % 2 === 0){
        return true;
    }
}
const arrayEven = array.filter(even);
const evenElement = document.getElementById("evens");
evenElement.textContent = arrayEven;

// document.querySelector("#evens").innerHTML = array.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */
const sum = array.reduce((total, number) => total + number);
const sumElement = document.getElementById("sumOfArray");
sumElement.textContent = sum;

/* Output Multiplied by 2 Array */
const multArray = array.map((number) => number * 2);
const multElement = document.getElementById("multiplied");
multElement.textContent = multArray;

/* Output Sum of Multiplied by 2 Array */
const sumMult = multArray.reduce((total2, number2) => total2 + number2);
const sumMultElement = document.getElementById("sumOfMultiplied");
sumMultElement.textContent = sumMult;
