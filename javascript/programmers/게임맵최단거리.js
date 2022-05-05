function solution(maps) {
  let row = maps.length;
  let col = maps[0].length;

  var answer = 0;

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  let isFind = false;

  let queue = [];
  queue.push([0, 0, 1]);
  maps[0][0] = 0;

  while (queue.length >= 1) {
    let [x, y, step] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < row && 0 <= ny && ny < col && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, step + 1]);
      }
    }

    if (x === row - 1 && y === col - 1) {
      isFind = true;
      answer = step;
      break;
    }
  }
  if (!isFind) {
    return -1;
  }

  return answer;
}

/*
방문체크는 항상 넣을때 하자!!!
 */
