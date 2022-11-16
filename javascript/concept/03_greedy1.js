/* 
큰 수의 법칙
다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수 만듦
배열의 특정 인덱스에 해당하는 수가 K번 초과해서 더할 수 없음


입력
배열의 크기, 숫자가 더해지는 횟수, K
5 8 3
2 4 5 4 6

6+6+6+5+6+6+6+5

출력
46
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const result = lawOfGreatNumbers(input[0], input[1]);
  const result2 = greedy(input[0], input[1]);
  console.log(result);
  console.log(result2);
  process.exit(0);
});

//O(1) : sort별도
function lawOfGreatNumbers(condition, list) {
  let [N, M, K] = condition;
  let result = 0;
  list.sort((a, b) => b - a);

  const count = parseInt(M / (K + 1));
  const remainder = M % (K + 1);

  result += list[0] * (count * K + remainder);
  result += list[1] * count;

  return result;
}

//O(M), sort별도
function greedy(condition, list) {
  let [N, M, K] = condition;
  let result = 0;
  list.sort((a, b) => b - a);

  while (true) {
    for (let i = 0; i < K; i++) {
      if (M == 0) break;

      result += list[0];
      M -= 1;
    }
    if (M == 0) break;

    result += list[1];
    M -= 1;
  }

  return result;
}
