const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let A;
let B;
let N;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else if (count === 1) {
    A = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    B = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = func(N, A, B);
  console.log(result);

  process.exit(0);
});

function func(N, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < N; i++) {
    result += A[i] * B[i];
  }

  return result;
}
