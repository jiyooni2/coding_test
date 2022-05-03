const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let coins = [];
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    coins.push(parseInt(line));
  }
}).on("close", () => {
  const result = func(condition, coins);
  console.log(result);

  process.exit(0);
});

function func(condition, coins) {
  let [N, K] = condition;
  let result = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= K) {
      result += parseInt(K / coins[i]);
      K = K % coins[i];
    }
  }

  return result;
}
