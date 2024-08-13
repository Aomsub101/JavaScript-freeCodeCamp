let num1 = 10;
let num2 = 2;

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
num1El.textContent = num1;
num2El.textContent = num2;

let sumEl = document.getElementById("sum-el")

function add() {
    let res = num1+num2;
    sumEl.textContent = "Sum: " + res;
}

function subtract() {
    let res = num1-num2;
    sumEl.textContent = "Sum: " + res;
}

function multiply() {
    let res = num1*num2;
    sumEl.textContent = "Sum: " + res;
}

function divide() {
    let res = num1/num2;
    sumEl.textContent = "Sum: " + res;
}