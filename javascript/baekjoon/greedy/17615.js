const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let count = 0;
let input;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  input.sort((a, b) => b - a);
  let sum = 0;
  let two = 0;

  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    two += parseInt(input[i] / 2);
  }

  if (sum % 3 === 0) {
    if (two < parseInt(sum / 3)) {
      return "NO";
    } else {
      return "YES";
    }
  } else {
    return "NO";
  }
}
