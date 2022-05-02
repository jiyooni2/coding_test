function solution(array, commands) {
  var answer = [];

  for (const command of commands) {
    const [i, j, k] = command;

    const temp = array.slice(i - 1, j);
    temp.sort((a, b) => a - b);

    answer.push(temp[k - 1]);
  }
  return answer;
}
