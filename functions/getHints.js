// Returns hints as an Array of Strings. Takes care of pluralizing.
// ['Continent: North America', 'Capital: Cockburn Town', 'Currency: Dollar', 'Language: English']
// TODO: Write the hints in a more interesting way.
export function getHints({ continents, capital, currencies, languages }) {
  return [
    continents
      ? `🐵 Continent${continents.length > 1 ? 's' : ''}: ${continents.join(
          ', '
        )}`
      : undefined,
    capital
      ? `🙊 Capital${capital.length > 1 ? 's' : ''}: ${capital.join(', ')}`
      : undefined,
    currencies
      ? `🙉 Currenc${
          Object.keys(currencies).length > 1 ? 'ies' : 'y'
        }: ${Object.values(currencies)
          .map((c) =>
            c.name
              .split(' ')
              .at(-1)
              .split('')
              .map((c, i) => (!i ? c.toUpperCase() : c))
              .join('')
          )
          .join(', ')}`
      : undefined,
    languages
      ? `🙈 Language${
          Object.keys(languages).length > 1 ? 's' : ''
        }: ${Object.values(languages).join(', ')}`
      : undefined,
  ];
}
