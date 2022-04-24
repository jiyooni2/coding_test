const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;

rl.on("line", (line) => {
  condition = line.split(" ").map((value) => parseInt(value));

  rl.close();
}).on("close", () => {
  const [N, K] = condition;
  const result = untilOne(N, K);
  console.log(result);
  process.exit(0);
});

function untilOne(N, K) {
  let result = 0;
  while (N !== 1) {
    let remainder = N % K;
    if (remainder === 0) {
      result += 1;
      N = N / K;
    } else {
      if (N < K) {
        remainder--;
      }
      result += remainder;
      N -= remainder;
    }
  }

  return result;
}

/*

시간복잡도가 log k(N)번 인가..??

*/
