const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line.split(" ").map((value) => parseInt(value));
}).on("close", () => {
  const result = convert(input);
  console.log(result);
  process.exit(0);
});

function convert(input) {
  let [A, B] = input;
  let result = 1;

  while (B % 1 === 0 && B > A) {
    if (B % 2 === 1) {
      B = (B - 1) / 10;
      result++;
    } else {
      B = B / 2;
      result++;
    }
  }

  if (B === A) {
    return result;
  } else {
    return -1;
  }
}
