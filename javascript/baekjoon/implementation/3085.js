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
    input.push(line.split(""));
  }
}).on("close", () => {
  const result = candy(N, input);
  console.log(result);
  process.exit(0);
});

function candy(N, input) {
  let result = 0;

  function checkColMaxLength(x, y) {
    let upside = 0;
    let downside = 0;

    //윗방향
    for (let i = x; i > 0; i--) {
      if (input[i][y] === input[i - 1][y]) {
        upside++;
      } else {
        break;
      }
    }
    for (let i = x; i < N - 1; i++) {
      if (input[i][y] === input[i + 1][y]) {
        downside++;
      } else {
        break;
      }
    }

    return 1 + upside + downside;
  }

  function checkRowMaxLength(x, y) {
    let leftSide = 0;
    let rightSide = 0;

    //left side
    for (let j = y; 0 < j; j--) {
      if (input[x][j] === input[x][j - 1]) {
        leftSide++;
      } else {
        break;
      }
    }

    for (let j = y; j < N - 1; j++) {
      if (input[x][j] === input[x][j + 1]) {
        rightSide++;
      } else {
        break;
      }
    }
    return 1 + leftSide + rightSide;
  }

  let dx = [0, -1, 1, 0];
  let dy = [-1, 0, 0, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const c = checkColMaxLength(i, j);
      const d = checkRowMaxLength(i, j);

      for (let index in dx) {
        nx = i - dx[index];
        ny = j - dy[index];

        if (
          0 <= nx &&
          nx < N &&
          0 <= ny &&
          ny < N &&
          input[i][j] !== input[nx][ny]
        ) {
          [input[nx][ny], input[i][j]] = [input[i][j], input[nx][ny]];
          const a = checkColMaxLength(nx, ny);
          const b = checkRowMaxLength(nx, ny);
          [input[nx][ny], input[i][j]] = [input[i][j], input[nx][ny]];

          result = Math.max(a, b, c, d, result);
        }
      }
    }
  }
  return result;
}
