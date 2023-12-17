let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const showMsg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const scoreboard = () => {};
const playGame = (userChoice) => {
  //User Choice
  console.log("User choice :", userChoice);
  //Computer Choice
  const compChoice = genCompChoice();
  console.log("Computer choice :", compChoice);

  if (userChoice === compChoice) {
    //Game Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Scissor , Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const genCompChoice = () => {
  //rock, paper, scissor
  const opt = ["rock", "paper", "scissor"];
  const rdmIdx = Math.floor(Math.random() * 3);
  return opt[rdmIdx];
};

const drawGame = () => {
  showMsg.innerText = "Game Tied. Play Again";
  showMsg.style.backgroundColor = "#BB7024" 
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    showMsg.innerText = `You Won ! Your ${userChoice} beats ${compChoice}`;
    showMsg.style.backgroundColor = "#4A9F49";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    showMsg.innerText = `You Lost ! Computer ${compChoice} beats ${userChoice}`;
    showMsg.style.backgroundColor = "#C54444";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
