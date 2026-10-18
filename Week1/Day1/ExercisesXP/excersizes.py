"Exercize 1 - Hello World"
print(f"Hello world \n" * 5)

"Exercize 2 - Some Math"
print((99^3)*8)

"Exercize 3 - What is the output?"
# >>> 5 < 3 - False
# >>> 3 == 3 - True
# >>> 3 == "3" - False
# >>> "3" > 3 - False
# >>> "Hello" == "hello" - False

"Exercize 4 - Your computer brand"
computer_brand = "HP"
print(f"I have a {computer_brand} computer.")

"Exercize 5 - Your information"
name = "Barry"
age = 54
shoe_size = 43
info = "My name is " + name + " and I am " + str(age) + " years old, and my shoe size is " + str(shoe_size)
print(info)

"Exercize 6 - A & B"
a = 10, b = 20
if a > b:
    print("Hello World")

"Exercfize 7 - Odd or Even"
my_num = int(input("Please enter a number: "))
if my_num % 2 == 0:
    print("Your number is even.")
else:
    print("Your number is odd.")

"Exercize 8 - What’s your name?"
my_name = "Barry"
your_name = input("Please enter your name: ")
if my_name == your_name:
    print("What a coinkydink! We have the same name!")
else:
    print(f"Hi, {your_name}, my name is {my_name}.")

"Exercize 9 - Tall enough to ride a roller coaster"
height = int(input("Please enter your height in centimeters: "))
if height > 145:
    print("You are tall enough to ride this ride.")
else:
    print("Sorry, you're not tall enough to ride this ride. Please come back when you're taller.")