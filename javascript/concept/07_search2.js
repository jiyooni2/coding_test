const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let input;
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = getMax(condition, input);
  console.log(result);
  process.exit(0);
});

function getMax(condition, input) {
  const [N, M] = condition;

  //start,end,mid는 절단기 칼 위치
  let start = 0;
  let end = Math.max(...input) - 1;
  let lastLength = 0;
  while (end >= start) {
    let mid = parseInt((start + end) / 2);
    let length = 0;

    for (let i = 0; i < N; i++) {
      if (input[i] > mid) {
        length += input[i] - mid;
      }
    }

    //더 필요, 자르는 위치를 더 왼쪽으로
    if (length === M) {
      return mid;
    } else if (length < M) {
      end = mid - 1;
      //이미 만족 어떻게 더 줄이지?
    } else {
      start = mid + 1;
      lastLength = mid;
    }
  }
  return lastLength;
}
