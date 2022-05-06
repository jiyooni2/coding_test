function recursive(target, numbers, index, cnt) {
  for (let i = index; i < numbers.length; i++) {
    let temp = target;
    temp -= numbers[i];
    if (temp == 0) {
      cnt++;
    } else if (temp > 0) {
      cnt += recursive(temp, numbers, i + 1, 0);
    } else {
      continue;
    }
  }
  return cnt;
}

function solution(numbers, target) {
  let sum = numbers.reduce((a, b) => a + b);
  let temp = (sum - target) / 2;

  numbers = numbers.filter((value) => value <= temp);

  let answer = recursive(temp, numbers, 0, 0);

  return answer;
}
