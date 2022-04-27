function bfs(graph, v, visited) {
  let queue = [v];
  visited[v] = true;

  while (queue.length !== 0) {
    let item = queue.shift();
    process.stdout.write(`${item} `);

    for (let neighbor of graph[item]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        //방문처리는 넣을때!!!
        visited[neighbor] = true;
      }
    }
  }
}

let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array(9).fill(false);
bfs(graph, 1, visited);
console.log();
