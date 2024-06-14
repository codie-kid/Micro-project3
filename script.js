let expression = '';

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function removeRecent(){
    expression =  expression.slice(0 ,-1);
    updateDisplay();
}

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    expression += op;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Invalid expression!');
        clearDisplay();
    }
}
function appendDecimal() {
    // Check if the last character of expression is already a decimal point
    if (!expression.endsWith('.')) {
        // Check if the last character is an operator, if so, add '0' before appending the decimal point
        if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
            expression += '0.';
        } else {
            expression += '.';
        }
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}