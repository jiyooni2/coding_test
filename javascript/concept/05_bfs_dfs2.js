const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let condition;
let input = [];
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    input.push(line.split("").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = findMiro(condition, input);
  console.log(result);
  process.exit(0);
});

function findMiro(condition, input) {
  const [N, M] = condition;
  let x = 0;
  let y = 0;

  let result = 0;

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  const queue = [[x, y, 1]];
  input[x][y] = 2;
  while (queue.length !== 0) {
    const [x, y, level] = queue.shift();
    for (let index in dx) {
      let nx = x + dx[index];
      let ny = y + dy[index];

      if (0 <= nx && nx < N && 0 <= ny && ny < M && input[nx][ny] === 1) {
        if (nx === N - 1 && ny === M - 1) {
          result = level + 1;
          break;
        }
        queue.push([nx, ny, level + 1]);
        input[nx][ny] = 2;
      }
      console.log(input, result, x, y);
    }
  }
  return result;
}
//solution
//모든 노드의 level을 구하는 것이 아니라, result까지 가는 길에 +를 해줄수도 있음
