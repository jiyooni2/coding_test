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
  const result = getMin(N, input);
  console.log(result);

  process.exit(0);
});

function getMin(N, input) {
  let sum = input.reduce((a, b) => a + b);
  let num = input.length;

  input.sort((a, b) => a - b);

  if (input[0] >= 2) {
    return 1;
  }

  let X = 0;
  let oldA = 0;
  let oldB = 0;

  for (let index in input) {
    let a = input[index];
    let b = X + input[index];

    if (index != 0) {
      if (oldB + 1 < a) {
        return oldB + 1;
      } else {
        oldA = a;
        oldB = b;
        X += input[index];
      }
    } else {
      oldA = a;
      oldB = b;
      X += input[index];
    }
  }

  return X + 1;
}
