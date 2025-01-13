const container = document.querySelector(".container");
document.body.appendChild(container);
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");

// Calculator functions
function add(a,b) {
    console.log(a + b);
    return a + b;
}

function subtract(a,b) {
    console.log(a - b);
    return a - b;
}

function multiply(a,b) {
    console.log(a * b);
    return a * b;
}

function divide(a,b) {
    console.log(a / b);
    return a / b;
}

//Object for digits and modifiers
const buttonOptions = { 
    digit : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    modifier : ['add', 'subtract', 'multiply', 'divide'],
    clear: ['clear'],
}

function clearDisplay(){ 
    display.textContent = 'C';
}
clear.addEventListener("click", clearDisplay);

//Initialize parameters for operate function
const firstNum = 0;
const secondNum = 0;
const operator = 0;

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case 0:
            console.log("case 0, operator 0");
            break;
        case 1: //add
            add(firstNum, secondNum);
            break;
        case 2: //subtract
            subtract(firstNum, secondNum);
            break;
        case 3: //multiply
            multiply(firstNum, secondNum);
            break;
        case 4: //divide
            divide(firstNum, secondNum);
            break;
    }
}
operate(firstNum, operator, secondNum);



console.log(buttonOptions.digit[1]);
function displayDigit() {

}