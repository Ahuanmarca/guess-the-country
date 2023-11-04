// https://restcountries.com/v3.1/all
// https://swapi.dev/api/planets/3/

// Default (no args): Returns array with one random country -> one element
// If arg is a function, returns array.filter(arg) -> likely several elements
// If arg is a number, retunrs array[arg] -> one element
async function getCountries(arg) {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  if (typeof arg === "number") return [data[Math.floor(arg)]];
  if (typeof arg === "function") return data.filter(arg);
  return [data[Math.floor(Math.random() * data.length)]];
}

// Returns hints as an Array of Strings. Takes care of pluralizing.
// ['Continent: North America', 'Capital: Cockburn Town', 'Currency: Dollar', 'Language: English']
export function getHints({ continents, capital, currencies, languages }) {
  return [
    continents
      ? `Continent${continents.length > 1 ? "s" : ""}: ${continents.join(", ")}`
      : undefined,
    capital
      ? `Capital${capital.length > 1 ? "s" : ""}: ${capital.join(", ")}`
      : undefined,
    currencies
      ? `Currenc${
          Object.keys(currencies).length > 1 ? "ies" : "y"
        }: ${Object.values(currencies)
          .map((c) =>
            c.name
              .split(" ")
              .at(-1)
              .split("")
              .map((c, i) => (!i ? c.toUpperCase() : c))
              .join("")
          )
          .join(", ")}`
      : undefined,
    languages
      ? `Language${
          Object.keys(languages).length > 1 ? "s" : ""
        }: ${Object.values(languages).join(", ")}`
      : undefined,
  ];
}

async function runGame() {
  const data = await getCountries();
  const country = data[0];

  // FLAG IMAGE
  const flagImg = document.querySelector(".flag-img");
  flagImg.src = country.flags.svg;
  flagImg.alt = country.flags.alt;

  // HINT BUTTONS
  const hints = getHints(country);
  document.querySelectorAll(".hint-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      button.innerText = hints[index];
    });
  });

  // GUESS MECHANICS
  const correctAnswers = Object.values(country.name).filter(
    (n) => typeof n === "string"
  );
  document.querySelector(".guess-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const playerGuess = document.querySelector(".guess-input").value;
    const isCorrect = correctAnswers.some(
      (n) => n.toLowerCase() === playerGuess.toLowerCase().trim()
    );

    console.log(isCorrect ? "correct" : "incorrect!");
  });

  // DEBUG PRINTS
  console.log(correctAnswers);
}

runGame();
