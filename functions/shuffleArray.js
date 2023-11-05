export function shuffleArray(arr) {
  const output = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    const index = Math.floor(Math.random() * arr.length);
    output.push(arr.splice(index, 1)[0]);
  }
  return output;
}

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const shuffled = shuffleArray(arr);
// console.log(arr, shuffled);