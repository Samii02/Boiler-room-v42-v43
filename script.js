function appendToDisplay(value) {
    const display = document.querySelector('.display');
    display.value += value; // Append the clicked value to the display
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.value = ''; // Clear the display
}

function clearLatest() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1)
}