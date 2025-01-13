const container = document.querySelector(".container");
document.body.appendChild(container);
const display = document.querySelector(".display");
display.textContent = '0';
currentDisplay = display.textContent;
console.log("current= " + currentDisplay);
const clear = document.querySelector(".clear");
const buttonDigit = document.querySelectorAll(".digit");

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

//Object for digits and modifiers (not used yet??)
const buttonOptions = { 
    digit : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    modifier : ['add', 'subtract', 'multiply', 'divide'],
    clear: ['clear'],
}

function displayClear(){ 
    display.textContent = 'C';
    currentDisplay = '';
    console.log("display reset to nothing" + currentDisplay);
    //firstNUm, operator, secondNum to be cleared also
}
clear.addEventListener("click", displayClear);

function displayPopulate() {
    buttonDigit.forEach((button) => {
        button.addEventListener("click", () => {
            display.textContent = currentDisplay + button.textContent;
            currentDisplay = display.textContent;
            console.log("Display= " + currentDisplay);
        })
    })
}
displayPopulate();
//buttonDigit.addEventListener("click", displayPopulate)

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
