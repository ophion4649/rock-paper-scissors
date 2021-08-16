// Get all necessary DOM nodes
const images = Array.from(document.querySelectorAll('.card-image'));
const message = document.querySelector('.message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

let playerScore = 0;
let computerScore = 0;


// Start GAME when user clicks on an image
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(image.dataset.image);
  })
);

/* Game LOGIC */

function getComputerSelection() {
  let computerNumber = random(3);
  let computerGuess = '';

  switch (computerNumber) {
    case 1:
      computerGuess = 'Rock';
      break;
    case 2:
      computerGuess = 'Paper';
      break;
    case 3:
      computerGuess = 'Scissors';
      break;
    default:
      break;
  }

  return computerGuess;
}

function playRound(playerSelection, computerSelection) {
  let msg = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      msg = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      msg = 'You Win! Rock beats Scissors';
    } else {
      msg = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      msg = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      msg = 'You Win! Paper beats Rock';
    } else {
      msg = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      msg = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      msg = 'You Win! Scissors beats Paper';
    } else {
      msg = "It's a tie";
    }
  }

  return msg;
}

function createParagWithText(text) {
  const p = document.createElement('p');
  p.textContent = text;

  return p;
}

function game(playerSelect) {
  let playerSelection = capitalize(playerSelect);
  let computerSelection = getComputerSelection();

  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.search('You Win!') > -1) {
    playerScore++;
  } else if (roundResult.search('You Lose!') > -1) {
    computerScore++;
  }

  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  message.textContent = roundResult;
  selectionPlayer.appendChild(createParagWithText(playerSelection));
  selectionComputer.appendChild(createParagWithText(computerSelection));

  if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over. You Win!';
  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lose!';
  }
}

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function capitalize(string) {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
}