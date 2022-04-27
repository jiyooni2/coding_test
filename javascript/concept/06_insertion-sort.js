const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

insertionSort(array);
console.log(array);

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; 0 <= j; j--) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        break;
      }
    }
  }
}
