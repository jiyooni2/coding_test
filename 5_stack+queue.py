stack = []

stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)
print(stack.pop())

print(stack)
print(stack[0::1])
print(stack[::-1])

from collections import deque

queue = deque()
queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()


print(queue)
queue.reverse()
print(queue)

for i in range(len(queue)):
    print(queue[i])
