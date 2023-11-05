import { getHints } from "./functions/getHints.js"; // -> Array of Strings
import { getCountries } from "./functions/getCountries.js"; // -> Array with one or more Objects
import { shuffleArray } from "./functions/shuffleArray.js";

async function runGame() {
  const data = await getCountries();

  const gameState = {
    countries: shuffleArray(data),
    correct: [],
    incorrect: [],
    skipped: [],
    country: undefined,
    hints: [],
    validAnswers: [],
    hp: 60,
    correctBonus: 60,
    hintPenalty: 2,
    incorrectPenalty: 5,
    frameRate: 1000,
    resetCountry() {
      this.country = this.countries.pop();
      this.hints.length = 0;
      this.hints.push(...getHints(this.country));
      this.validAnswers = Object.values(this.country.name).filter(
        (n) => typeof n === "string"
      );
      flagImg.src = this.country.flags.svg;
      flagImg.alt = this.country.flags.alt;
      document.querySelectorAll(".hint").forEach((d) => (d.innerText = ""));
      console.log(this.validAnswers);
    },
  };

  const flagImg = document.querySelector(".flag-img");
  const hintDivs = document.querySelectorAll(".hint");
  const userInput = document.querySelector(".guess-input");
  const scoreValue = document.querySelector(".score-value");
  const hpValue = document.querySelector(".hp-value");

  gameState.resetCountry();
  
  function handleSubmit(e) {
    e.preventDefault();
    const validAnswers = gameState.validAnswers;
    const hints = gameState.hints;
    const playerGuess = userInput.value.toLowerCase().trim();
    const isCorrect = validAnswers.some((a) => a.toLowerCase() === playerGuess);
    if (!isCorrect) {
      if (hints.length > 0) {
        hintDivs[hintDivs.length - hints.length].innerText = hints.shift();
        gameState.hp -= gameState.hintPenalty;
        hpValue.innerText = gameState.hp;
        userInput.value = '';
      } else {
        gameState.incorrect.push(gameState.country);
        gameState.hp -= gameState.incorrectPenalty;
        hpValue.innerText = gameState.hp;
        gameState.resetCountry();
        userInput.value = '';
      }
    } else {
      gameState.correct.push(gameState.country);
      scoreValue.innerText = gameState.correct.length;
      gameState.hp += gameState.correctBonus;
      hpValue.innerText = gameState.hp;
      gameState.resetCountry();
      userInput.value = '';
    }
  }

  document
    .querySelector(".guess-form")
    .addEventListener("submit", handleSubmit);

  const intervalId = setInterval(() => {
    gameState.hp--;
    hpValue.innerText = gameState.hp;
    if (gameState.hp <= 0) {
      clearInterval(intervalId);
      alert(`
        GAME OVER!
        Final Score: ${gameState.correct.length}
      `)
    }
  }, gameState.frameRate)
}

runGame();
