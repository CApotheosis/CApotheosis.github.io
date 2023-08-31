let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.random() * 9;
}

function getAbsoluteDistance(target, guess) {
  return Math.abs(target - guess);
}

function compareGuesses(user_guess, comp_guess, target) {
  let user_to_target = getAbsoluteDistance(target, user_guess);
  let computer_to_target = getAbsoluteDistance(target, comp_guess);
  // console.log(user_to_target, computer_to_target);
  if (user_guess === target || user_to_target <= computer_to_target) {
    // updateScore("human");
    return true;
  } else if (comp_guess === target || user_to_target > computer_to_target) {
    // updateScore("computer");
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
