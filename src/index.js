const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const min = 0;
  const max = 3;
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  return CHOICES[randomNum];
};

