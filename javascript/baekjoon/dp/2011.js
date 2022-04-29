const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//A=1, Z=26
let code;
rl.on("line", (line) => {
  code = line.split("").map((value) => BigInt(value));
  rl.close();
}).on("close", () => {
  const result = getCase(code);
  console.log(result);

  process.exit(0);
});

function getCase(code) {
  let d = new Array(code.length).fill(BigInt(0));

  if (code[0] == 0) {
    return 0;
  }
  d[0] = BigInt(1);

  for (let i = 1; i < code.length; i++) {
    if (code[i] == 0) {
      if (code[i - 1] == 0 || 2 < code[i - 1]) {
        return 0;
      }
      if (i - 2 < 0) {
        d[i] = BigInt(1);
      } else {
        d[i] = d[i - 2];
      }
    } else {
      //한문자 추가
      d[i] = d[i - 1];
      let temp = parseInt(code[i - 1].toString() + code[i].toString());
      if (10 <= temp && temp <= 26) {
        if (i == 1) {
          d[i] += BigInt(1);
        } else {
          //합쳐서 두문자로 만들 수 있는 경우
          d[i] += d[i - 2];
        }
      }
    }
  }

  const result = d[code.length - 1] % BigInt(1000000);
  return Number(result);
}
