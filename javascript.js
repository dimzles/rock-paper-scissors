const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let playerSelection = prompt("rock, paper or scissors?");


function capitalise(str) { 
    if (typeof str !== 'string') return '';
    let str2 = str.slice(1)
    return str.charAt(0).toUpperCase() + str2.toLowerCase();
}

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
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection2 = capitalise(playerSelection);
    if (computerSelection === playerSelection2) {
        return "It's a tie";
    } else if (computerSelection === rock && playerSelection2 === scissors) {
        return "Rock beats scissors, you lose.";
    } else if (computerSelection === paper && playerSelection2 === rock) {
        return "Paper beats rock, you lose.";
    } else if (computerSelection === scissors && playerSelection2 === paper) {
        return "Scissors beats paper, you lose.";
    } else {
        return `${playerSelection2} beats ${computerSelection}. You win!`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        playerSelection = prompt("rock, paper or scissors?");
    }
}
