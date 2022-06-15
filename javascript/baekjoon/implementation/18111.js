const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
const input = [];
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = solution(condition, input).join(" ");
  console.log(result);

  process.exit(0);
});

function solution(condition, input) {
  const [N, M, B] = condition;

  //   const totalBlock = Math.sum(...input.flat()) + B;
  let totalBlock = B;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      totalBlock += input[i][j];
    }
  }

  let leftBlock = B;

  const possibleMaxHeight = parseInt(totalBlock / (N * M));

  let solutionTime = Infinity,
    solutionFloor;

  for (let i = 0; i <= possibleMaxHeight; i++) {
    let time = 0;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        const diff = input[row][col] - i;
        if (diff < 0) {
          time += Math.abs(diff);
        } else if (diff > 0) {
          time += 2 * diff;
        }
      }
    }

    if (solutionTime >= time) {
      solutionTime = time;
      solutionFloor = i;
    }
  }

  return [solutionTime, solutionFloor];
}
