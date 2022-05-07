const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input;
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
  }
}).on("close", () => {
  const result = func(N, input);
  console.log(result);

  process.exit(0);
});

function func(N, input) {
  let arr = new Array(N).fill(-1);
  for (let i = 0; i < N; i++) {
    let j = -1;
    for (let k = 0; k < N; k++) {
      if (arr[k] === -1) {
        j++;
        if (j === input[i]) {
          arr[k] = i + 1;
          break;
        }
      }
    }
  }

  return arr.join(" ");
}
