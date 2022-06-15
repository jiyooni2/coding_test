N = int(input())
command = input().split()

x = 0
y = 0

for i in command:
    if i == "R" and y != N - 1:
        y += 1
    elif i == "L" and y != 0:
        y -= 1
    elif i == "U" and x != 0:
        x -= 1
    elif i == "D" and x != N - 1:
        x += 1

print(x + 1, y + 1)
