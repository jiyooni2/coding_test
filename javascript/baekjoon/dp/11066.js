//미완성

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase;
let count = 0;
let condition = [];
let input = [];

rl.on("line", (line) => {
  if (count === 0) {
    testCase = parseInt(line);
    count++;
  } else {
    if (count % 2 === 1) {
      condition.push(parseInt(line));
      count++;
    } else {
      input.push(line.split(" ").map((value) => parseInt(value)));
      count++;
    }
  }
}).on("close", () => {
  let result = 0;
  for (let i = 0; i < testCase; i++) {
    result = mergeFile(testCase, condition[i], input[i]);
    console.log(result);
  }

  process.exit(0);
});

function mergeFile(testCase, condition, input) {
  const K = condition;

  const dp = Array.from(Array(K), () => new Array(K).fill(-1));
  const cost = Array.from(Array(K), () => new Array(K).fill(-1));

  for (let i = 0; i < K; i++) {
    dp[i][i] = input[i];
  }

  for (let i = 0; i + 1 < K; i++) {
    dp[i][i + 1] = input[i] + input[i + 1];
  }

  for (let i = K; i >= 0; i--) {
    for (let j = 2; i + j < K; j++) {
      dp[i][i + j] = Math.min(
        dp[i][i + j - 1] + input[i + j],
        dp[i + 1][i + j] + input[i]
      );
    }
  }

  for (let i = 0; i < K; i++) {
    cost[i][i] = dp[i][i];
  }

  for (let i = 0; i + 1 < K; i++) {
    cost[i][i + 1] = dp[i][i + 1];
  }

  for (let i = K; i >= 0; i--) {
    for (let j = 2; i + j < K; j++) {
      cost[i][i + j] = Math.min(
        dp[i][i + j] + cost[i][i + j - 1],
        dp[i][i + j] + cost[i + 1][i + j]
      );
    }
  }

  let result = Infinity;

  for (let i = 0; i < K - 1; i++) {
    result = Math.min(
      cost[0][i] + cost[i + 1][K - 1] + dp[0][i] + dp[i + 1][K - 1],
      result
    );
    console.log(result);
  }
  result = Math.min(cost[0][K - 1], result);

  console.log(cost);

  console.log(dp);

  return result;
}
