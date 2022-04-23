N, M = map(int, input().split())  # N*M

arr = []

for i in range(N):
    arr.append(list(input()))  # 한 문자씩 자르기, string 받아서 list로 바꾸는것


visited = [[False] * M for _ in range(N)]
# visited = [[False]*M]*N 하면 이상해짐 왜 그럴까?

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

count = 0


def dfs(graph, x, y, visited):
    visited[x][y] = True

    for i in range(4):
        xx = x + dx[i]
        yy = y + dy[i]
        if (
            0 <= xx
            and xx < N
            and 0 <= yy
            and yy < M
            and visited[xx][yy] == False
            and graph[xx][yy] == "0"
        ):
            dfs(graph, xx, yy, visited)


for i in range(N):
    for j in range(M):

        if visited[i][j] == False and arr[i][j] == "0":
            dfs(arr, i, j, visited)

            count += 1

print(count)
