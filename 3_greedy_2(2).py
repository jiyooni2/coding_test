N, M, K = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort(reverse=True)

first = arr[0]
second = arr[1]

count = int(M/(K+1))*K
count += M % (K+1)

res = first*count+second*(M-count)
print(res)
