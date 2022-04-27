const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
console.log(array);

const sorted = selectionSort(array);
console.log(sorted);

//array는 pointer기 때문에, value by references, 원본도 바뀜에 주의!!!
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}
