const container = document.querySelector(".container");
document.body.appendChild(container);
const display = document.querySelector(".display");
display.textContent = '';
currentDisplay = display.textContent;
const clear = document.querySelector(".clear");
const buttonPress = document.querySelectorAll(".clickme");

// Calculator functions
function add(a,b) {
    console.log(parseInt(a) + parseInt(b));
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
}

function displayClear(){ 
    display.textContent = '';
    currentDisplay = '';
    decimalToggle(); //toggle if on, do nothing if off
    //firstNUm, operator, secondNum to be cleared also
}
clear.addEventListener("click", displayClear);

//numarray
// array.push(button.textContent)
//decimals should already be disabled
//modifiers -- 
// if !firstVal {
// array.join(''));
// array.split(button.textContent) //mod pressed)
// firstVal = array[0] 
// first .contains(".") {
//      parsefloat(firstVal)
//  }
// else firstVal = parseInt(firstVal)
// numarray = [] //reset to 0 after saving firstVal
//} 
function displayPopulate() {
    numArray = [];

    buttonPress.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("disabled")) {
                if (button.classList.contains("decimal")) {
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                    button.classList.add("disabled");
                }
                else if (button.classList.contains("modifier")) {
                    completedNum = display.textContent;
                    currentDisplay = display.textContent;
                    decimalToggle();
                    display.textContent = '';
                    currentDisplay = display.textContent;
                    modifier = button.textContent;
                    console.log(modifier);
                }
                else if (button.classList.contains("equals")) {
                    completedNumSecond = display.textContent;
                    currentDisplay = display.textContent;
                    console.log("completedNum = " +completedNum);
                    console.log("completedNumSecond- " + completedNumSecond);
                    decimalToggle();
                    currentDisplay = operate(completedNum, modifier, completedNumSecond);
                    display.textContent = currentDisplay;
                }
                else {
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                }
            }
        })
    })
}
displayPopulate();
//each click adds to end of array, check for mod or equals and run operation

function decimalToggle() { //turn off decimal for modifiers, equals, clear
    if (!document.querySelector(".disabled")) { //do nothing
    }
    else { //decimal is disabled so turn back on
        const disabledActive = document.body.querySelector(".disabled");
        disabledActive.classList.remove("disabled");
    }
}

//Initialize parameters for operate function
const firstNum = 0;
const secondNum = 0;
const operator = 0;

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+": return add(firstNum, secondNum);
        case "-": return subtract(firstNum, secondNum);
        case "*": return multiply(firstNum, secondNum);
        case "/": return divide(firstNum, secondNum);
    }
}
