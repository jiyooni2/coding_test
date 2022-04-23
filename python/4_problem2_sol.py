n, m = map(int, input().split())

d = [[0] * m for _ in range(n)]  # 방문위치 저장하기 위한 맵

x, y, direction = map(int, input().split())
d[x][y] = 1

array = []
for i in range(n):
    array.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def turn_left():
    global direction
    direction = (direction + 1) % 4


count = 1
turn_time = 0
while True:
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]
    # 안 가봤으면서, 육지인 곳
    if d[nx][ny] == 0 and array[nx][ny] == 0:
        d[nx][ny] = 1  # 방문처리
        x = nx
        y = ny  # 현재 위치 변경
        count += 1  # 방문 횟수 추가
        turn_time = 0
        continue
    else:
        turn_time += 1

    if turn_time == 4:
        nx = x - dx[direction]
        ny = y - dy[direction]

        if array[nx][ny] == 0:
            x = nx
            y = ny
        else:
            break
        turn_time = 0

print(count)
