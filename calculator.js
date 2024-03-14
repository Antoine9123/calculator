const computeResult = str => Function('return ' + str)();

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let currentInput = '';
    
    const updateDisplay = () => display.textContent = currentInput;

    const clearDisplay = () => {
        currentInput = '';
        updateDisplay();
    };

    const calculateResult = () => {
        try {
            currentInput = computeResult(currentInput);
        } catch (error) {
            currentInput = 'Error';
        } finally {
            updateDisplay();
        }
    };

    const handleButtonClick = event => {
        const buttonValue = event.target.textContent;
        
        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            currentInput += buttonValue;
            updateDisplay();
        }
    };

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });
});
