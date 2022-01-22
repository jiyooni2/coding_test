def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start+end)//2
    if array[mid] == target:
        return mid
    elif array[mid] > target:
        return binary_search(array, target, start, mid-1)
    else:
        return binary_search(array, target, mid+1, end)


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = (binary_search(array, 10, 0, 9))


print(res)


def binary_search_iter(array, target, start, end):
    while start <= end:
        mid = (start+end)//2

        if array[mid] == target:
            return mid
        elif array[mid] > target:
            end = mid-1
        else:
            start = mid+1


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = (binary_search(array, 10, 0, 9))

print(res)
