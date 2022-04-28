//메모리초과

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Math.min으로 다시해보자!
let count = 0;
let N;
const input = [];
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(parseInt(line));
  }
}).on("close", () => {
  const result = getMinCompare(N, input);
  console.log(result);
  process.exit(0);
});

function getMinCompare(N, input) {
  let result = 0;
  input.sort((a, b) => a - b);

  while (input.length > 1) {
    const a = input.shift();
    const b = input.shift();
    result += a + b;

    let index = input.findIndex((value) => result <= value);
    if (index === -1) {
      index = input.length;
    }
    const before = input.slice(0, index);
    const after = input.slice(index, input.length);
    input = before.concat([a + b]).concat(after);
  }
  return result;
}
