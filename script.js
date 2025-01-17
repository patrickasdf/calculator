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
    return a / b;
}

numArray = [];
firstVal = 'empty';
secondVal = 'empty';
myVal = '';

function displayClear(){ 
    display.textContent = '';
    currentDisplay = '';
    decimalToggle();
    numArray = [];
    firstVal = 'empty';
    secondVal = 'empty';
    myVal = '';
    
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
                    if (button.classList.contains("equals")) {
                        modifier = modifier;
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
                        operate(firstVal, modifier, secondVal);
                        console.log(newNum);
                        secondVal = newNum;
                        firstVal = 'empty';
                        console.log(newNum);
                    }
                } 

                // else if (button.classList.contains("equals")) {
                //     decimalToggle();
                //     if (secondVal == 'empty') {
                //         if (numArray.includes('.') == true) {
                //             myVal = numArray.join('');
                //             secondVal = parseFloat(parseFloat(myVal).toFixed(2));
                //         } else if (numArray.includes('.') == false) {
                //             myVal = numArray.join('');
                //             secondVal = parseInt(myVal);
                //         }
                //         numArray = [];
                //         myVal= '';
                //         operate(firstVal, modifier, secondVal);
                //         secondVal = newNum;
                //         firstVal = 'empty';
                //         console.log(newNum);
                //     }
                //     console.log(firstVal + " " + modifier + " " + secondVal)
                //     operate(firstVal, modifier, secondVal);
                // }          
                
                else if (button.classList.contains("digit")) {
                    myVal = numArray.push(button.textContent);
                    display.textContent = currentDisplay + button.textContent;
                    currentDisplay = display.textContent; 
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
    switch (operator) {
        case "+": 
            display.textContent = add(firstNum, secondNum);
            currentDisplay = display.textContent;
            return newNum = add(firstNum, secondNum);
        case "-": return display.textContent = subtract(firstNum, secondNum);
        case "*": return display.textContent = multiply(firstNum, secondNum);
        case "/": return display.textContent = divide(firstNum, secondNum);
    };
}
