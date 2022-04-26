const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line.split("").map((value) => parseInt(value));
  rl.close();
}).on("close", () => {
  const result = getBiggest(input);
  console.log(result);
  process.exit(0);
});

function getBiggest(input) {
  for (let i = 0; i < input.length - 1; i++) {
    const a = input[i];
    const b = input[i + 1];

    input[i + 1] = Math.max(a + b, a * b);
  }

  return input[input.length - 1];
}
