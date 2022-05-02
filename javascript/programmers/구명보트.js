function solution(people, limit) {
  var answer = 0;

  // const lightest=Math.min(...people);

  //     answer+=people.filter(value=>value>limit-lightest).length;
  //     people=people.filter(value=>value<=limit-lightest);

  people.sort((a, b) => a - b);

  let lt = 0;
  let rt = people.length - 1;

  while (lt <= rt) {
    if (lt === rt) {
      answer++;
      break;
    }

    if (people[lt] + people[rt] <= limit) {
      lt++;
      rt--;
      answer++;
    } else {
      rt--;
      answer++;
    }
  }

  return answer;
}
