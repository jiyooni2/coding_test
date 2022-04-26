//17:10~17:30

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N;
let input;
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else {
    input = line.split(" ").map((value) => parseInt(value));
    rl.close();
  }
}).on("close", () => {
  const result = getGroups(N, input);
  console.log(result);
  process.exit(0);
});

function getGroups(N, input) {
  let result = 0;
  input.sort();

  let personInGroup = 1;
  for (let index = 0; index < N; index++) {
    const need = input[index];
    if (need === personInGroup) {
      result++;
      personInGroup = 1;
    } else {
      personInGroup++;
    }
  }
  return result;
}
