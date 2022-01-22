from pprint import pprint

N = 4
M = 5

visited = [[False] * M for _ in range(N)]
visited2 = [[False] * M] * N

visited[3][2] = True
visited2[3][2] = True

pprint(visited)
pprint(visited2)
