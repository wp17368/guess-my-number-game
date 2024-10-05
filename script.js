"use strict";
const numberDisplay = document.querySelector(".number");
const numberInputField = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const messageDisplay = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");

let randomNumber = generateRandomNumber(1, 20);
let score = 20;
let highscore = 0;

checkButton.addEventListener("click", displayResult);
againButton.addEventListener("click", resetGame);

function generateRandomNumber(minimalNumber, maximalNumber) {
  return Math.floor(Math.random() * maximalNumber) + minimalNumber;
}
function displayResult() {
  if (checkNumber()) {
    toggleAgainButton();
    toggleBackgroundColor("#60b347");

    changeDisplayedMessage("Yay! You guessed right! :)", randomNumber);
  } else {
    changeScore();
    if (getUserGuess() < randomNumber) {
      changeDisplayedMessage("Too low!");
    } else {
      changeDisplayedMessage("Too high!");
    }
  }
}
function checkNumber() {
  if (randomNumber === getUserGuess()) {
    return true;
  } else {
    return false;
  }
}
function toggleAgainButton() {
  againButton.classList.toggle("display-on");
}
function toggleBackgroundColor(color) {
  document.body.style.background = color;
}
function changeDisplayedMessage(messageText, number = "?") {
  messageDisplay.innerHTML = messageText;
  numberDisplay.innerHTML = number;
}
function changeScore() {
  score--;
  scoreDisplay.innerHTML = score;
}
function getUserGuess() {
  return Number(numberInputField.value);
}
function changeDisplayedScores() {
  readjustScores();
  highscoreDisplay.innerHTML = highscore;
  scoreDisplay.innerHTML = score;
}
function readjustScores() {
  if (score > highscore) {
    highscore = score;
  }
  score = 20;
}
function resetGame() {
  changeDisplayedScores();
  changeDisplayedMessage("Make a guess! :)");
  clearUserInputField();
  toggleAgainButton();
  toggleBackgroundColor("#222");
  randomNumber = generateRandomNumber(1, 20);
}
function clearUserInputField() {
  numberInputField.value = "";
}
