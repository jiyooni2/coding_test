//DFS
//방문 가능한 모든 지점을 탐색

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let input = [];
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    input.push(line.split("").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = getCluster(condition, input);
  console.log(result);

  const result2 = solution(condition, input);
  console.log(result2);
  process.exit(0);
});

function getCluster(condition, input) {
  let [N, M] = condition;
  let result = 0;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 0) {
        //dfs
        let x = i;
        let y = j;
        let stack = [[x, y]];
        input[x][y] = 2;
        while (stack.length !== 0) {
          [x, y] = stack.pop();
          for (let index in dx) {
            let nx = x + dx[index];
            let ny = y + dy[index];
            if (0 <= nx && nx < N && 0 <= ny && ny < M && input[nx][ny] === 0) {
              stack.push([nx, ny]);
              //방문 처리는 항상 넣을때 해야된다는 걸 주의!!
              input[nx][ny] = 2;
            }
          }
        }

        result++;
      } else {
        continue;
      }
    }
  }

  console.log(input);

  return result;
}

//solution
function dfs(x, y) {
  let [N, M] = condition;
  if (x <= -1 || x >= N || y <= -1 || y > +M) {
    return false;
  }
  if (input[x][y] === 0) {
    input[x][y] = 1;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

function solution(condition, input) {
  let [N, M] = condition;
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j) === true) {
        result++;
      }
    }
  }
  return result;
}
