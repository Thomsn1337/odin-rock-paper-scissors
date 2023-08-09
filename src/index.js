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
        return "tie";
      }
      if (playerChoice === "paper") {
        return "player";
      }
      if (playerChoice === "scissors") {
        return "computer";
      }
      break;
    case "paper":
      if (playerChoice === "rock") {
        return "computer";
      }
      if (playerChoice === "paper") {
        return "tie";
      }
      if (playerChoice === "scissors") {
        return "player";
      }
      break;
    case "scissors":
      if (playerChoice === "rock") {
        return "player";
      }
      if (playerChoice === "paper") {
        return "computer";
      }
      if (playerChoice === "scissors") {
        return "tie";
      }
      break;
  }
  return "";
};

const game = () => {
  let playerPoints = 0;
  let computerPoints = 0;

  while (true) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let winner = decideWinner(computerChoice, playerChoice);
    if (winner === "player") {
      playerPoints++;
      alert(
        `Player won!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
      );
      console.log(computerChoice);
    }
    if (winner === "computer") {
      computerPoints++;
      alert(
        `Computer won!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
      );
      console.log(computerChoice);
    }
    if (winner === "tie") {
      alert(
        `It's a tie!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
      );
      console.log(computerChoice);
    }

    if (playerPoints === 5) {
      alert("You won the game!");
      break;
    }
    if (computerPoints === 5) {
      alert("The computer won the game!");
      break;
    }
  }
};

game();
