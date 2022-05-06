const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input;
let N;

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

function func(N, arr) {
  let dp = Array.from(new Array(N), () => new Array(N));
  let max = Array.from(new Array(N), () => new Array(N));

  for (let i = 0; i < N; i++) {
    dp[i][i] = 1;
  }

  for (let i = 0; i < N; i++) {
    max[i][i] = arr[i];
  }

  for (let i = 0; i < N - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      max[i][i + 1] = arr[i + 1];
      dp[i][i + 1] = 2;
    } else {
      max[i][i + 1] = arr[i];
      dp[i][i + 1] = 1;
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = 2; i + j < N; j++) {
      if (arr[i + j] > arr[i + j - 1]) {
        dp[i][i + j] = Math.max(dp[i][i + j - 1] + 1, dp[i + 1][i + j]);
      } else {
        dp[i][i + j] = Math.max(dp[i][i + j - 1], dp[i + 1][i + j]);
      }
    }
  }

  console.log(dp);
}
