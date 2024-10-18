let value1;
let value2;
let result;

let operationChoice = prompt("Välj en operation att urföra: +, - , *, /, %, ^.")

if (operationChoice !== "+" && operationChoice !== "-"
    && operationChoice !== "*" && operationChoice !== "/" &&
    operationChoice !== "%" && operationChoice !== "^") {
    alert("Ogiltig operation!")
}
else {
    value1 = parseFloat(prompt("Skriv in ditt första värde:"));
    value2 = parseFloat(prompt("Skriv in ditt andra värde:"));
}


function additionMethod(a, b) {
    return a + b;
}


function subtractionMethod(a, b) {
    return a - b;
}


function multiplicationMethod(a, b) {
    return a * b;
}


function divisionMethod(a, b) {
    if (b === 0) {
        return "Fel: Division med noll är förbjudet!!!";
    }
    else {
        return a / b;
    }
}


function modulusMethod(a, b) {
    return a % b;
}


function powerMethod(a, b) {
    return Math.pow(a, b);
}

switch(operationChoice) {
    case "+":
        result = additionMethod(value1, value2)
        break;
    case "-":
        result = subtractionMethod(value1, value2);
        break;
    case "*":
        result = multiplicationMethod(value1, value2);
        break;
    case "/":
        result = divisionMethod(value1, value2);
        break;
    case "%":
        result = modulusMethod(value1, value2);
        break;
    case "^":
        result = powerMethod(value1, value2);
        break;
    default:
        result = "Ogiltig operation!";
}


alert("Här är resultatet: " + result)
