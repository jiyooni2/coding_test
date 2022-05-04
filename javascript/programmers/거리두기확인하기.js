function getResult(place) {
  let dx1 = [-1, 0, 1, 0];
  let dy1 = [0, 1, 0, -1];
  let dx2 = [-1, 1, 1, -1];
  let dy2 = [1, 1, -1, -1];
  let dx3 = [-2, 0, 2, 0];
  let dy3 = [0, 2, 0, -2];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      if (place[x][y] === "P") {
        for (let index = 0; index < 5; index++) {
          let nx = x + dx1[index];
          let ny = y + dy1[index];
          if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && place[nx][ny] === "P") {
            return 0;
          }
        }
        for (let index = 0; index < 5; index++) {
          let nx = x + dx2[index];
          let ny = y + dy2[index];
          if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && place[nx][ny] === "P") {
            let nx2 = x + dx1[index];
            let ny2 = y + dy1[index];
            let nx3 = x + dx1[(index + 1) % 4];
            let ny3 = y + dy1[(index + 1) % 4];

            if (place[nx2][ny2] === "X" && place[nx3][ny3] === "X") {
            } else {
              return 0;
            }
          }
        }
        for (let index = 0; index < 5; index++) {
          let nx = x + dx3[index];
          let ny = y + dy3[index];
          if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && place[nx][ny] === "P") {
            let nx2 = x + dx1[index];
            let ny2 = y + dy1[index];

            if (place[nx2][ny2] === "X") {
            } else {
              return 0;
            }
          }
        }
      }
    }
  }
  return 1;
}

function solution(places) {
  var answer = [];

  for (let place of places) {
    answer.push(getResult(place));
  }

  return answer;
}
