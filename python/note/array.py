
# copy array by value
arr = [1, 2]
copy_arr = arr[:]

# copy array by reference
# if change value in copy_arr, will change value in arr
copy_arr = arr


# join

# '' : separator, value in arr must be string
arr = list(map(str, arr))
print(arr)
print(''.join(arr))
