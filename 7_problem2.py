import sys

N, M = map(int, input().split())

# 여기서 arr를 sort해서, start=arr[0], end=arr[N-1] 하면 그게 더 오래걸림 O(N * logN)
arr = list(map(int, sys.stdin.readline().rstrip().split()))


start = 0
end = max(arr)  # mix,min : O(n)
res = 0
while start <= end:
    total_length = 0
    mid = (start+end)//2
    for item in arr:
        if item > mid:
            total_length += (item-mid)
    if total_length >= M:
        start = mid+1
        res = mid  # 최대한 덜 잘랐을 때가 정답에 가까움. 코드가 진행될수록, 정답이다
    elif total_length < M:
        end = mid-1

print(res)
