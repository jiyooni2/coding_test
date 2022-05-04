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
  const result = func(condition, map);
  console.log(result);

  process.exit(0);
});

let dx = [-1, -1, -1, 0, 1, 1, 1, 0];
let dy = [-1, 0, 1, 1, 1, 0, -1, -1];

function dfs(row, col, x, y) {
  map[x][y] = 2;
  for (let index in dx) {
    let nx = x + dx[index];
    let ny = y + dy[index];
    if (0 <= nx && nx < row && 0 <= ny && ny < col && map[nx][ny] === 1) {
      dfs(row, col, nx, ny);
    }
  }
}

function func(condition, map) {
  let [row, col] = condition;
  let result = 0;

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (map[x][y] === 1) {
        dfs(row, col, x, y);
        result++;
      }
    }
  }

  return result;
}
