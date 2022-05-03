const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input = [];
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  N = 200000;
  input = new Array(N).fill([0, 1]);

  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  input.sort((a, b) => {
    return a[0] - b[0];
  });

  let time = [input[0][1]];
  let exCanPush = true;

  for (let i = 1; i < N; i++) {
    let canPush = false;

    for (let j = 0; j < time.length; j++) {
      if (time[j] <= input[i][0]) {
        time[j] = input[i][1];
        canPush = true;
        exCanPush = canPush;
        break;
      }
    }

    if (!canPush) {
      exCanPush = canPush;
      time.push(input[i][1]);
    }
  }

  let result = time.length;
  return result;
}
