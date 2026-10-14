#Given a list [1, 2, 3, 4], print out all the values in the list one by one.
list_1 = [1,2,3,4]
print("Exercize 1: Lists - 1")
for item in list_1: print(item)

#Given a list [1, 2, 3, 4], print out all the values in the list multiplied by 20.
print("Exercize 1: Lists - 2")
list_2 = [1,2,3,4]
for item in list_2: print(item*20)

#Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter of each name: ["E", "T", "M"].
print("Exercize 1: Lists - 3")
list_3 = ["Elie", "Tim", "Matt"]
list3a = [item[0] for item in list_3]
print(list3a)

#Given a list [1, 2, 3, 4, 5, 6], return a new list with all the even values: [2, 4, 6].
print("Exercize 1: Lists - 4")
list_4 = [1,2,3,4,5,6]
even_list = [num for num in list_4 if num % 2 == 0] #modulo
print(even_list)

#Given two lists [1, 2, 3, 4] and [3, 4, 5, 6], return a new list that contains only the values present in both lists: [3, 4].
print("Exercize 1: Lists - 5")
list_5a = [1,2,3,4]
list_5b = [3,4,5,6]
result = [item for item in list_5a if item in list_5b]
print(result) 

#Given a list of words ["Elie", "Tim", "Matt"], return a new list with each word reversed and in lowercase: ["eile", "mit", "ttam"].
print("Exercize 1: Lists - 6")
list_6 = ["Elie", "Tim", "Matt"]
answer = [word[::-1].lower() for word in list_6] #[::-1]: Reverses the string 
print(answer)

#Given two strings "first" and "third", return a new list of the letters that are present in both strings: ["i", "r", "t"]
print("Exercize 1: Lists - 7")
string_7a = "first"
string_7b = "third"

common_letters = sorted(list(set(string_7a) & set(string_7b)))
print(common_letters)

#For all numbers between 1 and 100, return a list of the numbers that are divisible by 12: [12, 24, 36, 48, 60, 72, 84, 96].
print("Exercize 1: Lists - 8")
print([num for num in range(1,100) if num % 12 == 0]) #modulo
# print([num for num in range(12,100,12)]) #being a bit of a smartass ;-)

#Given the string "amazing", return a list with all the vowels removed: ["m", "z", "n", "g"]
print("Exercize 1: Lists - 9")
string = "amazing"
vowels = "aeiou"

list_9 = [char for char in string if char not in vowels]
print(list_9)

#Generate a list with the following value: [[0, 1, 2], [0, 1, 2], [0, 1, 2]].
print("Exercize 1: Lists - 10")
list_10 = [[0, 1, 2] for _ in range(3)]
print(list_10)

#Generate a list of 10 seperate lists with each list having the values [0,1,2,3,4,5,6,7,8,9] and a line break at the end.
print("Exercize 1: Lists - 11")
matrix = [list(range(10)) for _ in range(10)]

print("[\n") #should fix.
for item in matrix:
    print(item)
print("\n]")