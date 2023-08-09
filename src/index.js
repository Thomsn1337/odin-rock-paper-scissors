const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const MIN = 0;
  const MAX = 3;
  const randomNum = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  return CHOICES[randomNum];
};

const getPlayerChoice = () => {
  while (true) {
    const playerChoice = prompt("Enter your choice.").toLocaleLowerCase();
    if (!CHOICES.includes(playerChoice)) {
      alert("Not a valid choice");
    } else {
      return playerChoice;
    }
  }
};

const decideWinner = (computerChoice, playerChoice) => {
  switch (computerChoice) {
    case "rock":
      if (playerChoice === "rock") {
        return "Tie";
      }
      if (playerChoice === "paper") {
        return "Player wins";
      }
      if (playerChoice === "scissors") {
        return "Computer wins";
      }
      break;
    case "paper":
      if (playerChoice === "rock") {
        return "Computer wins";
      }
      if (playerChoice === "paper") {
        return "Tie";
      }
      if (playerChoice === "scissors") {
        return "Player wins";
      }
      break;
    case "scissors":
      if (playerChoice === "rock") {
        return "Player wins";
      }
      if (playerChoice === "paper") {
        return "Computer wins";
      }
      if (playerChoice === "scissors") {
        return "Computer wins";
      }
      break;
  }
  return "";
};

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

let winner = decideWinner(computerChoice, playerChoice);
console.log(winner);
