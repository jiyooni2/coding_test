const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];
let N;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(line.split("").reverse());
  }
}).on("close", () => {
  const result = getMax(N, input);
  console.log(result);

  process.exit(0);
});

function getMax(N, input) {
  let maxLength = 0;
  for (let i = 0; i < N; i++) {
    maxLength = Math.max(input[i].length, maxLength);
  }

  let countObj = {};

  for (let j = 0; j < maxLength; j++) {
    for (let i = 0; i < N; i++) {
      if (input[i][j] !== undefined) {
        if (input[i][j] in countObj) {
          countObj[input[i][j]] += Math.pow(10, j);
        } else {
          countObj[input[i][j]] = Math.pow(10, j);
        }
      }
    }
  }

  const list = [];
  for (let count in countObj) {
    list.push([count, countObj[count]]);
  }

  list.sort((a, b) => b[1] - a[1]);

  let result = 0;

  for (let index in list) {
    result += list[index][1] * (9 - index);
  }

  return result;
}
