function solution(n) {
  var answer = [];
  let arr = Array.from(new Array(n), () => new Array(n).fill(-1));

  let number = (n * (n + 1)) / 2;

  let dx = [1, 0, -1];
  let dy = [0, 1, -1];

  let x = 0;
  let y = 0;
  arr[0][0] = 1;
  let num = 2;
  let index = 0;

  while (num <= number) {
    let nx = x + dx[index];
    let ny = y + dy[index];
    if (0 <= nx && nx < n && 0 <= ny && ny < n && arr[nx][ny] == -1) {
      x = nx;
      y = ny;
      arr[nx][ny] = num;
      num++;
    } else {
      index = (index + 1) % 3;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(arr[i][j]);
    }
  }

  return answer;
}
