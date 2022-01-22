array = [10, 12, 3, 4, 9, 5, 6, 11, 7]

# returned array is sorted, not arg. array
print(sorted(array))
print(array)

array.sort()
print(array)

array = [("바나나", 2), ("사과", 5), ("당근", 3)]

# sorted, sort has key argument

print(sorted(array, key=lambda array: array[1]))
