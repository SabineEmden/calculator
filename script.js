// functions for basic math operators
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "NOPE!";
  } else {
    return a / b;
  }
}

// variables for each part of the calculator operation
let numA = null;
let numB = null;
let operator = null;

// function to call functions for math operators
function operate() {
  if (isNaN(numA) || isNaN(numB)) {
    return "ERROR";
  } else if (numB === null) {
    numB = numA;
  }

  if (operator === "addition") {
    return add(numA, numB);
  } else if (operator === "subtraction") {
    return subtract(numA, numB);
  } else if (operator === "multiplication") {
    return multiply(numA, numB);
  } else if (operator === "division") {
    return divide(numA, numB);
  } else {
    return "ERROR";
  }
}

// variable to store digits entered by user
let input = "";

function updateDisplay(string) {
  const display = document.querySelector("#display");
  display.textContent = string;
}

function storeNumber() {
  number = parseFloat(input);
  if (numA === null) {
    numA = number;
  } else {
    numB = number;
  }
  input = "";
}

const digitKeys = document.querySelectorAll(".digit");

digitKeys.forEach((key) => {
  key.addEventListener("click", () => {
    input += key.textContent;
    updateDisplay(input);
  });
});

const operatorKeys = document.querySelectorAll(".operator");

let toggle = 0;

operatorKeys.forEach((key) => {
  key.addEventListener("click", () => {
    storeNumber(input);
    if (toggle === 1) {
      numA = operate();
      updateDisplay(numA);
    }
    operator = key.id;
    toggle = 1;
  });
});
