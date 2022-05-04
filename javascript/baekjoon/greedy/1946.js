const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const T = parseInt(input.shift());
  let N = [];
  let rank = [];
  let k = 0;

  while (input.length > 0) {
    N.push(parseInt(input.shift()));
    let temp = [];
    for (let i = 0; i < N[k]; i++) {
      temp.push(
        input
          .shift()
          .split(" ")
          .map((value) => parseInt(value))
      );
    }
    rank.push(temp);
    k++;
  }

  for (let i = 0; i < T; i++) {
    const result = func(N[i], rank[i]);
    console.log(result);
  }

  process.exit(0);
});

function func(N, rank) {
  let result = 0;
  rank.sort((a, b) => a[0] - b[0]);

  //현재까지 들어간것중 두번째의 minRank
  let minRank = Infinity;

  for (let i = 0; i < N; i++) {
    if (rank[i][1] < minRank) {
      result++;
      minRank = rank[i][1];
    }
  }

  return result;
}
