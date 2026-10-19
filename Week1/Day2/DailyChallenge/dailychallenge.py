# Challenge 1
my_array = []
num = int(input("Please enter a number: "))
length = int(input("Please enter a length: "))
value = 1

for i in range(length):
    my_array.append(num * value)
    value += 1

print(my_array)

# Challenge 2
text = input("Please enter a word: ")
result = ""

for letter in text:
    if result == "" or letter != result[-1]:
        result += letter

print("Result:", result)