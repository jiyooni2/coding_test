const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
let count = 0;
let input = [];
rl.on("line", (line) => {
  if (count === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    count++;
  } else if (count === 1) {
    count++;
  } else {
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = func(condition, input);
  console.log(result);

  process.exit(0);
});

function func(condition, input) {
  let [width, height] = condition;
  let [dir, x] = input.pop();
  let oppositeDir;
  let leftDir;
  let rightDir;

  if (dir === 1) {
    oppositeDir = 2;
    leftDir = 4;
    rightDir = 3;
  } else if (dir === 2) {
    oppositeDir = 1;
    leftDir = 3;
    rightDir = 4;
  } else if (dir === 3) {
    oppositeDir = 4;
    leftDir = 1;
    rightDir = 2;
  } else {
    oppositeDir = 3;
    leftDir = 2;
    rightDir = 1;
  }

  let result = 0;

  for (let i = 0; i < input.length; i++) {
    let dir2 = input[i][0];
    let x2 = input[i][1];

    if (dir === 1 || dir === 2) {
      if (oppositeDir === dir2) {
        let d1 = x2 + x + height;
        let d2 = 2 * width - x - x2 + height;
        result += Math.min(d1, d2);
      } else if (dir === 2 && dir2 === leftDir) {
        result += x + height - x2;
      } else if (dir === 1 && dir2 === leftDir) {
        result += width - x2 + x;
      } else if (dir === 2 && dir2 === rightDir) {
        result += width - x + height - x2;
      } else if (dir === 1 && dir2 === rightDir) {
        result += x + x2;
      } else if (dir2 === dir) {
        result += Math.abs(x2 - x);
      }
    } else if (dir === 3 || dir === 4) {
      if (oppositeDir === dir2) {
        let d1 = x2 + width + x;
        let d2 = height - x2 + width + height - x;
        result += Math.min(d1, d2);
      } else if (dir === 3 && dir2 === leftDir) {
        result += x + x2;
      } else if (dir === 3 && dir2 === rightDir) {
        result += height - x2 + x;
      } else if (dir === 4 && dir2 === leftDir) {
        result += height - x + width - x2;
      } else if (dir === 4 && dir2 === rightDir) {
        result += x + width - x2;
      } else if (dir2 === dir) {
        result += Math.abs(x2 - x);
      }
    }
  }

  return result;
}
