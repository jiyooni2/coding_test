import time


price = int(input())
count = 0
start_time = time.time()

while(price > 0):
    while(price >= 500):
        count += 1
        price -= 500
    while(price >= 100):
        count += 1
        price -= 100
    while(price >= 50):
        count += 1
        price -= 50
    while(price >= 10):
        count += 1
        price -= 10
end_time = time.time()

print(end_time-start_time)
print(count)
