const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let cost = [];

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    cost.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = getMin(N, cost);
  console.log(result);
  process.exit(0);
});

function getMin(N, cost) {
  let d = Array.from(Array(N), () => new Array(3));

  d[0] = cost[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      d[i][j] =
        cost[i][j] + Math.min(d[i - 1][(j + 2) % 3], d[i - 1][(j + 1) % 3]);
    }
  }

  return Math.min(...d[N - 1]);
}
