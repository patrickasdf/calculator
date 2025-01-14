const container = document.querySelector(".container");
document.body.appendChild(container);
const display = document.querySelector(".display");
display.textContent = '';
currentDisplay = display.textContent;
console.log("current= " + currentDisplay);
const clear = document.querySelector(".clear");
const buttonPress = document.querySelectorAll(".clickme");

// Calculator functions
function add(a,b) {
    console.log(parseInt(a) + parseInt(b));
    return (a + b);
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
    display.textContent = '';
    currentDisplay = '';
    decimalToggle(); //toggle if on, do nothing if off
    console.log("display reset to nothing" + currentDisplay);
    //firstNUm, operator, secondNum to be cleared also
}
clear.addEventListener("click", displayClear);

function displayPopulate() {
    buttonPress.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("disabled")) {
                if (button.classList.contains("decimal")) {
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                   // console.log("Display= " + currentDisplay);
                    button.classList.add("disabled");
                }
                else if (button.classList.contains("modifier")) {
                    completedNum = display.textContent;
                    currentDisplay = display.textContent;
                   // console.log("Display= " + currentDisplay);
                   // console.log("completedNum = " +completedNum);
                    decimalToggle();
                    display.textContent = '';
                    currentDisplay = display.textContent;
                    modifier = button.textContent;
                    console.log(modifier);
                }
                else if (button.classList.contains("equals")) {
                    completedNumSecond = display.textContent;
                    currentDisplay = display.textContent;
                    console.log("Display= " + currentDisplay);
                    console.log("completedNum = " +completedNum);
                    console.log("completedNumSecond- " + completedNumSecond);
                    decimalToggle();
                    display.textContent = operate(completedNum, modifier, completedNumSecond);
                    currentDisplay = display.textContent;
                }
                else {
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                    console.log("Display= " + currentDisplay);
                }
            }
        })
    })
}
displayPopulate();

function decimalToggle() { //turn off decimal for modifiers, equals, clear
    if (!document.querySelector(".disabled")) {
        console.log("no disabled");
    }
    else if (document.querySelector(".disabled")) {
        const disabledActive = document.body.querySelector(".disabled");
        disabledActive.classList.remove("disabled");
        console.log("disabled active");
    }
}

//Initialize parameters for operate function
const firstNum = 0;
const secondNum = 0;
const operator = 0;

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case 0:
            console.log("case 0, operator 0");
            break;
        case '+': //add
            add(firstNum, secondNum);
            break;
        case "-": //subtract
            subtract(firstNum, secondNum);
            break;
        case "*": //multiply
            multiply(firstNum, secondNum);
            break;
        case "/": //divide
            divide(firstNum, secondNum);
            break;
    }
}
operate(firstNum, operator, secondNum);
