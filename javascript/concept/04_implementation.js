const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input;
let inputCount = 0;
//R, D, L ,U
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const moveTypes = ["R", "D", "L", "U"];

rl.on("line", (line) => {
  if (inputCount === 0) {
    N = parseInt(line);
    inputCount++;
  } else {
    input = line.split(" ");
    rl.close();
  }
}).on("close", () => {
  const [x, y] = getRoute(N, input);
  const [x2, y2] = getRouteSol(N, input);
  console.log(x, y);
  console.log(x2, y2);
  process.exit(0);
});

function getRoute(N, input) {
  let x = 1;
  let y = 1;

  for (const move of input) {
    for (const index in moveTypes) {
      if (move === moveTypes[index]) {
        if (
          x + dx[index] > N ||
          x + dx[index] < 1 ||
          y + dy[index] > N ||
          y + dy[index] < 1
        ) {
          continue;
        } else {
          x += dx[index];
          y += dy[index];
        }
      }
    }
  }

  return [x, y];
}

function getRouteSol(N, input) {
  let x = 1;
  let y = 1;
  let nx, ny;

  for (const move of input) {
    for (const index in moveTypes) {
      if (move === moveTypes[index]) {
        nx = x + dx[index];
        ny = y + dy[index];
      }
      if (nx < 1 || nx > N || ny < 1 || ny > N) continue;
      x = nx;
      y = ny;
    }
  }

  return [x, y];
}

/* 
시간복잡도 : O(N)

dx,dy,moveType을 array로 지정
x와 y축에 대해서 먼저 잘 정의하고 들어가기

y : column 이동
x : row 이동
각 지점의 좌표를 뭐라 정의하느냐에 따라 잘 생각하자
*/
