from collections import deque
from pprint import pprint

N, M = map(int, input().split())

graph = []
for i in range(N):
    graph.append(list(map(int, input())))

visited = [[False] * M for _ in range(N)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]


def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = True
    while queue:
        w = queue.popleft()
        print(w)
        if w[0] == N - 1 and w[1] == M - 1:
            break
        for i in range(4):
            xx = w[0] + dx[i]
            yy = w[1] + dy[i]
            if (
                0 <= xx
                and xx < N
                and 0 <= yy
                and yy < M
                and graph[xx][yy] != 0
                and not visited[xx][yy]
            ):
                visited[xx][yy] = True
                graph[xx][yy] = graph[w[0]][w[1]] + 1
                queue.append((xx, yy))

    pprint(graph)
    return graph[N - 1][M - 1]


print(bfs(0, 0))
