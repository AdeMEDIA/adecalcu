// Wait for the HTML document to fully load before running our code
document.addEventListener("DOMContentLoaded", function () {
    // Get the input box where we display numbers and results
    var inputBox = document.getElementById("InputBox");

    // Get all the buttons on the calculator
    var buttons = document.querySelectorAll(".button");

    // Add a click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // When a button is clicked, call the handleButtonClick function with the button's text
            handleButtonClick(button.textContent);
        });
    });

    // Function to handle what happens when a button is clicked
    function handleButtonClick(value) {
        switch (value) {
            case "AC":
                // If the "AC" button is clicked, clear everything in the input box
                inputBox.value = "";
                break;

            case "Del":
                // If the "Del" button is clicked, remove the last character from the input box
                inputBox.value = inputBox.value.slice(0, -1);
                break;

            case "=":
                // If the "=" button is clicked, try to evaluate and show the result
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    // If there's an error in the calculation, show "Error"
                    inputBox.value = "Error";
                }
                break;

            default:
                // For other buttons, just add their value to the input box
                inputBox.value += value;
                break;
        }
    }
});