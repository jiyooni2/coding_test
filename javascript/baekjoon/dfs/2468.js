const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let map = [];

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    map.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = func(N, map);
  console.log(result);

  process.exit(0);
});

function func(N, map) {
  //   const max = Math.max(...map.flat());

  let count = -1;

  for (let height = 0; height <= 100; height++) {
    let heightCount = 0;
    let visited = Array.from(Array(N), () => new Array(N).fill(false));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j] && height < map[i][j]) {
          dfs(i, j, N, map, visited, height);

          heightCount++;
        }
      }
    }

    count = Math.max(count, heightCount);
  }

  return count;
}

function dfs(x, y, N, map, visited, height) {
  visited[x][y] = true;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  for (let index in dx) {
    let nx = x + dx[index];
    let ny = y + dy[index];

    if (
      0 <= nx &&
      nx < N &&
      0 <= ny &&
      ny < N &&
      height < map[nx][ny] &&
      !visited[nx][ny]
    ) {
      dfs(nx, ny, N, map, visited, height);
    }
  }
}
