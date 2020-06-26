'use strict';

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector("#results");

// Math.random() determines computer choice
function computerPlay() {
  const validSelection = ['ROCK', 'PAPER', 'SCISSORS'];
  return validSelection[Math.floor(Math.random() * validSelection.length)];
}

function getSelection(playerSelection) {
  const playerChoice = document.querySelector("#playerChoice");
  const computerChoice = document.querySelector("#computerChoice");
  const computerSelection = computerPlay();
  playerChoice.textContent = `Player chose: ${playerSelection}`;
  computerChoice.textContent = `Compouter chose: ${computerSelection}`;
  return [playerSelection, computerSelection];
}

function getScore(playerSelection, computerSelection, playerScore, computerScore) {
  const draw = document.createElement("div");
  draw.setAttribute("id", "draw");

  // Computer scoring
  if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')) {
    computerScore++;
  } else if ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')) {
    computerScore++;
  } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) {
    computerScore++;
  }

  // If both playerSelection and computerSelection is the same
  else if ((playerSelection === 'PAPER') && (computerSelection === 'PAPER')) {
    draw.textContent = "Draw";
    result.appendChild(draw);
  } else if ((playerSelection === 'ROCK') && (computerSelection === 'ROCK')) {
    draw.textContent = "Draw";
    result.appendChild(draw);
  } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'SCISSORS')) {
    draw.textContent = "Draw";
    result.appendChild(draw);
  } else {
    playerScore++; // otherwise increment the playerScore by 1
  }

  return [playerScore, computerScore];
}

function displayScore(playerScore, computerScore) {
  const scorePlayer = document.querySelector("#playerScore");
  const scoreComputer = document.querySelector("#computerScore");

  scorePlayer.textContent = `Player Score: ${playerScore}`;
  scoreComputer.textContent = `Computer Score: ${computerScore}`;
}

function playAgain() {
  let choice = prompt("Do you want to play again? y/n");
  return choice;
}

function checkScore() {
  const announce = document.createElement('div');

  if (playerScore == 5) {
    announce.textContent = "Congratulations! You win"
    result.appendChild(announce);
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    announce.textContent = "You lost to the computer, FeelsBadMan"
    result.appendChild(announce);
    playerScore = 0;
    computerScore = 0;
  }
}

// Keep playing until someone reaches a score of 5
function playGame(playerSelection) {

  let selection = getSelection(playerSelection);
  let computerSelection = selection[1];
  let score = getScore(playerSelection, computerSelection, playerScore, computerScore);
  playerScore = score[0];
  computerScore = score[1];
  displayScore(playerScore, computerScore);
  checkScore();
}


// TOOLTIP for each choice
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});