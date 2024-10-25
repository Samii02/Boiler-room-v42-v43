let displayValue = "";

// Update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.value = displayValue;
}

// Add a character (number/operator) to the display
function appendToDisplay(char) {
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
    // First pass for *, /, %, ^
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
                    return null;
                }
                intermediate[intermediate.length - 1] /= tokens[i + 1];
                i += 2;
                break;
            case "%":
                if (tokens[i + 1] === 0) {
                    clearDisplay();
                    appendToDisplay("Error!");
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
        displayValue = result.toString();
        updateDisplay();
    }
}

// Clear the display
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

// Clear the latest input
function clearLatest() {
    displayValue = displayValue.slice(0, -1); // Clears the latest input
    updateDisplay();
}
