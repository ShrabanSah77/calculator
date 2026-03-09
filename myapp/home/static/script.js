// Add numbers and operators to display
function appendToResult(value) {
    document.getElementById("result").value += value;
}

// Clear the display
function clearResult() {
    document.getElementById("result").value = "";
}

// Remove last character
function backspace() {
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

// Automatically add ( or )
function addBracket() {
    let display = document.getElementById("result");
    let value = display.value;

    let open = (value.match(/\(/g) || []).length;
    let close = (value.match(/\)/g) || []).length;

    if (open > close) {
        display.value += ")";
    } else {
        display.value += "(";
    }
}

// Calculate the result
function calculate() {
    let display = document.getElementById("result");

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}