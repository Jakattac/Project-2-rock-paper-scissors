const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const userScoreElem = document.getElementById("user-score");
const computerScoreElem = document.getElementById("computer-score");
const resultElem = document.getElementById("result");

let userScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", function () {
        const userChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);
        updateScore(result);
        showResult(result, userChoice, computerChoice);
    });
});

function getResult(user, computer) {
    // Your game logic here
}

function updateScore(result) {
    // Your score update logic here
}

function showResult(result, userChoice, computerChoice) {
    // Your result display logic here
}
