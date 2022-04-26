function solution(n, lost, reserve) {
  let originalLost = lost;

  lost = lost.filter((x) => !reserve.includes(x));
  reserve = reserve.filter((x) => !originalLost.includes(x));
  lost.sort();
  let answer = n - lost.length;

  for (let index = 0; index < lost.length; index++) {
    const a = reserve.findIndex((item2) => item2 === lost[index] - 1);
    if (a != -1) {
      answer++;
      reserve.splice(a, 1);
    } else {
      const b = reserve.findIndex((item2) => item2 === lost[index]);
      if (b != -1) {
        answer++;
        reserve.splice(b, 1);
      } else {
        const c = reserve.findIndex((item2) => item2 === lost[index] + 1);
        if (c != -1) {
          answer++;
          reserve.splice(c, 1);
        }
      }
    }
  }

  return answer;
}

function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
