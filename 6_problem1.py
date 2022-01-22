N = int(input())
arr = []
for i in range(N):
    arr.append(int(input()))

# sorted와 sort에는 key, reverse option이 있음을 기억하자!
arr.sort(reverse=True)

for i in arr:
    print(i, end=" ")
