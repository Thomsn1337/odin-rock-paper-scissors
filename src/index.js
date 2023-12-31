const CHOICES = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

const scorePanel = document.querySelector(".score");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const winnerMessage = document.querySelector("#winner-message");
const modal = document.querySelector("#restart-modal");
const modalText = document.querySelector("#winner");
const restartButton = document.querySelector("#play-again");

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomNum];
}

function getPlayerChoice(button) {
  return button.id;
}

function declareWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "Tie";
  else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  )
    return "Player";
  else return "Computer";
}

function updateScore(winner, playerChoice, computerChoice) {
  if (winner === "Player") {
    playerPoints++;
    playerScoreText.textContent = playerPoints;
    winnerMessage.textContent = `You win! You chose ${playerChoice}, your enemy chose ${computerChoice}.`;
    return;
  } else if (winner === "Computer") {
    computerPoints++;
    computerScoreText.textContent = computerPoints;
    winnerMessage.textContent = `Your enemy wins! He chose ${computerChoice}, you chose ${playerChoice}.`;
    return;
  } else {
    winnerMessage.textContent = `It's a tie! You both chose ${playerChoice}.`;
    return;
  }
}

function endGame() {
  if(playerPoints > computerPoints) {
    modalText.textContent = "You successfully defeated the machine.";
  } else {
    modalText.textContent = "The machine is superior. You lost.";
  }

  modal.classList.remove("hidden");
  modal.classList.add("show");
}

function playGame() {
  if (scorePanel.classList.contains("hidden")) {
    scorePanel.classList.remove("hidden");
    scorePanel.classList.add("show");
  }

  const playerChoice = getPlayerChoice(this);
  const computerChoice = getComputerChoice();
  const winner = declareWinner(playerChoice, computerChoice);

  updateScore(winner, playerChoice, computerChoice);
  if (playerPoints === 5 || computerPoints === 5) endGame();
}

const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});

restartButton.addEventListener("click", () => window.location.reload());
