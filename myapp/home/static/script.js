let resultDisplayed = false;

function appendToResult(value) {
    let display = document.getElementById('result');

    if (resultDisplayed) {
        display.value = "";
        resultDisplayed = false;
    }
    display.value += value;
}

// Calculate the result
function calculate() {
    let display = document.getElementById("result");

    try {
        display.value = eval(display.value);
        resultDisplayed = true;
    } catch (error) {
        display.value = "Error";
    }
}

// Clear the display
function clearResult() {
    document.getElementById("result").value = "";
    resultDisplayed = false;
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

