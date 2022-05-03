const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input = [];
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  let time = 0;
  let result = 0;

  input.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  for (let i = 0; i < N; i++) {
    if (input[i][0] >= time) {
      result++;
      time = input[i][1];
    }
  }

  return result;
}
