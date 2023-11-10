/* eslint-disable no-console */
// This file tests some attributes from the returned data from rest-countries
// Countries with undefined values in capital, languages, currencies, etc

import response from './response.js';

const undefinedNames = response.filter(c => c.name === undefined).length;
console.log('undefined names: ', undefinedNames);
const definedNames = response.filter(c => c.name !== undefined).length;
console.log('defined names: ', definedNames);

const undefinedCapitals = response.filter(c => c.capital === undefined).map(c => `${c.name.common}`).length;
console.log('undefined capitals: ', undefinedCapitals);
const definedCapitals = response.filter(c => c.capital !== undefined).map(c => `${c.name.common}`).length;
console.log('defined capitals: ', definedCapitals);

const undefinedCurrencies = response.filter(c => c.currencies === undefined).length;
console.log('undefined currencies: ', undefinedCurrencies);
const definedCurrencies = response.filter(c => c.currencies !== undefined).length;
console.log('defined currencies: ', definedCurrencies);

const undefinedLanguages = response.filter(c => c.languages === undefined).length;
console.log('undefined languages: ', undefinedLanguages);
const definedLanguages = response.filter(c => c.languages !== undefined).length;
console.log('defined languages: ', definedLanguages);
