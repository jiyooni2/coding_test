const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
let store;
let need;
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else if (count === 1) {
    store = line.split(" ").map((value) => parseInt(value));
    count++;
  } else if (count === 2) {
    M = parseInt(line);
    count++;
  } else {
    need = line.split(" ").map((value) => parseInt(value));
    rl.close();
  }
}).on("close", () => {
  const result = findPart(N, M, store, need);
  console.log(result);
  const result2 = findPartUsingSet(N, M, store, need);
  console.log(result2);
  process.exit(0);
});

//O(logN)
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

//find + sort
//O(M*logN + N*logN)
function findPart(N, M, store, need) {
  store.sort();
  let result = 0;
  for (const item of need) {
    if (binarySearch(store, item, 0, N - 1) !== -1) {
      result++;
    }
  }

  return result;
}

function findPartUsingSet(N, M, store, need) {
  const storeSet = new Set(store);
  let result = 0;

  for (const item of need) {
    if (storeSet.has(item)) {
      result++;
    }
  }

  return result;
}
