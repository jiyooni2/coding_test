N, M, K = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort(reverse=True)

res = 0
i = 0
while i < M:
    for j in range(K):
        res += arr[0]
        i += 1
        if i >= M:
            break
    if i < M:
        res += arr[1]
        i += 1

print(res)
