let value1 = 0; // Initialize value1 with 0
let value2 = 0; // Initialize value2 with 0
let result; // Declare result variable to store the operation outcome

// Prompt the user to select a mathematical operation
let operationChoice = prompt("Välj en operation att utföra: +, -, *, /, %, ^.");

// Check if the chosen operation is a valid one
if (operationChoice !== "+" && operationChoice !== "-" &&
    operationChoice !== "*" && operationChoice !== "/" &&
    operationChoice !== "%" && operationChoice !== "^") {
    // If not a valid operation, display an alert
    alert("Ogiltig operation!");
} 
else {
    // If the operation is valid, prompt the user to input two values
    value1 = parseFloat(prompt("Skriv in ditt första värde:"));
    value2 = parseFloat(prompt("Skriv in ditt andra värde:"));
    console.log(value1);
    console.log(value2);
}

// Check if the user has entered valid numbers
if (isNaN(value1) || isNaN(value2)) {
    // If either value is not a number, display an alert
    alert("Fel: Du måste mata in giltiga tal!");
}

// Define the method for addition
function additionMethod(a, b) {
    return a + b; // Return the sum of a and b
}

// Define the method for subtraction
function subtractionMethod(a, b) {
    return a - b; // Return the difference between a and b
}

// Define the method for multiplication
function multiplicationMethod(a, b) {
    return a * b; // Return the product of a and b
}

// Define the method for division with a check for division by zero
function divisionMethod(a, b) {
    if (b === 0) {
        // If b is zero, return an error message
        return "Fel: Division med noll är förbjudet!!!";
    } else {
        // Otherwise, return the quotient
        return a / b;
    }
}

// Define the method for modulus with a check for division by zero
function modulusMethod(a, b) {
    if (b === 0) {
        // If b is zero, return an error message
        return "Fel: Division med noll är förbjudet!!!";
    } else {
        // Otherwise, return the remainder of a divided by b
        return a % b;
    }
}

// Define the method for exponentiation
function powerMethod(a, b) {
    return Math.pow(a, b); // Return a raised to the power of b
}

// Use a switch statement to perform the chosen operation based on user input
switch (operationChoice) {
    case "+": // If the operation is addition
        result = additionMethod(value1, value2);
        console.log(result); // Log the result to the console
        break;
    case "-": // If the operation is subtraction
        result = subtractionMethod(value1, value2);
        console.log(result); // Log the result to the console
        break;
    case "*": // If the operation is multiplication
        result = multiplicationMethod(value1, value2);
        console.log(result); // Log the result to the console
        break;
    case "/": // If the operation is division
        result = divisionMethod(value1, value2); // Call divisionMethod
        console.log(result); // Log the result to the console
        break;
    case "%": // If the operation is modulus
        result = modulusMethod(value1, value2);
        console.log(result); // Log the result to the console
        break;
    case "^": // If the operation is exponentiation
        result = powerMethod(value1, value2);
        console.log(result); // Log the result to the console
        break;
    default:
        // If the operation is invalid, set the result as an error message
        result = "Ogiltig operation!";
}

// Display the result of the calculation in an alert
alert("Här är resultatet: " + value1 + " " + operationChoice + " " + value2 + " = " + result);

// Log the result to the console for debugging
console.log(result);
