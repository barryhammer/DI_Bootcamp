print("Exercize Functions - Basics 1")
#Exercise 1: Add Two Numbers
def add_two_numbers(num1, num2):
    return(num1 + num2)
    
print(add_two_numbers(3, 5))  # Output: 8
print(add_two_numbers(10, 20))  # Output: 30

print("Exercize Functions - Basics 2")
#Exercise 2: Print a greeting
def greet(name):
    print(f"Hello {name}!")
    
greet("Alice")  # Output: "Hello, Alice!"
greet("Bob")    # Output: "Hello, Bob!"

print("Exercize Functions - Basics 3")
#Exercise 3: Check if number is even or odd

def check_even_odd(num):
    if num % 2 == 0:
        print("Output: Even")
    else:
        print("Output: Odd")
        
check_even_odd(4)  # Output: "Even"
check_even_odd(7)  # Output: "Odd"

print("Exercize Functions - Basics 4")
#Exercise 4: Sum of numbers in a list

def sum_list(num_sum):
    total = 0
    for i in num_sum:
        total += i
    return f"Output: {total}"
    
print(sum_list([1, 2, 3, 4]))  # Output: 10
print(sum_list([5, 5, 5]))  # Output: 15

print("Exercize Functions - Basics 5")
#Exercize 5: Print days of the week using loop

def print_days():
    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    for day in days:
        print(day)


# Call the function
print_days()

print("Exercize Functions - Basics 6")
#Exercise 6: Check if number is positive, negative or zero

def check_sign(check_num):
    if check_num < 0:
        print("Output: Negative")
    elif check_num > 0:
        print("Output: Positive")
    else:
        print("Output: Zero")
        
check_sign(10)  # Output: "Positive"
check_sign(-5)  # Output: "Negative"
check_sign(0)   # Output: "Zero"

print("Exercize Functions - Basics 7")
#Exercise 7: Repeat a word

def repeat_word(word,num_times):
    print("Output:")
    for i in range(num_times):
        print(word)
        
repeat_word("hello", 3)  
# Output:
# hello
# hello
# hello

repeat_word("goodbye", 2)  
# Output:
# goodbye
# goodbye