
N = int(input())

arr = []

for i in range(6):
    arr.append(list(map(int, input().split())))

specific = [];

for item in arr:
    if(item not in arr):
        specific.append(item)

print(arr)
