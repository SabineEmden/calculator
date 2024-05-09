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
  if (b === 0) return "NOPE!";
  return a / b;
}

// variables for each part of the calculator operation
let numA;
let numB;
let operator;
let result;

// function to call functions for math operators
function operate(numA, numB, operator) {
  if (operator === "+") {
    result = add(numA, numB);
  } else if (operator === "-") {
    result = subtract(numA, numB);
  } else if (operator === "*") {
    result = multiply(numA, numB);
  } else if (operator === "/") {
    result = divide(numA, numB);
  } else {
    result = "ERROR";
  }
  return result;
} 