const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let money;
rl.on("line", (line) => {
  money = parseInt(line);
  rl.close();
}).on("close", () => {
  const result = getCoin(money);
  console.log(result);
  process.exit(0);
});

function getCoin(money) {
  let result = 0;

  const coins = [500, 100, 50, 10];

  for (const coin of coins) {
    const coinNum = parseInt(money / coin);
    result += coinNum;
    money = money % coin;
  }

  return result;
}

/*
복잡도 분석
    O(K), coin 타입의 갯수에 대해서만 영향, 얼마이든 상관 없음

알고리즘 분석
    가지고 있는 동전중에서, 큰 단위가 항상 작은 단위의 배수이므로 작은 단위들의 동전들을 조합해 다른 해가 나올 수 없음
    따라서 탐욕법이 최적의 해를 보장
    
*/
