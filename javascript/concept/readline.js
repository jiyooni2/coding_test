const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  console.log(`Received Line : ${line}`);
  rl.close();
}).on("close", () => {
  test(input);
  process.exit(0);
});

function test(input) {
  console.log(input);
}
