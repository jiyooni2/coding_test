N, K = map(int, input().split())

count = 0

while N > 1:
    count += 1
    if N % K == 0:
        N = N / K
    else:
        N = N - 1

print(count)

N, K = map(int, input().split())

count = 0
while N > 1:
    if N < K:
        count += N % K - 1
        break
    else:
        count += N % K
        N -= N % K
    if N % K == 0:
        count += 1
        N = N / K

print(int(count))
