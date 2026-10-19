"""
1. Create a list of 5 even numbers starting with 2 with the list_name 'a'.
2. Create a list b where the pattern is the sequence a[i+0], a[i+0]**2, a[i+1], a[i+1]**2, ...
"""

a = []
num = 0
b = []

for i in range(2, 12, 2): #Starts at value 2, goes up to value 10, returns every 2nd number
    a.append(i)
    
# a = list(range(2, 11, 2)) - A much more elegant way of creating a list without using a for loop.

print(a)

# Need to remember difference of value in list instead of index value.

for i in range(len(a) - num):
    b.append(a[i] + num)
    b.append((a[i] +num) ** 2)
    num +=1

print(b)

"""
result = []
for elem in a:
    result.extend(elem, elem ** 2)

print(sorted(result, reverse = True))
"""