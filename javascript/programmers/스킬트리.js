function solution(skill, skill_trees) {
  var answer = 0;
  skill = skill.split("");

  for (let skillTree of skill_trees) {
    let isCorrect = true;
    let j = 0;
    for (let i = 0; i < skillTree.length; i++) {
      let index = skill.findIndex((value) => value === skillTree[i]);
      if (index !== -1) {
        if (index !== j) {
          isCorrect = false;
          break;
        } else {
          j++;
        }
      }
    }
    if (isCorrect) {
      answer++;
    }
  }

  return answer;
}
