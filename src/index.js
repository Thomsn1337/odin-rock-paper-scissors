const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomNum];
};

function getPlayerChoice(button) {
  return button.id;
}

function playGame() {
  const playerChoice = getPlayerChoice(this);
  const computerChoice = getComputerChoice();

  console.log(playerChoice);
  console.log(computerChoice);
}

// const game = () => {
//   let playerPoints = 0;
//   let computerPoints = 0;

//   while (true) {
//     let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();

//     let winner = decideWinner(computerChoice, playerChoice);
//     if (winner === "player") {
//       playerPoints++;
//       alert(
//         `Player won!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
//       );
//       console.log(computerChoice);
//     }
//     if (winner === "computer") {
//       computerPoints++;
//       alert(
//         `Computer won!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
//       );
//       console.log(computerChoice);
//     }
//     if (winner === "tie") {
//       alert(
//         `It's a tie!\nPlayer's points: ${playerPoints}\nComputer's points: ${computerPoints}`,
//       );
//       console.log(computerChoice);
//     }

//     if (playerPoints === 5) {
//       alert("You won the game!");
//       break;
//     }
//     if (computerPoints === 5) {
//       alert("The computer won the game!");
//       break;
//     }
//   }
// };

// game();

const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});
