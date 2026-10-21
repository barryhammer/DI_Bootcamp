expressions = {
    'booleans': [
        bool(None),                 # False = 0
        'a' > '?',                  # True = 1
        str(5) in '5',              # True = 1
        float(0.99) == int(0.99),   # False = 0
        not bool('A')               # False = 0
    ],
    'numbers': [
        (' ' in 'Hello World') * 3.5,                   # 3.5
        True + 5,                                       # 6
        'Magical'.count('a') - 6.5,                     # 2 - 6.5 = -4.5
        sum(x for x in range(11)),                      # 55
        sum(x for x in range(3, 13, 3) if x % 3 < 2)    # 30
    ]
}

# Write a program that prints:
# 1. The number of True values in expressions['booleans']
# 2. The average of all positive numbers in expressions['numbers']

total_trues = sum(expressions['booleans'])                      # 0 + 1 + 1 + 0 + 0 = 2
print(total_trues)

positive_numbers = [n for n in expressions['numbers'] if n > 0] # [3.5, 6, 55, 30]
average = sum(positive_numbers) / len(positive_numbers)         # 94.5 / 4]
print(average)


def my_args_kwargs(username, *args, **kwargs):
    print(f"Username = {username}")
    print(f"My args look like {args}")
    print(f"My kwargs look like {kwargs}")

my_args_kwargs("Mary", 5, 8, age = 18, country = "Israel")

"""
Username = Mary
My args look like (5, 8)
My kwargs look like {'age': 18, 'country': 'Israel'}
"""

def calculation(*numbers, operation="+"): #operation here is being used as kwargs!
    if not numbers: # If numbers are absent from the list
        print(0)

    # If there is only a string to parse.
    if len(numbers) == 1 and isinstance(numbers[0], str):
        print(0)

    if operation == "+":
        result = sum(numbers)

    else: # operation == "-":
        result = numbers[0]
        for num in numbers[1:]:
            result -= num

    print(result)

calculation(5, 6, 7, 8, 9, 10, operation="+")
calculation(5, 6, 7, 8, 9, 10, operation="-")
calculation(1, 2, 3, 4, 5)
calculation(operation="-")
calculation(0, 0, 2)
calculation('Baby')

"""
def calculation(*numbers, operation="+"):
    if len(numbers) < 2:
        print("We need at least two numbers")
        return 0
    if operation == "+":
        print(sum(numbers))
    if operation != "-":
        print("The operation is incorrect!")
        return
    # operation = -
    result = numbers[0]
    for i in numbers[1:]:
        result -= i
    # r = reduce(lambda result, current: result - current, args)
    print(result)
    
calculation(5, 6, 7, 8, 9, 10, operation="+")
calculation(5, 6, 7, 8, 9, 10, operation="-")
calculation(1, 2, 3, 4, 5)
calculation(operation="-")
calculation(0, 0, 2)
calculation('Baby')
calculation(55)
"""

"""
numbers = [1, 2, 3, 4]
print(reduce(lambda a, b: a + b, numbers)) # reduce combines all values in list to single result
# reduce(function, sequence) - Take two numbers from the list, add them together, then keep adding the result to the next number.
# You can also provide a starting value:
# print(reduce(lambda a, b: a + b, numbers, 10)) - The process would then start with 10
# NOTE: You need to use from functools import reduce to run reduce.
# sum() → adding numbers
# map() → transform every item
# filter() → keep only items that match a condition
# reduce() → combine many items into one final value
"""