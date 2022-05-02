function solution(answers) {
  var answer = [];
  let correctA = 0;
  let correctB = 0;
  let correctC = 0;

  let bList = [1, 3, 4, 5];
  let cList = [3, 1, 2, 4, 5];

  for (let i = 0; i < answers.length; i++) {
    let a, b, c;
    a = (i % 5) + 1;

    if (i % 2 == 0) {
      b = 2;
    } else {
      b = bList[((i + 1) / 2 - 1) % 4];
    }

    c = cList[parseInt(i / 2) % 5];

    if (answers[i] === a) {
      correctA++;
    }
    if (answers[i] === b) {
      correctB++;
    }
    if (answers[i] === c) {
      correctC++;
    }
  }

  let maxValue = Math.max(correctA, correctB, correctC);

  if (maxValue === correctA) {
    answer.push(1);
  }
  if (maxValue === correctB) {
    answer.push(2);
  }
  if (maxValue === correctC) {
    answer.push(3);
  }

  return answer;
}
