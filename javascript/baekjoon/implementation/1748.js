const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

rl.on("line", (line) => {
  N = line;
}).on("close", () => {
  const result = func(N);
  console.log(result);

  process.exit(0);
});

function func(N) {
  const digit = N.length;
  let result = 0;

  for (let i = 1; i < digit; i++) {
    result += 9 * Math.pow(10, i - 1) * i;
  }

  result += (parseInt(N) + 1 - Math.pow(10, digit - 1)) * digit;

  return result;
}
