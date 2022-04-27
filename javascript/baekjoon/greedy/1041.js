const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input;
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = dice(N, input);
  console.log(result);
  process.exit(0);
});

function dice(N, input) {
  let twoMinIndex = [
    [0, 1],
    [0, 4],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
    [4, 5],
  ];
  let twoMinValues = [];
  for (const indexes of twoMinIndex) {
    let temp = 0;
    for (const index of indexes) {
      temp += input[index];
    }
    twoMinValues.push(temp);
  }

  let threeMinIndex = [
    [0, 2, 4],
    [0, 3, 4],
    [0, 1, 3],
    [0, 1, 2],
    [1, 5, 2],
    [1, 5, 3],
    [4, 5, 2],
    [4, 5, 3],
  ];
  let threeValues = [];
  for (const indexes of threeMinIndex) {
    let temp = 0;
    for (const index of indexes) {
      temp += input[index];
    }
    threeValues.push(temp);
  }
  const threeMin = Math.min(...threeValues);
  const twoMin = Math.min(...twoMinValues);
  const oneMin = Math.min(...input);
  const sum = input.reduce((a, b) => a + b, 0);

  const top = 4 * threeMin + (N - 2) * twoMin * 4 + (N - 2) * (N - 2) * oneMin;
  const others = (4 * twoMin + (N - 2) * 4 * oneMin) * (N - 1);

  if (N === 1) {
    return sum - Math.max(...input);
  } else {
    return top + others;
  }
}
