//DP써야 풀 수 있음, 다시 풀이

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let map = [];
let condition;

rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    map.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = func(condition);

  process.exit(0);
});

let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];
let result = 0;

function dfs(row, col, x, y) {
  if (x === row - 1 && y === col - 1) {
    result++;
    return;
  }

  for (let index in dx) {
    let nx = x + dx[index];
    let ny = y + dy[index];
    if (0 <= nx && nx < row && 0 <= ny && ny < col && map[nx][ny] < map[x][y]) {
      dfs(row, col, nx, ny);
    }
  }
}

function func(condition) {
  const [row, col] = condition;

  let x = 0;
  let y = 0;

  dfs(row, col, x, y);

  console.log(result);
}
