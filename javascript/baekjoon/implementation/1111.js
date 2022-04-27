const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input;
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = test(N, input);
  console.log(result);
  process.exit(0);
});

function test(N, input) {
  if (N < 3) {
    if (input[0] === input[1]) {
      const a1 = 1;
      const a2 = 0;
      const b1 = 0;
      const b2 = input[0];

      const result1 = input[1] * a1 + b1;
      const result2 = input[1] * a2 + b2;

      if (result1 === result2) {
        return result1;
      } else {
        return "A";
      }
    } else {
      return "A";
    }
  }

  const x = input[0];
  const y = input[1];
  const z = input[2];

  let a, b;
  if (y - x === 0) {
    if (z - y === 0) {
      a = 0;
      b = y - a * x;
    } else {
      return "B";
    }
  } else {
    a = (z - y) / (y - x);
    b = y - a * x;
  }

  if (a % 1 !== 0 || b % 1 !== 0) {
    return "B";
  }
  for (let i = 0; i < N - 1; i++) {
    if (input[i + 1] !== input[i] * a + b) {
      return "B";
    }
  }

  return input[N - 1] * a + b;
}
