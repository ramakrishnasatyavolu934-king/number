let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsText = document.getElementById("attempts");

    if (guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        message.textContent = "Enter a number between 1 and 100!";
        message.style.color = "red";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        message.textContent = "Correct! You guessed the number!";
        message.style.color = "green";
    } 
    else if (guess < secretNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "orange";
    } 
    else {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "orange";
    }

    attemptsText.textContent = "Attempts: " + attempts;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}