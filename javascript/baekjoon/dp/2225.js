const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition = [];
rl.on("line", (line) => {
  condition = line.split(" ").map((value) => parseInt(value));
}).on("close", () => {
  const result = divideSum(condition);
  console.log(result);

  process.exit(0);
});

function divideSum(condition) {
  const [N, K] = condition;

  let dp = Array.from(Array(N), () => new Array(K).fill(BigInt(0)));

  for (let i = 0; i < N; i++) {
    dp[i][0] = BigInt(1);
  }

  for (let j = 1; j < K; j++) {
    dp[0][j] = dp[0][j - 1] + BigInt(1);
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < K; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  const result = Number(dp[N - 1][K - 1] % BigInt(1000000000));
  return result;
}
