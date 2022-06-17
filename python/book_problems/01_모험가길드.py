

N = int(input())

arr = list(map(int, input().split()))

arr.sort()

result = 0
personInGroup = 1

for i in range(N):
    need = arr[i]
    if personInGroup == need:
        result += 1
        personInGroup = 1
    else:
        personInGroup += 1


print(result)
