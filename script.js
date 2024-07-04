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
  // IF variable numA stores an error message,
  // THEN update display with the error message, don't do anything else
  if (typeof numA === "string") {
    updateDisplay(numA);
  } else {
    // IF no second number has been entered,
    // THEN use the first number as the second
    if (numB === null) {
      numB = numA;
    }
    // CALL the function that corresponds with the math operator
    if (operator === "addition") {
      numA = add(numA, numB);
    } else if (operator === "subtraction") {
      numA = subtract(numA, numB);
    } else if (operator === "multiplication") {
      numA = multiply(numA, numB);
    } else if (operator === "division") {
      numA = divide(numA, numB);
    } else {
      numA = "ERROR";
    }
    // CHECK length of result and round if necessary
    let result;
    if (typeof numA === "number" && numA.toString().length > 12) {
      result = numA.toPrecision(12);
    } else {
      result = numA;
    }
    updateDisplay(result);
  }
}

function updateDisplay(output) {
  const display = document.querySelector("#display");
  display.textContent = output;
}

// store digits entered by user
let input = "";

function storeNumber() {
  number = parseFloat(input);
  if (numA === null) {
    numA = number;
  } else {
    numB = number;
  }
  input = "";
}

// event listeners for number keys
const digitKeys = document.querySelectorAll(".digit");
digitKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (input.length > 12) {
      input = "    TOO LONG!";
    } else {
      input += key.textContent;
    }
    updateDisplay(input);
  });
});

// event listeners for operator keys
const operatorKeys = document.querySelectorAll(".operator");
let toggle = 0;
operatorKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (input.length > 0) {
      storeNumber();
    }
    if (toggle === 1) {
      operate();
    }
    operator = key.id;
    toggle = 1;
  });
});

// event listener for "equals" key
const equalsKey = document.querySelector("#equals");
equalsKey.addEventListener("click", () => {
  if (input.length > 0) {
    storeNumber();
  }
  if (numA === null || operator === null) {
    return;
  } else {
    operate();
    toggle = 0;
  }
});

// event listener for "clear" key
const clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", () => {
  numA = null;
  numB = null;
  operator = null;
  toggle = 0;
  input = "";
  updateDisplay("0");
});
