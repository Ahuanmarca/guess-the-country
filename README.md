# Guess The Flag game
Game created for The Bridge Full-Stack Bootcamp in Valencia.

## Countries API used
https://restcountries.com/v3.1/all  

### Controls:
- Enter: Submit Guess
- Tab: Skip (not implemented)

### Rules:
- You begin with ... HP
- Each ... seconds you lose ... HP
- If you reach 0 HP, you lose
- A correct answer increases ... HP and +1 Score
- Empty or incorrect answer decreases ... HP and reveals a hint.
- If 4 hints are already revealed, an empty or incorrect answer decreases ... HP.

### Mechanics:
- When game begigns, countries are shuffled and put on 'countries' list
- Each correct country is popped from list
- Skipped countries go to 'skipped' list
- Incorrect countries go to 'incorrect' list
- If 'countries' gets empty, we shuffle skipped and put them in 'countries', then keep going
- If both 'countries' and 'skipped' are empty, we shuffle 'incorrect' and pass them to 'countries', then keep going 
- If all lists become empty, player wins

## TODO
[] Display correct answer (green if correct, red if incorrect)
[] Change the color of the input field (correct = green, incorrect = red)... turn back to normal after 1 or 2 seconds
[] Briefly turn HP to red when loosing HP, to green when earning HP
[] Give priority in the queue to easier countries (larger? more population?)
