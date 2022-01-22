import random

arr = []
for i in range(10):
    arr.append(random.randrange(0, 20))


def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_index = i
        for j in range(i, len(arr)):
            if arr[min_index] > arr[j]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]  # in python, SWAP


print(arr)
selection_sort(arr)
print(arr)
print()


def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        temp = arr[i]
        # j = arr[i]가 들어갈 자리를 찾는다 생각하기
        while j >= 0 and arr[j] > temp:
            arr[j + 1] = arr[j]  # j back propagation, j empty
            j -= 1
        arr[j + 1] = temp  # j empty, after j--, j+1 empty
        print(arr)

arr = []
for i in range(10):
    arr.append(random.randrange(0, 20))

print(arr)
insertion_sort(arr)
print(arr)
