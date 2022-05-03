const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let input = [];

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(parseInt(line));
  }
}).on("close", () => {
  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  input.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < N; i++) {
    result += Math.abs(input[i] - (i + 1));
  }

  return result;
}
