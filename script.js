let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkGuess() {
    const userGuess = document.getElementById("guess").value;
    const result = document.getElementById("result");
    const attemptsText = document.getElementById("attempts");

    attempts++;
    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the number correctly!";
        result.style.color = "green";
        attemptsText.textContent = `It took you ${attempts} attempts.`;
    }
    else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
        result.style.color = "red";
    } else {
        result.textContent = "Too low! Try again.";
        result.style.color = "red";
    }
    if (attempts >= 10 && userGuess != randomNumber) {
        result.textContent = `Sorry, you've reached 10 attempts! The correct number was ${randomNumber}.`;
        result.style.color = "blue";
        attemptsText.textContent = `You tried ${attempts} times. Better luck next time!`;
    }
    document.getElementById("guess").value = "";
}
