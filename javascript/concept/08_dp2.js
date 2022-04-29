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
  const result = getMax(N, input);
  console.log(result);

  process.exit(0);
});

//array의 각 index에서는 각 index가 주어졌을때 최적의 해가 들어있는 것
function getMax(N, input) {
  input[1] = Math.max(input[0], input[1]);

  for (let i = 2; i < N; i++) {
    input[i] = Math.max(input[i - 1], input[i - 2] + input[i]);
  }

  console.log(input);

  return Math.max(input[N - 1], input[N - 2]);
}
