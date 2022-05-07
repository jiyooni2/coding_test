const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let input;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  input.sort((a, b) => a - b);

  if (N % 2 === 0) {
    return input[N / 2 - 1];
  } else {
    return input[parseInt(N / 2)];
  }
}
