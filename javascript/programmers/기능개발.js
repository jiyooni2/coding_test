function solution(progresses, speeds) {
  var answer = [];
  const remainDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  for (let i = 0; i < remainDays.length; i++) {
    let result = 1;
    let k = i;
    for (let j = i + 1; j < remainDays.length; j++) {
      if (remainDays[k] >= remainDays[j]) {
        result++;
        i++;
      } else {
        break;
      }
    }
    answer.push(result);
  }
  return answer;
}

//sol
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
