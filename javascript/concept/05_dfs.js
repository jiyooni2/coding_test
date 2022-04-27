function dfs(graph, v, visited) {
  //현재 노드 방문 처리
  visited[v] = true;
  //방문과 동시에 print
  process.stdout.write(`${v} `);

  //인접노드 중에서 방문되지 않은 곳에서 다시 dfs시작
  for (let item of graph[v]) {
    if (!visited[item]) {
      dfs(graph, item, visited);
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

let graph2 = [[1, 2, 3], [0, 2], [0, 1], [0]];

visited = Array(9).fill(false);
dfs(graph, 1, visited);
console.log();

visited = Array(4).fill(false);
dfs(graph2, 0, visited);
console.log();
