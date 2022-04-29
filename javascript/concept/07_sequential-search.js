const array = [10, 9, 8, 5, 7, 6, 4, 3, 2, 0, 1];

console.log(sequentialSearch(array.length, 4, array));
console.log(sequentialSearch(array.length, 12, array));

function sequentialSearch(n, target, array) {
  for (let i = 0; i < n; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
