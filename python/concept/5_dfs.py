def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=" ")
    for i in graph[v]:
        if visited[i] == False:
            dfs(graph, i, visited)


graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]
visited = [False] * 9

dfs(graph, 1, visited)
print()


def dfs_stack(graph, v, visited):
    stack = [v]
    visited[v] = True
    print(v, end=" ")

    while stack:
        is_find = False
        k = stack[len(stack) - 1]

        for i in graph[k]:
            if not visited[i]:
                stack.append(i)
                visited[i] = True
                print(i, end=" ")
                is_find = True
                break

        if is_find == False:
            k = stack.pop()


visited = [False] * 9
dfs_stack(graph, 1, visited)
