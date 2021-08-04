let playerScore = 0;
let computerScore = 0;
const ROUNDCOUNT = 5;

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    return prompt("What is your choice?");
}

function casify(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function displayScore() {
    console.log(`Computer:${computerScore} Player:${playerScore}`);
}

function playRound(playerSelection, computerSelection) {
    const ps = casify(playerSelection);
    const cs = casify(computerSelection);
    if (ps === cs) {
        console.log(`It's a Draw! You both chose ${ps}!`);
        return 1;
    }
    const rules = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" };
    if (cs === rules[ps]) {
        console.log(`You Win! ${ps} beats ${cs}!`);
        playerScore++;
    } else {
        console.log(`You Lose! ${cs} beats ${ps}!`);
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < ROUNDCOUNT; i++) {
        playRound(playerPlay(), computerPlay());
        displayScore();
    }
    if (playerScore === computerScore) console.log("It's a Draw!");
    if (playerScore > computerScore ? "You Win!" : "You Lose");
}

game();