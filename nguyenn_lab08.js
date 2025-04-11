/* initializes consts */
const userDisplay = document.getElementById("user-Choice");
const compDisplay = document.getElementById("comp-Choice");
const resultDisplay = document.getElementById("resultDisplay");

/* choices for random selection */
const choices = ["rock", "paper", "scissors"];

/* event listeners for button functions */
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

/* game function */
function playGame(userChoice) {

  /* random selection using math random */
  const compChoice = choices[Math.floor(Math.random() * 3)];

  /* initializes result string*/
  let result = "";

  /* if else statement for game rules */
  if (userChoice === compChoice) {
    result = "It's a Tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    result = "You Win!";
  } else {
    result = "Mini Talie Wins!";
  }

  /* displays the text to the html */
  userDisplay.textContent = `You threw ${userChoice}`;
  compDisplay.textContent = `Mini Talie threw ${compChoice}`;
  resultDisplay.textContent = result;
}
