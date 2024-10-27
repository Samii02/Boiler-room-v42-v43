let displayValue = "";
let hasError = false; 
let calculationLog = []; // Array to store all calculations

// Update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.value = displayValue;
}

// Clear error if exists and add a character (number/operator) to the display
function appendToDisplay(char) {
    if (hasError) {
        clearDisplay(); 
        hasError = false; 
    }
    displayValue += char;
    updateDisplay();
}

// Parse the expression into a list of numbers and operators
function parseExpression(expression) {
    return expression.match(/(\d+\.?\d*|\+|\-|\*|\/|\^|\%)/g).map(token => {
        return isNaN(token) ? token : parseFloat(token);
    });
}

// Evaluate the expression using two passes with switch cases for operator precedence
function evaluateExpression(tokens) {
    let intermediate = [];
    let i = 0;
    while (i < tokens.length) {
        switch (tokens[i]) {
            case "*":
                intermediate[intermediate.length - 1] *= tokens[i + 1];
                i += 2;
                break;
            case "/":
                if (tokens[i + 1] === 0) {
                    clearDisplay();
                    appendToDisplay("Error!");
                    hasError = true;
                    return null;
                }
                intermediate[intermediate.length - 1] /= tokens[i + 1];
                i += 2;
                break;
            case "%":
                if (tokens[i + 1] === 0) {
                    clearDisplay();
                    appendToDisplay("Error!");
                    hasError = true;
                    return null;
                }
                intermediate[intermediate.length - 1] %= tokens[i + 1];
                i += 2;
                break;
            case "^":
                intermediate[intermediate.length - 1] = Math.pow(intermediate[intermediate.length - 1], tokens[i + 1]);
                i += 2;
                break;
            default:
                intermediate.push(tokens[i]);
                i++;
        }
    }

    // Second pass for + and -
    let result = intermediate[0];
    for (let j = 1; j < intermediate.length; j += 2) {
        switch (intermediate[j]) {
            case "+":
                result += intermediate[j + 1];
                break;
            case "-":
                result -= intermediate[j + 1];
                break;
        }
    }
    return result;
}

// Calculate the result based on the display content
function calculate() {
    const tokens = parseExpression(displayValue);
    const result = evaluateExpression(tokens);
    if (result !== null) {
        // Save the equation and result to the log
        saveToLog(displayValue + " = " + result.toString());
        displayValue = result.toString();
        updateDisplay();
    }
}


// Clear the display
function clearDisplay() {
    displayValue = "";
    hasError = false;
    updateDisplay();
}

// Clear the latest input
function clearLatest() {
    if (hasError) {
        clearDisplay();
    } else {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}
// Save a calculation to the log
function saveToLog(equation) {
    // Add the equation to the log array
    calculationLog.push(equation);

    // Update the log display
    const logList = document.getElementById('log');
    const logEntry = document.createElement('li');
    logEntry.textContent = equation;
    logList.appendChild(logEntry);
}

function clearHistory() {
    // Clear the calculation log array
    calculationLog = [];

    // Clear the displayed list in the HTML
    const logList = document.getElementById('log');
    logList.innerHTML = ''; // This removes all the <li> elements
}
