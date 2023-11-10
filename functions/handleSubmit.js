export function handleSubmit(
  e,
  gameState,
  { userInput, hintDivs, hpValue, scoreValue, solutionText }
) {
  e.preventDefault();
  const validAnswers = gameState.validAnswers;
  const hints = gameState.hints;
  const playerGuess = userInput.value.toLowerCase().trim();
  const isCorrect = validAnswers.some((a) => a.toLowerCase() === playerGuess);
  const hpContainer = document.querySelector('.hp-container');
  const scoreContainer = document.querySelector('.score-container');
  if (!isCorrect) {
    if (hints.length > 0) {
      // * REVEAL HINT
      hintDivs[hintDivs.length - hints.length].innerText = hints.shift();
      gameState.hp -= gameState.hintPenalty;
      hpValue.innerText = gameState.hp;
      userInput.value = '';
      hpContainer.classList.toggle('incorrect-input-background');
      setTimeout(() => {
        hpContainer.classList.toggle('incorrect-input-background');
      }, 100);
    } else {
      // * INCORRECT ANSWER
      gameState.incorrect.push(gameState.country);
      gameState.hp -= gameState.incorrectPenalty;
      hpValue.innerText = gameState.hp;
      userInput.disabled = true;
      userInput.classList.toggle('incorrect-input-background');
      solutionText.classList.toggle('incorrect-answer');
      solutionText.innerText = gameState.validAnswers[0];

      hpContainer.classList.toggle('incorrect-input-background');

      document.addEventListener('keypress', () => {
        hpContainer.classList.toggle('incorrect-input-background');
        gameState.resetCountry();
        solutionText.classList.toggle('incorrect-answer');
        solutionText.innerText = '';
        userInput.classList.toggle('incorrect-input-background');
        userInput.value = '';
        userInput.disabled = false;
        userInput.focus();
      }, { once: true });
    }
  } else {
    // * CORRECT ANSWER
    gameState.correct.push(gameState.country);
    scoreValue.innerText = gameState.correct.length;
    gameState.hp += gameState.correctBonus;
    hpValue.innerText = gameState.hp;
    userInput.classList.toggle('correct-input-background');
    userInput.disabled = true;
    solutionText.classList.toggle('correct-answer');
    solutionText.innerText = gameState.validAnswers[0];

    hpContainer.classList.toggle('correct-input-background');
    scoreContainer.classList.toggle('correct-input-background');

    document.addEventListener('keypress', () => {
      hpContainer.classList.toggle('correct-input-background');
      scoreContainer.classList.toggle('correct-input-background');
      gameState.resetCountry();
      solutionText.innerText = '';
      solutionText.classList.toggle('correct-answer');
      userInput.classList.toggle('correct-input-background');
      userInput.value = '';
      userInput.disabled = false;
      userInput.focus();
    }, { once: true });
  }
}
