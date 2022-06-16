const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let input = [];

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(line.split(" ").map((v) => parseInt(v)));
  }
}).on("close", () => {
  const result = solution(input);
  console.log(result * N);
  process.exit(0);
});

function solution(input) {
  const type = [];
  let next = [];

  for (let i = 0; i < 6; i++) {
    const count = input.filter((item) => item[0] === input[i][0]).length;

    if (count === 1) {
      type.push(input[i]);
      if (type.length === 2) {
        if (type.includes(input[(i + 1) % 6])) {
          next.push(input[(i + 3) % 6]);
          next.push(input[(i + 4) % 6]);
        } else {
          next.push(input[(i + 2) % 6]);
          next.push(input[(i + 3) % 6]);
        }

        const total = type[0][1] * type[1][1];
        const subtract = next[0][1] * next[1][1];

        return total - subtract;
      }
    }
  }
}
