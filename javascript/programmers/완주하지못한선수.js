function solution(participant, completion) {
  var answer = "";

  //문자열 sorting
  participant = participant.sort();
  completion = completion.sort();

  for (const index in participant) {
    if (participant[index] !== completion[index]) {
      answer = participant[index];
      break;
    }
  }

  return answer;
}
