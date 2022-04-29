const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let money = [];
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    money.push(parseInt(line));
  }
}).on("close", () => {
  const result = getMin(condition, money);
  console.log(result);

  process.exit(0);
});

function getMin(condition, money) {
  const [N, M] = condition;

  let d = Array(M + 1).fill(-1);

  d[0] = 0;

  for (let i = 0; i < N; i++) {
    if (money[i] <= M) {
      d[money[i]] = 1;
    }
  }

  for (let i = 0; i <= M; i++) {
    for (let j = 0; j < N; j++) {
      if (0 <= i - money[j]) {
        if (d[i - money[j]] !== -1) {
          if (d[i] === -1) {
            d[i] = d[i - money[j]] + 1;
          } else {
            d[i] = Math.min(d[i], d[i - money[j]] + 1);
          }
        }
      }
    }
  }

  console.log(d);

  return d[M];
}
