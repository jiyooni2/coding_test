const array = [10, 9, 8, 5, 7, 6, 4, 3, 2, 0, 1];
array.sort();

const result = incursiveBinarySearch(array, 4, 0, array.length - 1);
console.log(result);

const result2 = binarySearch(array, 4, 0, array.length - 1);
console.log(result2);

function incursiveBinarySearch(array, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = parseInt((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return incursiveBinarySearch(array, target, start, mid - 1);
  } else {
    return incursiveBinarySearch(array, target, mid + 1, end);
  }
}

function binarySearch(array, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
