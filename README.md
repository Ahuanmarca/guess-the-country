# Guess The Flag game
Game created for The Bridge Full-Stack Bootcamp in Valencia.

## Countries API used
https://restcountries.com/v3.1/all  

### Controls:
- Enter: Submit Guess
- Tab: Skip

### Rules:
- You begin with 60 HP
- Each second you lose -1 HP
- If you reach 0 HP, you lose
- A correct answer increases +60 HP and +1 Score
- Empty or incorrect answer decreases -5 HP and
reveals a hint.
- If 4 hints are already revealed, an empty or
incorrect answer decreases -10 HP.

### Stats to keep:
- Time survided
- Correct answers
- Incorrect answers
- Hints used
- Score
- Max HP achieved (?)

### Mechanics:
- When game begigns, countries are shuffled
and put on 'countries' list
- Each correct country is popped from list
- Skipped countries go to 'skipped' list
- Incorrect countries go to 'incorrect' list
- If 'countries' gets empty, we shuffle skipped
and put them in 'countries', then keep going
- If both 'countries' and 'skipped' are empty,
we shuffle 'incorrect' and pass them to
'countries', then keep going
- If all lists become empty, player wins