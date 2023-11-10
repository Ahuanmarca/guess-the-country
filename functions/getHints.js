// Returns hints as an Array of Strings. Takes care of pluralizing.
// ['Continent: North America', 'Capital: Cockburn Town', 'Currency: Dollar', 'Language: English']
// TODO: Write the hints in a more interesting way.
export function getHints({ continents, capital, currencies, languages }) {
  return [
    !continents
      ? 'Not applicable'
      : `🐵 Continent${continents.length > 1 ? 's' : ''}: ${continents.join(
          ', '
        )}`,
    !capital
      ? 'Not applicable'
      : `🙊 Capital${capital.length > 1 ? 's' : ''}: ${capital.join(', ')}`,
    !currencies
      ? 'Not applicable'
      : `🙉 Currenc${currencies.length > 1 ? 'ies' : 'y'}: ${currencies.join(
          ', '
        )}`,
    !languages
      ? 'Not applicable'
      : `🙈 Language${languages.length > 1 ? 's' : ''}: ${languages.join(', ')}`,
  ];
}
