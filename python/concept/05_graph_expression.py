# Adjacency Matrix

# 모든 관계를 저장하므로 노드 개수가 많을수록 메모리 불필요하게 낭비, 속도는 더 빠름
graph = [[] for _ in range(3)]

# connect to node 0 : 1,7
graph[0].append((1, 7))
graph[0].append((2, 5))

# connect to node 1 : 0(weight : 7)
graph[1].append((0, 7))

# connect to node 2 : 0(weight : 5)
graph[2].append((0, 5))

print(graph)


# Adjacency List
# 필요한 관계만을 저장하므로 메모리를 효율적으로 사용, 속도는 더 느림
