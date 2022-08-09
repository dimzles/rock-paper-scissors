const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const container = document.querySelector('#container');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');


const resultsContainer = document.createElement('div');
const resultsDisplay = document.createElement('p');
const scoreContainer = document.querySelector('#score-container');
const gameOverContainer = document.createElement('div');
const gameOverDisplay = document.createElement('p');

scoreContainer.appendChild(gameOverContainer);
container.appendChild(resultsContainer);
resultsContainer.classList.add('results-container');
resultsContainer.appendChild(resultsDisplay);
resultsDisplay.textContent = "First to 5 wins!";
gameOverContainer.appendChild(gameOverDisplay);

function flCapital(str) { 
    if (typeof str !== 'string') return '';
    let str2 = str.slice(1)
    return str.charAt(0).toUpperCase() + str2.toLowerCase();
}

btn1.addEventListener('click', () => {
    resultsDisplay.textContent = `${playRound(rock, computerPlay())}`
})

btn2.addEventListener('click', () => {
    resultsDisplay.textContent = `${playRound(paper, computerPlay())}`
})

btn3.addEventListener('click', () => {
    resultsDisplay.textContent = `${playRound(scissors, computerPlay())}`
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
    return "Player chooses: " + playerSelection +", Computer chooses: " + computerSelection + ", Round Winner: " + roundWinner + ".";
}


// !!!
// function game() {
//     while (playerScore || computerScore !== 5) {
//         for (let i = 0; i < 5; i++) {
//         }
//     }
//     if (playerScore === 5) {
//         console.log(`You win! The score was ${playerScore} - ${computerScore}`)
//     } else console.log(`You lose! The score was ${playerScore} - ${computerScore}`)
// }
// !!!
