const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const resultMessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');


let userScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
        if (userScore < 5 && computerScore < 5) {
            const userChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            const userIndex = choices.indexOf(userChoice);
            const computerIndex = choices.indexOf(computerChoice);
            const diff = (userIndex - computerIndex + choices.length) % choices.length;


            let roundResult = '';
            if (diff === 0) {
                roundResult = "It's a tie!";
            } else if (diff % 2 === 1) {
                roundResult = 'You win!';
                userScore++;
                userScoreElement.textContent = userScore;
            } else {
                roundResult = 'Computer wins!';
                computerScore++;
                computerScoreElement.textContent = computerScore;
            }

            resultMessage.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${roundResult}`;

            if (userScore === 5 || computerScore === 5) {
                resultMessage.textContent = userScore === 5 ? 'You win the game!' : 'You Lose!';
            }
        }
    });
});