const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let count = 0;
let input = [];
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    let temp = line.split(" ");
    let tempObj = { name: temp[0], score: parseInt(temp[1]) };
    input.push(tempObj);
  }
}).on("close", () => {
  const result = sortObj(N, input);
  console.log(result);
  process.exit(0);
});

function sortObj(N, input) {
  input.sort((a, b) => a.score - b.score);
  input = input.map((value) => value.name);
  return input;
}
