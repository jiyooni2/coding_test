const a = "9".repeat(1000000);
console.log("AA");
console.log(solution(a, 99));

function solution(number, k) {
  var answer = "";

  number = number.split("");

  while (k >= 1) {
    let maxDigit, maxDigitIndex;
    if (number[0] == 9) {
      maxDigit = 9;
      maxDigitIndex = 0;
    } else {
      maxDigit = -1;
      maxDigitIndex = -1;
      for (let i = 0; i < k + 1; i++) {
        if (maxDigit < number[i]) {
          maxDigit = number[i];
          maxDigitIndex = i;
        }
        if (maxDigit == 9) {
          break;
        }
      }
    }

    k = k - maxDigitIndex;
    answer += number[maxDigitIndex];
    number.splice(0, maxDigitIndex + 1);

    if (number.length == k) {
      number = [];
      break;
    }
  }

  for (let i = 0; i < number.length; i++) {
    answer += number[i];
  }

  return answer;
}
