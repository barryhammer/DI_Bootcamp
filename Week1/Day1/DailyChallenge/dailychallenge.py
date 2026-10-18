import random

user_input = ""
full_input = ""

while len(user_input) != 10:
    user_input = input("Please enter a string: ")
    if len(user_input) < 10:
        print("String not long enough.")
    if len(user_input) > 10:
        print("String too long.")

print("Perfect string")
print(user_input[0])
print(user_input[-1])

for i in user_input:
    full_input += user_input[int(i)]

new_list = list(user_input)
random.shuffle(new_list)
shuffled_text = "".join(new_list)

print(shuffled_text)