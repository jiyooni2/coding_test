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
  let [A, B] = condition;

  let input = [];
  let i = 1;
  while (input.length <= B) {
    for (let j = 0; j < i; j++) {
      input.push(i);
    }
    i++;
  }

  let result = 0;
  for (let k = A - 1; k < B; k++) {
    result += input[k];
  }

  return result;
}
