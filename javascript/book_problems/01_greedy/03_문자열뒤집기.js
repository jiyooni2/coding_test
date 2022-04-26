const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line.split("").map((value) => parseInt(value));
  rl.close();
}).on("close", () => {
  const result = flip(input);
  console.log(result);
  process.exit(0);
});

function flip(input) {
  //더 적은 것중 가장 큰 덩어리를 찾아서, 뒤집는다.
  let oneCount = 0;
  let zeroCount = 0;
  //group을 구하는 것 뭉텅이로

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] !== input[i]) {
      if (input[i - 1] === 0) {
        zeroCount++;
      } else {
        oneCount++;
      }
    }
  }

  return Math.max(oneCount, zeroCount);
}
