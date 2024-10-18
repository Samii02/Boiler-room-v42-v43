// Funktion för att starta kalkylatorn
function startCalculator() {
    console.log("Kalkylatorn startades."); // Logga för felsökning
    let num1 = getNumber("Ange det första talet:");
    if (num1 === null) return;  // Om användaren avbryter eller fel input

    let num2 = getNumber("Ange det andra talet:");
    if (num2 === null) return;  // Om användaren avbryter eller fel input

    let operation = getOperation();
    if (operation === null) return;  // Om användaren anger en ogiltig operation

    let result = calculate(num1, num2, operation);

    if (result !== null) {
        // Visa resultat för användaren
        alert(`Resultatet av ${num1} ${operation} ${num2} är: ${result}`);
        console.log(`Beräkning: ${num1} ${operation} ${num2} = ${result}`);
    }
}

// Funktion för att ta emot och validera ett nummer från användaren
function getNumber(message) {
    let input = prompt(message);
    if (input === null) {
        alert("Avbrutet.");
        return null;
    }
    let number = parseFloat(input);
    if (isNaN(number)) {
        alert("Fel: Du måste ange ett giltigt tal!");
        console.log("Felaktig inmatning: Ej ett nummer.");
        return null;
    }
    return number;
}

// Funktion för att ta emot och validera operation från användaren
function getOperation() {
    let operation = prompt("Vilken operation vill du utföra? Välj mellan +, -, *, /, ^ (exponentiering), eller % (modulus):");
    const validOperations = ["+", "-", "*", "/", "^", "%"];
    if (!validOperations.includes(operation)) {
        alert("Fel: Ogiltig operation! Ange en av: +, -, *, /, ^, %.");
        console.log("Felaktig inmatning: Ogiltig operation.");
        return null;
    }
    return operation;
}

// Funktion för att utföra beräkningen
function calculate(num1, num2, operation) {
    let result = null;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Fel: Division med 0 är inte tillåtet!");
                console.log("Fel: Division med 0 försök.");
                return null;
            }
            result = num1 / num2;
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            alert("Fel: Ogiltig operation!");
            console.log("Fel: Ogiltig operation angavs.");
            return null;
    }
    return result;
}
    