import sys

# 1. Binary Search


def binary_search(array, target, start, end):
    while start <= end:
        mid = (start+end)//2
        if array[mid] == target:
            return True
        elif array[mid] > target:
            end = mid-1
        else:
            start = mid+1
    return False


N = int(input())
store_data = list(map(int, sys.stdin.readline().rstrip().split()))
M = int(input())
client_data = list(map(int, sys.stdin.readline().rstrip().split()))

store_data.sort()

for data in client_data:
    if(binary_search(store_data, data, 0, N-1)):
        print("yes", end=" ")
    else:
        print("no", end=" ")

# 2 Counting Sort
n = int(input())
array = [0]*1000001

for i in input().split():
    array[int(i)] = 1

m = int(input())
x = list(map(int, input().split()))

for data in x:
    if array[data] == 1:
        print("yes", end=" ")
    else:
        print("no", end=" ")


# 3 set : 단순히 존재 여부를 파악할때 자주 씀
n = int(input())
array = set(map(int, input().split()))
m = int(input())
x = list(map(int, input().split()))

for i in x:
    if i in array:
        print("yes", end=" ")
    else:
        print("no", end=" ")
