const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const btns = document.querySelectorAll('buttons')
const buttonContainer = document.querySelector('#container');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const resultsContainer = document.createElement('div');
const resultsDisplay = document.createElement('p');
const scoreContainer = document.querySelector('#score-container');
const gameOverContainer = document.createElement('div');
const gameOverDisplay = document.createElement('p');
const retryContainer = document.createElement('div')
const retryButton = document.createElement('button');

buttonContainer.appendChild(resultsContainer);
scoreContainer.appendChild(gameOverContainer);
gameOverContainer.appendChild(gameOverDisplay);
gameOverContainer.appendChild(retryContainer)
retryContainer.appendChild(retryButton)
retryButton.textContent = "Retry?"
resultsContainer.classList.add('results-container');
resultsContainer.appendChild(resultsDisplay);
resultsDisplay.textContent = "First to 5 wins!";
retryButton.style.visibility = 'hidden';
retryContainer.classList.add('retryContainer')

retryButton.addEventListener('click', () => {
    resetGame();
})

btn1.addEventListener('click', () => {
    playRound(rock, computerPlay());
    gameOver();
})

btn2.addEventListener('click', () => {
    playRound(paper, computerPlay());
    gameOver()
})

btn3.addEventListener('click', () => {
    playRound(scissors, computerPlay());
})

//computerPlay func to randomly return rock/paper/scissors
function computerPlay() {
    let computerChoice;
    let computerRandom = Math.random();
    
    if (computerRandom < 0.34) {
        computerChoice = rock;
    } else if (computerRandom < 0.67 && computerRandom > 0.34) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }
    
    return computerChoice;
}

//write func for a single round of r/p/s that takes playerSelection (case INsensitive)
//and computerSelection as parameters, then returns a string to declare who won
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        roundWinner = "It's a tie";
    }
    
    if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === scissors && computerSelection === paper) ||
        (playerSelection === paper && computerSelection === rock)
    ) {
        playerScore.dataset.score = parseInt(playerScore.dataset.score) + 1;
        playerScore.textContent = "Player: " + playerScore.dataset.score;
        roundWinner = 'Player';
    }
    if (
        (computerSelection === rock && playerSelection === scissors) ||
        (computerSelection === scissors && playerSelection === paper) ||
        (computerSelection === paper && playerSelection === rock)
    ) {
        computerScore.dataset.score = parseInt(computerScore.dataset.score) + 1;
        computerScore.textContent = "Computer: " + computerScore.dataset.score;
        roundWinner = 'Computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    let message = '';
    if (winner === 'Player') {
        resultsDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        return;
    }
    if (winner === 'Computer') {
        resultsDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        return;
    }
    resultsDisplay.textContent = `It's a tie!`
}

function resetGame() {
    playerScore.dataset.score = parseInt(0);
    playerScore.textContent = `Player: ${playerScore.dataset.score}`;
    computerScore.dataset.score = parseInt(0);
    computerScore.textContent = `Computer: ${computerScore.dataset.score}`;
    resultsDisplay.textContent = `First to 5 wins!`;
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
    btn3.removeAttribute("disabled");
    gameOverDisplay.textContent = ``;
    retryButton.style.visibility = 'hidden';
}

function gameOver() {
    if (parseInt(playerScore.dataset.score) === 5) {
        btn1.setAttribute("disabled", "1");
        btn2.setAttribute("disabled", "1");
        btn3.setAttribute("disabled", "1");
        gameOverDisplay.textContent = `Game over! You win the game with ${playerScore.dataset.score} points!`;
        retryButton.style.visibility = 'visible';
        return;
    } 
    if (parseInt(computerScore.dataset.score) === 5) {
            btn1.setAttribute("disabled", "1");
            btn2.setAttribute("disabled", "1");
            btn3.setAttribute("disabled", "1");
            gameOverDisplay.textContent = `Game over! The computer beat you with ${computerScore.dataset.score} points!`;
            retryButton.style.visibility = 'visible';
            return;
    }
}