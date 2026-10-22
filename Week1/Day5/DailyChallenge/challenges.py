# Challenge 1 - Sorting
# Write a Python program that takes a single string of words as input, where the words are 
# separated by commas (e.g., ‘apple,banana,cherry’). The program should output these words 
# sorted in alphabetical order, with the sorted words also separated by commas.
def challenge1():
    my_words = input("Please enter a series of words here: ")

    if " " in my_words:                 # Check if words separated by space
        my_list = my_words.split(" ")
        new_list = sorted(my_list)
        my_list = " ".join(new_list)
    elif "," in my_words:               # Check if words separated by comma
        my_list = my_words.split(",")
        new_list = sorted(item.strip() for item in my_list)
        my_list = ", ".join(new_list)
    else:
        my_list = my_words

    print(my_list)

challenge1()
# Challenge 2 - Longest Word
# Write a function that takes a sentence as input and returns the longest word in the sentence. 
# If there are multiple longest words, return the first one encountered. 
# Characters like apostrophes, commas, and periods should be considered part of the word.
def challenge2():
    longest = ""
    sentence = input("Please input a string of words: ")
    words = sentence.split()
    for word in words:
        if len(word) > len(longest):
            longest = word
    print(f"The longest word in your sentence is '{longest}'")
challenge2()