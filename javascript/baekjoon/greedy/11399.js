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
  input.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < N; i++) {
    result += input[i] * (N - i);
  }

  return result;
}
