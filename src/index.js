const CHOICES = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

const scorePanel = document.querySelector(".score");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const winnerMessage = document.querySelector("#winner-message");

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

function playGame() {
  if (scorePanel.classList.contains("hidden")) {
    scorePanel.classList.remove("hidden");
    scorePanel.classList.add("show");
  }

  const playerChoice = getPlayerChoice(this);
  const computerChoice = getComputerChoice();
  const winner = declareWinner(playerChoice, computerChoice);

  updateScore(winner, playerChoice, computerChoice);
  if (playerPoints === 5 || computerPoints === 5) {
    if (playerPoints > computerPoints) console.log("Player wins");
    else console.log("Computer wins");
  }
}

const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});
