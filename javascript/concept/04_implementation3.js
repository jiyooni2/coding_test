const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let mapSize;
let firstPoint;
const map = [];
rl.on("line", (line) => {
  if (count === 0) {
    mapSize = line.split(" ").map((value) => parseInt(value));
    count++;
  } else if (count === 1) {
    firstPoint = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    map.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = game(mapSize, firstPoint, map);
  console.log(result);
  process.exit(0);
});

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function game(mapSize, firstPoint, map) {
  const [N, M] = mapSize;
  let [x, y, d] = firstPoint;

  map[x][y] = 2;
  let result = 1;
  while (true) {
    let isMove = false;

    for (let i = 0; i < 4; i++) {
      d = (d + 3) % 4;
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (map[nx][ny] === 0 && nx >= 0 && nx < M && ny >= 0 && ny < N) {
        result += 1;

        isMove = true;
        x = nx;
        y = ny;

        //visited
        map[x][y] = 2;
        break;
      }
    }

    if (!isMove) {
      x = x + dx[(d + 2) % 4];
      y = y + dy[(d + 2) % 4];
      // x = x - dx[d];
      // y = y - dy[d];

      if (map[x][y] === 1 || x < 0 || x >= M || y < 0 || y > N) {
        break;
      }
    }
    console.log(x, y, d);
    console.log(map);
  }
  return result;
}
