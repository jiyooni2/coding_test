const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let X;
rl.on("line", (line) => {
  X = parseInt(line);
  rl.close();
}).on("close", () => {
  const result = makeOne(X);
  console.log(result);

  process.exit(0);
});

function makeOne(X) {
  let d = Array(30001).fill(0);

  //X가 1부터 X일때 까지의 모든 결과값을 다 구한다.
  //1은 결과가 0
  //2는 결과가 1
  //3은 결과가 2
  //4는 2에서 2를 곱하는 연산을 한 +1, 또는 3에서 1을 더하는 연산을 한 +1 중 적은 것 choose

  //만약 이렇게 안했다면, 26이 주어졌을 때, 1에서부터 모든 연산을 다 해보며 올라와야 함

  for (let i = 2; i <= X; i++) {
    //1을 더하는 경우
    d[i] = d[i - 1] + 1;

    //2를 곱하는 경우
    if (i % 2 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 2)] + 1);
    }

    if (i % 3 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 3)] + 1);
    }

    if (i % 5 === 0) {
      d[i] = Math.min(d[i], d[parseInt(i / 5)] + 1);
    }
  }

  return d[X];
}
