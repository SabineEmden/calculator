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