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
  if (!isCorrect) {
    if (hints.length > 0) { // * REVEAL HINT
      hintDivs[hintDivs.length - hints.length].innerText = hints.shift();
      gameState.hp -= gameState.hintPenalty;
      hpValue.innerText = gameState.hp;
      userInput.value = '';
    } else { // * INCORRECT ANSWER
      gameState.incorrect.push(gameState.country);
      gameState.hp -= gameState.incorrectPenalty;
      hpValue.innerText = gameState.hp;
      userInput.disabled = true;
      userInput.classList.toggle('incorrect-input-background');
      solutionText.classList.toggle('incorrect-answer');
      solutionText.innerText = gameState.validAnswers[0];
      setTimeout(() => {
        gameState.resetCountry();
        solutionText.classList.toggle('incorrect-answer');
        solutionText.innerText = '';
        userInput.classList.toggle('incorrect-input-background');
        userInput.value = '';
        userInput.disabled = false;
        userInput.focus();
      }, 1000);
    }
  } else { // * CORRECT ANSWER
    gameState.correct.push(gameState.country);
    scoreValue.innerText = gameState.correct.length;
    gameState.hp += gameState.correctBonus;
    hpValue.innerText = gameState.hp;
    userInput.classList.toggle('correct-input-background');
    userInput.disabled = true;
    solutionText.classList.toggle('correct-answer');
    solutionText.innerText = gameState.validAnswers[0];
    setTimeout(() => {
      gameState.resetCountry();
      solutionText.innerText = '';
      solutionText.classList.toggle('correct-answer');
      userInput.classList.toggle('correct-input-background');
      userInput.value = '';
      userInput.disabled = false;
      userInput.focus();
    }, 1000);
  }
}
