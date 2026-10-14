print("Exercize Functions - Intermediate 1")
#Exercise 1: Return the largest number
def find_largest(num_list):
    largest = num_list[0] #needed to remember that the numbers are from a list.
    for num in num_list:
        if num > largest:
            largest = num
            
    return(f"Output: {largest}")
    
print(find_largest([1, 2, 3, 4]))  # Output: 4
print(find_largest([10, 20, 5]))  # Output: 20

print("Exercize Functions - Intermediate 2")
#Exercise 2: Check for letter in word

def check_letter(my_word, my_letter):
    if my_letter in my_word:
        return(f"Output: True")
    else:
        return(f"Output: False")
        

print(check_letter("apple", "a"))  # Output: True
print(check_letter("banana", "z"))  # Output: False

print("Exercize Functions - Intermediate 3")
#Exercise 3: Count to a Number

def count_to_number(counter):
    print("Output:")
    for value in range(1, counter + 1): #This increments the value in counter.
        print(value)
        
count_to_number(3)  
# Output:
# 1
# 2
# 3

count_to_number(5)  
# Output:
# 1
# 2
# 3
# 4
# 5