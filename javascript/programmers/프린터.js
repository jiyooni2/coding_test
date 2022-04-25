function solution(priorities, location) {
  let answer = 0;

  //location : 0->3
  while (true) {
    const highest = Math.max(...priorities);
    const highestIndex = priorities.findIndex((value) => value === highest);
    answer++;

    const front = priorities.slice(0, highestIndex);
    const back = priorities.slice(highestIndex + 1, priorities.length);
    priorities = back.concat(front);

    if (highestIndex === location) {
      break;
    } else if (location < highestIndex) {
      location += back.length;
    } else {
      location -= front.length + 1;
    }
  }

  return answer;
}
