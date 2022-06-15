N = int(input())

count = 0

for i in range(60):
    for j in range(60):
        string = str(i) + str(j)
        if "3" in string:
            count += 1

res = 0

for i in range(N + 1):
    if "3" in str(i):
        res += 3600
        print("3", res)
    else:
        res = res + count
        print(res)

print(res)
