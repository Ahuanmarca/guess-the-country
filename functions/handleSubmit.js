export function handleSubmit(
  e,
  gameState,
  { userInput, hintDivs, hpValue, scoreValue }
) {
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
