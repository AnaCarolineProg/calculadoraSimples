let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "";
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

updateDisplay();