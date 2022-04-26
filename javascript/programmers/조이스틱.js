//다시한번 살펴보자 너무 더럽다

function solution(name) {
  let answer = 0;

  let maxCount = 0;
  let count = 0;
  let first, maxFirst, maxLast;

  for (const i in name) {
    answer += Math.min(
      name[i].charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - name[i].charCodeAt() + 1
    );

    if (name[i] === "A") {
      if (count === 0) {
        first = i;
      }
      count++;
      if (count > maxCount) {
        maxCount = count;
        maxFirst = parseInt(first);
        maxLast = parseInt(i);
      }
    } else {
      count = 0;
    }
  }

  if (answer === 0) {
    return 0;
  }

  let firstOfLast;

  for (let i = name.length - 1; i >= 0; i--) {
    if (name[i] === "A") {
      firstOfLast = i;
    } else {
      break;
    }
  }
  if (!firstOfLast) {
    firstOfLast = name.length;
  }

  if (maxFirst !== undefined) {
    if (maxFirst === 0) {
      console.log(name.length - 1 - firstOfLast);
      answer += Math.min(name.length - maxLast - 1, firstOfLast - 1);
    } else if (maxLast === name.length - 1) {
      answer += Math.min(maxFirst - 1);
    } else {
      answer += Math.min(
        (maxFirst - 1) * 2 + (name.length - maxLast - 1),
        (name.length - maxLast - 1) * 2 + (maxFirst - 1),
        firstOfLast - 1
      );
    }
  } else {
    answer += firstOfLast - 1;
  }

  return answer;
}
