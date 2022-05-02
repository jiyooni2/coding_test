function solution(numbers) {
  var answer = "";

  numbers.sort((a, b) => {
    const compareA = parseInt(a.toString() + b.toString());
    const compareB = parseInt(b.toString() + a.toString());

    return compareB - compareA;
  });

  for (let number of numbers) {
    answer += number;
  }

  if (numbers[0] == "0") {
    return "0";
  }

  return answer;
}
