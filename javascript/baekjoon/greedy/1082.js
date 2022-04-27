const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let price;
let N, M;
let count = 0;
rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
    count++;
  } else if (count === 1) {
    price = line.split(" ").map((value) => parseInt(value));
    count++;
  } else {
    M = parseInt(line);
  }
}).on("close", () => {
  const result = roomNumber(N, M, price);
  console.log(result);
  process.exit(0);
});

function roomNumber(N, M, price) {
  let result = "";
  let minPrice = Math.min(...price);
  let minPriceExceptZero = Math.min(...price.slice(1, N));
  if (M < minPriceExceptZero) {
    return "0";
  }

  let minIndex = price.lastIndexOf(minPrice);
  let minIndexExceptZero = price.lastIndexOf(minPriceExceptZero);

  //최대 자릿수
  let maxDigit = parseInt((M - minPriceExceptZero) / minPrice) + 1;

  //최대 자릿수의 최소금액
  let maxDigitMinPrice = minPriceExceptZero + minPrice * (maxDigit - 1);

  let diff = M - maxDigitMinPrice;
  if (diff > 0) {
    for (let j = 0; j < maxDigit; j++) {
      if (j === 0) {
        for (let i = N - 1; i >= minIndexExceptZero; i--) {
          if (
            minIndexExceptZero <= i &&
            diff >= price[i] - price[minIndexExceptZero]
          ) {
            result += i.toString();
            diff -= price[i] - price[minIndexExceptZero];
            break;
          }
        }
      } else {
        for (let i = N - 1; i >= minIndex; i--) {
          if (minIndex <= i && diff >= price[i] - price[minIndex]) {
            result += i.toString();
            diff -= price[i] - price[minIndex];
            break;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < maxDigit; i++) {
      if (i === 0) {
        result += minIndexExceptZero.toString();
      } else {
        result += minIndex.toString();
      }
    }
  }
  return result;
}
