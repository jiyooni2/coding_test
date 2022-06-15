from collections import deque


def bfs(graph, v, visited):
    queue = deque()
    queue.append(v)  # = queue.deque([start])
    visited[v] = True
    print(v, end=" ")

    while queue:
        v = queue.popleft()
        for w in graph[v]:
            if not visited[w]:
                queue.append(w)
                visited[w] = True
                print(w, end=" ")


graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]
visited = [False] * 9

bfs(graph, 1, visited)
