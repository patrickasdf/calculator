const container = document.querySelector(".container");
document.body.appendChild(container);
const display = document.querySelector(".display");
display.textContent = '';
currentDisplay = display.textContent;
const clear = document.querySelector(".clear");
const buttonPress = document.querySelectorAll(".clickme");

// Calculator functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        return "Can't divide by 0";
    }
    return a / b;
}

numArray = [];
firstVal = 'empty';
secondVal = 'empty';
myVal = '';
newNum = '';
modifier = 'empty';

function displayClear(){ 
    display.textContent = '';
    currentDisplay = '';
    decimalToggle();
    numArray = [];
    firstVal = 'empty';
    secondVal = 'empty';
    myVal = '';
    modifier = 'empty';
    newNum = '';
    
}
clear.addEventListener("click", displayClear);

function displayPopulate() {
    buttonPress.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("disabled")) {
                if (button.classList.contains("decimal")) {
                    myVal = numArray.push(button.textContent);
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                    button.classList.add("disabled");
                } 

                else if (button.classList.contains("modifier")) {
                    console.log("1st " + firstVal + " 2nd " + secondVal + " mod " + modifier);
                    if ((isNaN(firstVal)) && firstVal !== 'empty') {
                        firstVal = 'empty';
                    }
                    else if ((isNaN(secondVal)) && secondVal !== 'empty') {
                        secondVal = 'empty';
                    }
                    else modifier = button.textContent;
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent;
                    decimalToggle();
                    if (firstVal == 'empty') {
                        if (numArray.includes('.') == true) {
                            myVal = numArray.join('');
                            firstVal = parseFloat(parseFloat(myVal).toFixed(2));
                        } else if (numArray.includes('.') == false) {
                            myVal = numArray.join('');
                            firstVal = parseInt(myVal);
                        }
                        if (secondVal !== 'empty') {
                            operate(firstVal, modifier, secondVal);
                            if (button.classList.contains("equals")) {
                                modifier = 'empty';
                            } else
                            display.textContent = currentDisplay + button.textContent;
                            currentDisplay = display.textContent;
                            secondVal = 'empty';
                            firstVal = newNum;
                            console.log(newNum);
                        }
                        numArray = [];
                        myVal= '';
                    }
                    else if (secondVal == 'empty') {
                        if (numArray.includes('.') == true) {
                            myVal = numArray.join('');
                            secondVal = parseFloat(parseFloat(myVal).toFixed(2));
                        } else if (numArray.includes('.') == false) {
                            myVal = numArray.join('');
                            secondVal = parseInt(myVal);
                        }
                        numArray = [];
                        myVal= '';
                        if (firstVal !== 'empty' && secondVal !== 'empty') {
                            operate(firstVal, modifier, secondVal);
                        }
                        display.textContent = currentDisplay + button.textContent;
                        currentDisplay = display.textContent;
                        console.log(newNum);
                        secondVal = newNum;
                        newNum = '';
                        firstVal = 'empty';
                    }
                }  

                else if (button.classList.contains("equals")) {
                    decimalToggle();
                    if (firstVal == 'empty') {
                        if (numArray.includes('.') == true) {
                            myVal = numArray.join('');
                            firstVal = parseFloat(parseFloat(myVal).toFixed(2));
                        } else if (numArray.includes('.') == false) {
                            myVal = numArray.join('');
                            firstVal = parseInt(myVal);
                        }
                        if (secondVal !== 'empty') {
                            operate(firstVal, modifier, secondVal);
                            display.textContent = currentDisplay;
                            currentDisplay = display.textContent;
                            secondVal = 'empty';
                            firstVal = newNum;
                            console.log(newNum);
                        }
                        numArray = [];
                        myVal= '';
                    }
                    else if (secondVal == 'empty') {
                        if (numArray.includes('.') == true) {
                            myVal = numArray.join('');
                            secondVal = parseFloat(parseFloat(myVal).toFixed(2));
                        } else if (numArray.includes('.') == false) {
                            myVal = numArray.join('');
                            secondVal = parseInt(myVal);
                        }
                        numArray = [];
                        myVal= '';
                        if (firstVal !== 'empty' && secondVal !== 'empty') {
                            operate(firstVal, modifier, secondVal);
                        }
                        display.textContent = currentDisplay;
                        currentDisplay = display.textContent;
                        console.log(newNum);
                        secondVal = newNum;
                        firstVal = 'empty';
                    }
                }
                
                else if (button.classList.contains("digit")) {
                    if (newNum == '') {
                        myVal = numArray.push(button.textContent);
                        display.textContent = currentDisplay + button.textContent;
                        currentDisplay = display.textContent; 
                    } else {
                        modifier = 'empty';
                        display.textContent = button.textContent;
                        currentDisplay = display.textContent;
                        myVal = numArray.push(button.textContent);
                    }
                }
                else {
                    console.log("nothing happens");
                }
            }
        })
    })
}
displayPopulate();

function decimalToggle() {
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
    if (isNaN(firstNum) || (isNaN(secondNum))) {
        return console.log("1st or 2nd is Nan");
    }
    switch (operator) {
        case "+": 
            display.textContent = add(firstNum, secondNum);
            currentDisplay = display.textContent;
            return newNum = add(firstNum, secondNum);
        case "-": 
            display.textContent = subtract(firstNum, secondNum);
            currentDisplay = display.textContent;
            return newNum = subtract(firstNum, secondNum);    
        case "*": 
            display.textContent = multiply(firstNum, secondNum);
            currentDisplay = display.textContent;
            return newNum = multiply(firstNum, secondNum);    
        case "/": 
            display.textContent = divide(firstNum, secondNum);
            currentDisplay = display.textContent;
            return newNum = divide(firstNum, secondNum);
    };
}
