const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
rl.on("line", (line) => {
  N = parseInt(line);
  rl.close();
}).on("close", () => {
  const result = getCase(N);
  console.log(result);

  process.exit(0);
});

function getCase(N) {
  let d = Array(N + 1).fill(0);
  d[1] = 1;
  d[2] = 3;
  for (let i = 3; i <= N; i++) {
    d[i] = d[i - 2] * 2 + d[i - 1];
  }

  console.log(d);

  return d[N];
}
