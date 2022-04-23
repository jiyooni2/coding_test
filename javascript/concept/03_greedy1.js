const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const result = lawOfGreatNumbers(input[0], input[1]);
  const result2 = greedy(input[0], input[1]);
  console.log(result);
  console.log(result2);
  process.exit(0);
});

//O(1) : sort별도
function lawOfGreatNumbers(condition, list) {
  let [N, M, K] = condition;
  let result = 0;
  list.sort((a, b) => b - a);

  const count = parseInt(M / (K + 1));
  const remainder = M % (K + 1);

  result += list[0] * (count * K + remainder);
  result += list[1] * count;

  return result;
}

//O(M), sort별도
function greedy(condition, list) {
  let [N, M, K] = condition;
  let result = 0;
  list.sort((a, b) => b - a);

  while (true) {
    for (let i = 0; i < K; i++) {
      if (M == 0) break;

      result += list[0];
      M -= 1;
    }
    if (M == 0) break;

    result += list[1];
    M -= 1;
  }

  return result;
}
