function solution(s) {
  s = s
    .slice(2, -2)
    .replace(/},{/gi, "|")
    .split("|")
    .map((value) => value.split(",").map((value) => parseInt(value)))
    .sort((a, b) => a.length - b.length);

  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    s[i].forEach((value) => set.add(value));
  }

  let answer = [...set];

  return answer;
}
