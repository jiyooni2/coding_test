let input = [
  [0, 1],
  [2, 1],
  [1, 2],
];

console.log(func(input));

function func(input) {
  let maxDist = 0;
  let nx1, nx2, ny1, ny2;
  let notIndex;
  for (let i = 0; i < input.length; i++) {
    let x1 = input[i][0];
    let x2 = input[(i + 1) % 3][0];
    let y1 = input[i][1];
    let y2 = input[(i + 1) % 3][1];

    let dist = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);

    if (dist > maxDist) {
      maxDist = dist;
      nx1 = x1;
      ny1 = y1;
      nx2 = x2;
      ny2 = y2;
      notIndex = (i + 2) % 3;
    }
  }

  let centerX = (nx1 + nx2) / 2;
  let centerY = (ny1 + ny2) / 2;

  let x = input[notIndex][0];
  let y = input[notIndex][1];

  return [2 * centerX - x, 2 * centerY - y];
}
