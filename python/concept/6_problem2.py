N = int(input())
arr = []

for i in range(N):
    input_data = input().split()
    arr.append((input_data[0], int(input_data[1])))

# key gets the func
arr.sort(key=lambda arr: arr[1])

for i in arr:
    print(i[0], end=" ")
