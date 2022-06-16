def quick_sort(array, start, end):
    if start >= end:
        return
    pivot = start
    left = start + 1
    right = end
    while left <= right:
        while left <= end and array[left] <= array[pivot]:
            left += 1
        while start < right and array[right] >= array[pivot]:
            right -= 1
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[left], array[right] = array[right], array[left]

    quick_sort(array, start, right - 1)
    quick_sort(array, right + 1, end)


array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

quick_sort(array, 0, len(array) - 1)
print(array)


array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]
count = [0] * (max(array) + 1)
for i in array:
    count[i] += 1

for idx, value in enumerate(count):
    for j in range(value):
        print(idx, end=" ")
