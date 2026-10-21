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