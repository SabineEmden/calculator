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
function operate(numA, numB, operator) {
  if (numA === "NOPE!") {
    return numA;
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
