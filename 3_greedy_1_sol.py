import time

n = int(input())
count = 0

coin_types = [500, 100, 50, 10]

start_time = time.time()
for coin in coin_types:
    count += n//coin  # // : 몫 return
    n %= coin
end_time = time.time()

print(end_time-start_time)
print(count)
