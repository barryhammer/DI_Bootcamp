#Given a list: [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this: {'job': 'Instructor', 'name': 'Elie'}
print("Exercize 1 - Dictionaries 1")
data = [("name", "Elie"), ("job", "Instructor")]

result = dict(data)
print(result)

#Given two lists: ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"], return a dictionary that looks like this: {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}
print("Exercize 1 - Dictionaries 2")
keys_2 = ["CA", "NJ", "RI"]
values_2 = ["California", "New Jersey", "Rhode Island"]

result = dict(zip(keys_2, values_2))
#python(zip) aggregates elements from two or more iterables (like lists, tuples, or strings) into a single iterator of tuples.

print(result)

#Create a dictionary where the keys are vowels in the alphabet and the values are 0. Your dictionary should look like this: {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}. (Do not use the fromkeys method)
print("Exercize 1 - Dictionaries 3")
vowels = {v: 0 for v in 'aeiou'}
#Takes string of vowels, loops through string, and adds v:0 as key for each value.
print(vowels)

#Create a dictionary where the key is the position of the letter in the alphabet, and the value is the capital letter itself.
print("Exercize 1 - Dictionaries 4")

import string

alphabet_dict = {i: letter for i, letter in enumerate(string.ascii_uppercase, start=1)}

#enumerate() a built-in tool that allows you to loop through an iterable (like a list, tuple, or string) while simultaneously keeping track of the index (position) and the value of each item.

for i, (key, value) in enumerate(alphabet_dict.items(), start=1):
    if i == 1:
        print("{")  # Start the first item on a new line

    if i < len(alphabet_dict):
        print(f"    {key}: '{value}',")
    else:
        print(f"    {key}: '{value}'") #removes trailing comma at the end.
print("}")

#Given the string "awesome sauce", return a dictionary where the keys are vowels, and the values are the count of each vowel in the string.
print("Exercize 1 - Dictionaries 5")
text = "awesome sauce"
vowel_counts = {} #sets up blank dictionary. 

for char in text.lower(): #apparently, it's necessary to use text.lower() instead of just text() which throws an exception error.
  if char in "aeiou":
    # Count each vowel found
    vowel_counts[char] = vowel_counts.get(char, 0) + 1 #If the character is a vowel, it increments its count inside the vowel_counts dictionary.

print(vowel_counts)