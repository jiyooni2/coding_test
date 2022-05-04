const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T;
let count = 0;
let input = [];

rl.on("line", (line) => {
  if (count === 0) {
    T = parseInt(line);
    count++;
  } else {
    input.push(parseInt(line));
  }
}).on("close", () => {
  const result = func(T, input);

  process.exit(0);
});

function func(T, input) {
  let max = Math.max(...input);
  let fibo = [0, 1];

  let i = 1;
  while (fibo[i] < max) {
    fibo[i + 1] = fibo[i] + fibo[i - 1];
    i++;
  }

  for (let i = 0; i < T; i++) {
    let number = input[i];
    let answer = [];

    for (let j = fibo.length - 1; j >= 0; j--) {
      if (fibo[j] <= number && number > 0) {
        number -= fibo[j];
        answer.push(fibo[j]);
      }
    }
    console.log(answer.reverse().join(" "));
  }
}
