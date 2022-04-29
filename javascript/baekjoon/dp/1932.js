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
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = getMax(N, input);
  console.log(result);

  process.exit(0);
});

function getMax(N, input) {
  let d = Array.from(Array(N), () => new Array(N));
  d[0][0] = input[0][0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      //i=2, j=0
      if (0 <= j - 1 && j - 1 <= i - 1 && 0 <= j && j <= i - 1) {
        d[i][j] = input[i][j] + Math.max(d[i - 1][j], d[i - 1][j - 1]);
      } else if (0 <= j - 1 && j - 1 <= i - 1) {
        d[i][j] = input[i][j] + d[i - 1][j - 1];
      } else {
        d[i][j] = input[i][j] + d[i - 1][j];
      }
    }
  }

  return Math.max(...d[N - 1]);
}
