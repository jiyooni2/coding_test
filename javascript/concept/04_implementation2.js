const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  //a : 1
  input.push(parseInt(line[0].charCodeAt() - 96));
  input.push(parseInt(line[1]));
}).on("close", () => {
  const result = knight(input);
  console.log(result);
  process.exit(0);
});

const dx = [-2, -2, 1, -1, 2, 2, 1, -1];
const dy = [1, -1, 2, 2, 1, -1, -2, -2];

function knight(input) {
  const [x, y] = input;
  let result = 0;
  for (const index in dx) {
    nx = x + dx[index];
    ny = y + dy[index];

    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) continue;
    else {
      result += 1;
    }
  }

  return result;
}
