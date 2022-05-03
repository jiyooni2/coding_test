const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let exp;

rl.on("line", (line) => {
  exp = line;
}).on("close", () => {
  const result = func(exp);
  console.log(result);

  process.exit(0);
});

function func(exp) {
  exp = exp.split("-");

  for (let i = 0; i < exp.length; i++) {
    if (exp[i].includes("+")) {
      let sum = 0;
      let temp = exp[i].split("+");

      for (let j = 0; j < temp.length; j++) {
        sum += parseInt(temp[j]);
      }

      exp[i] = sum;
    }
  }
  let result = parseInt(exp[0]);

  for (let i = 1; i < exp.length; i++) {
    result -= parseInt(exp[i]);
  }

  return result;
}
