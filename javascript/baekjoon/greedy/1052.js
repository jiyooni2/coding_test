const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line.split(" ").map((value) => parseInt(value));
}).on("close", () => {
  const result = bottle(input);
  console.log(result);
  process.exit(0);
});

function bottle(input) {
  let [N, K] = input;

  while (K > 1) {
    //N보다 작은 제일 큰 2의 제곱수를 구한다.
    if (Math.log2(N) % 1 === 0) {
      return 0;
    }
    let a = parseInt(Math.log2(N));
    let b = Math.pow(2, a);
    N = N - b;
    K--;
  }

  if (Math.log2(N) % 1 === 0) {
    return 0;
  }

  //K 1남았을 때 나보다 큰 첫번째의 2의 제곱수
  let a = parseInt(Math.log2(N)) + 1;
  let b = Math.pow(2, a);
  return b - N;
}
