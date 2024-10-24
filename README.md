# Boiler-room-v42 - Calculator

## Description
This project is a simple calculator implemented in JavaScript. The user selects a mathematical operation and inputs two numerical values, after which the program performs the selected operation and displays the result. The program supports operations such as addition, subtraction, multiplication, division, modulus, and exponentiation.

## Program Structure
The program consists of the following parts:
1. Initialization of variables.
2. User input (selection of operation and numbers).
3. Input validation.
4. Display of the result.

## Variables
- `value1`: the first number entered by the user.
- `value2`: the second number entered by the user.
- `result`: variable to store the result of the chosen operation.
- `operationChoice`: the operation selected by the user.

## User Input
The program prompts the user to choose an operation using the `prompt` method. Possible operations are:
- `+`: addition
- `-`: subtraction
- `*`: multiplication
- `/`: division
- `%`: modulus (remainder)
- `^`: exponentiation

Then, the user is prompted to enter two numerical values. These values are converted to numbers using the `parseFloat` function.

## Input Validation
1. The program checks if the chosen operation is one of the supported operations.
   - If the operation is invalid, a message "Ogiltig operation!" (Invalid operation) is displayed.
2. The program checks if the entered values `value1` and `value2` are valid numbers.
   - If one of the values is not a number, an error message "Fel: Du måste mata in giltiga tal!" (Error: You must enter valid numbers) is displayed.

## Result Display
After performing the operation, the program displays the result in a pop-up alert:
```javascript
alert("Här är resultatet: " + value1 + " " + operationChoice + " " + value2 + " = " + result);
```
The result is also logged to the console for debugging purposes.

## Usage
To use the program, follow these steps:
1. Open the browser's console or execute the code in any JavaScript environment.
2. Run the program.
3. Follow the instructions to input the operation and numbers.
4. The program will perform the chosen operation and display the result.

## Possible Errors
- Invalid operation selection: the program will display the message "Ogiltig operation!".
- Non-numerical input: the program will display the message "Fel: Du måste mata in giltiga tal!".
- Division by zero: the program will display the message "Fel: Division med noll är förbjudet!!!" (Error: Division by zero is forbidden).
