const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const resultMessage = document.getElementById('result-message');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
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
        } else {
            roundResult = 'Computer wins!';
        }

        resultMessage.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${roundResult}`;
    });
});
