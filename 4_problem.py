dx = [2, 2, -2, -2, 1, -1, 1, -1]
dy = [1, -1, 1, -1, -2, -2, 2, 2]


temp = input()
x = ord(temp[0]) - ord("a")
y = ord(temp[1]) - ord("1")

count = 8

for i in range(len(dx)):
    xx = x + dx[i]
    yy = y + dy[i]

    if xx < 0 or xx > 8 or yy < 0 or yy > 8:
        count -= 1

print(count)
