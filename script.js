const container = document.querySelector(".container");
document.body.appendChild(container);

const buttonGrid = document.createElement("button");
buttonGrid.textContent = "AAAAAA";
container.appendChild(buttonGrid);

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