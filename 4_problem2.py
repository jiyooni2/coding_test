N, M = map(int, input().split())
x, y, direction = map(int, input().split())

x = x
y = y

array = []
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

for i in range(N):
    array.append(list(map(int, input().split())))

array[x][y] = 2
count = 1

while True:
    is_find = False
    for i in range(4):
        direction = (direction + 1) % 4
        xx = x + dx[direction]
        yy = y + dy[direction]
        if (
            xx < 0 or xx >= N or yy < 0 or yy >= M or array[xx][yy] != 0
        ):  # xx < 0 or xx > N or yy < 0 or yy > M or
            continue  # 방문 불가
        else:
            is_find = True
            array[xx][yy] = 2  # 방문 처리
            count += 1
            x = xx
            y = yy
            print(x, y, direction, "visited")
            break
    if is_find == False:
        x = x + dx[(direction + 2) % 4]
        y = y + dy[(direction + 2) % 4]
        if array[x][y] != 0:
            break

print(count)
