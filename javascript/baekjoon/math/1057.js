const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;

rl.on("line", (line) => {
  condition = line.split(" ").map((value) => parseInt(value));
}).on("close", () => {
  const result = func(condition);
  console.log(result);

  process.exit(0);
});

function func(condition) {
  let [N, A, B] = condition;
  let round = 0;

  while (N > 1) {
    round++;
    if (A % 2 === 1 && B % 2 === 0 && A + 1 === B) {
      break;
    }
    if (A % 2 === 0 && B % 2 === 1 && B + 1 === A) {
      break;
    }
    //짝수
    if (N % 2 === 0) {
      N = parseInt(N / 2);
      A = Math.ceil(A / 2);
      B = Math.ceil(B / 2);

      //홀수
    } else {
      N = parseInt(N / 2) + 1;
      A = Math.ceil(A / 2);
      B = Math.ceil(B / 2);
    }
  }

  return round;
}
