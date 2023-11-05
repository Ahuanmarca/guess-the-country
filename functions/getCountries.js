// Default (no args): Returns array with one random country -> one element
// If arg is a function, returns array.filter(arg) -> likely several elements
// If arg is a number, retunrs array[arg] -> one element
export async function getCountries(arg) {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  if (typeof arg === "number") return [data[Math.floor(arg)]];
  if (typeof arg === "function") return data.filter(arg);
  if (typeof arg === "string" && arg === "random") {
    return [data[Math.floor(Math.random() * data.length)]];
  }
  return data;
}