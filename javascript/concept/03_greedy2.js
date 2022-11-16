/* 
숫자 카드게임

숫자가 쓰인 카드들이 N*M 으로 놓여있음
뽑고자 하는 카드가 포함된 행 선택
선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야함
처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let condition;
const input = [];
let inputCount = 0;

rl.on("line", (line) => {
  if (inputCount === 0) {
    condition = line.split(" ").map((value) => parseInt(value));
    inputCount++;
  } else {
    input.push(line.split(" ").map((value) => parseInt(value)));
  }
}).on("close", () => {
  const result = numberCardGame(condition, input);
  console.log(result);
  process.exit(0);
});

function numberCardGame(condition, input) {
  const [N, M] = condition;
  let result = -1;

  for (const row of input) {
    const rowMin = Math.min(...row);
    if (rowMin > result) {
      result = rowMin;
    }
  }

  return result;
}

/*
Sorting이 아닌 단순히 Math.min을 이용해서 해주자
    Sorting : NLogN, Min : N
Math.min(1,2,3,4,5) 이런식이므로, array인 경우에는 ... 연산자 사용

*/
