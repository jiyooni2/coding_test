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
  const result = countThree(N);
  const result2 = countThreeSol(N);
  console.log(result);
  console.log(result2);
  process.exit(0);
});

//O(1), 경우의 수
function countThree(N) {
  let result = 0;
  for (let i = 0; i <= N; i++) {
    i = i.toString();
    if (i.includes("3")) {
      result += 3600;
    } else {
      result += 1575;
    }
  }
  return result;
}

//데이터가 백만개 이하라면 시도해볼만 함
function countThreeSol(N) {
  let result = 0;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        const time = i.toString() + j.toString() + k.toString();
        if (time.includes("3")) {
          result++;
        }
      }
    }
  }

  return result;
}

/* 
문자열 => 숫자 : parseInt(value)
숫자 => 문자열 : string.toString(), String(string)
문자열이 포함하는지 여부를 검사 : includes
*/
