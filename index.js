// Get form elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submitButton');
const resultDisplay = document.getElementById('result');

// Event listener for button click
submitButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim(), 19);

    if (!name || isNaN(age)) {
        resultDisplay.textContent = "Please enter a valid name and age!";
        resultDisplay.style.color = "red";
        return;
    }

    if (age >= 18 && age <= 30) {
        resultDisplay.textContent = `Welcome, ${name}! You are eligible to be a student.`;
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = `Sorry, ${name}. You must be between 18 and 30 years old to be accepted.`;
        resultDisplay.style.color = "orangered";
    }
});
