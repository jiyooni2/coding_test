arr = list(map(int, list(input())))

print(arr)

result = arr[0]

for i in range(1, len(arr)):
    sum_value = arr[i]+result
    mul_value = arr[i]*result
    print(arr[i], result, sum_value, mul_value)

    result = max(sum_value, mul_value)

print(result)
