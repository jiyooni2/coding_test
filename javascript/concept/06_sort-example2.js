const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let count = 0;
let arr1;
let arr2;
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else if (count === 1) {
    arr1 = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    arr2 = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = getMax(condition, arr1, arr2);
  console.log(result);
  process.exit(0);
});

function getMax(condition, arr1, arr2) {
  const [N, K] = condition;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    if (arr1[i] < arr2[i]) {
      arr1[i] = arr2[i];
    } else {
      break;
    }
  }

  return arr1.reduce((a, b) => a + b, 0);
}
