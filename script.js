// Function to get a valid number input from the user
function getNumberInput(message) {
  let number;
  do {
      number = parseFloat(prompt(message)); // Prompt and convert input to a number
      if (isNaN(number)) alert("Error: Please enter a valid number.");
  } while (isNaN(number)); // Repeat if not a number
  return number;
}

// Function to get a valid operation from the user
function getOperation() {
  let operation;
  do {
      operation = prompt("Which operation do you want to perform? Enter +, -, *, or /:");
      if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
          alert("Error: Please enter a valid operation (+, -, *, or /).");
      }
  } while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/");
  return operation;
}

// Get two numbers from the user with validation
let number1 = getNumberInput("Enter the first number:");
let number2 = getNumberInput("Enter the second number:");

// Get the valid operation from the user
let operation = getOperation();

// Perform the calculation using switch for better readability
let result;
switch (operation) {
  case "+":
      result = number1 + number2;
      break;
  case "-":
      result = number1 - number2;
      break;
  case "*":
      result = number1 * number2;
      break;
  case "/":
      result = number2 !== 0 ? number1 / number2 : "Error: Division by zero is not allowed!";
      break;
}

// Display the result to the user
alert("Result: " + result);
console.log("Result: " + result);
