# Exercise 1: Favorite Numbers
fav_numbers = [3, 13, 23, 33]
fav_numbers.append(43)
fav_numbers.append(53)
friend_fav_numbers = [10,20, 43, 100]
our_fav_numbers = list(set(fav_numbers + friend_fav_numbers)) #set ensures only unique elements are copied to our_fav_numbers
our_fav_numbers.sort()
print(our_fav_numbers)

# Exercise 2: Tuple
my_tuple = (10, 20, 30, 40, 50)
new_num = list(my_tuple) #Converts tuple to list
new_num.append("60") #Appends value to list
my_tuple = tuple(new_num) #Converts list back to tuple

# Exercise 3: List Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

# Exercise 4: Floats

float_list = []
for i in range(1, 6):
    float_list.append(float(i))
    float_list.append(float(i) + 0.5)
    
del float_list[0] #Deletes first element 1.0
del float_list[-1] #Delets last element 5.5
print(float_list)

# Exercise 5: For Loop
for i in range(1, 21):
    print(i)

for i in range(2, 21, 2):
    print(i)

# Exercise 6: While Loop

name = input("Please enter your name: ")
while (len(name) < 3) or (not name.isalpha()): #Using isdigit() seems to allow for names with a digit, for example 'barry3'. This method ensures only alphabetic names are passed.
    name = input("Please enter your name: ")
print("thank you")

# Exercise 7: Favorite Fruits
user_fruits = input("Please enter your favorite fruits seperated by spaces: ")
user_fruits = user_fruits.split(" ")
input_fruit = input("Please enter the name of any fruit: ")
if (user_fruits.count(input_fruit) > 0):
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Exercise 8: Pizza Toppings
price = 10.0
toppings = []

while True:
    new_topping = input("Please add a new topping one at a time. Enter 'quit' to finish: ")
    if new_topping == 'quit':
        break 
    
    toppings.append(new_topping)
    adding = new_topping
    print(f"Adding {adding} to your pizza.")
    price += 2.5

# Appends list to final sentence. If user entered 'quit' as first entry, 'none' is added.
if toppings == []:
    toppings.append("none")
    final_toppings = " ".join(toppings)
else:
    final_toppings = ", and ".join(toppings)
print(f"Your total cost for your pizza is {price}. Your toppings are {final_toppings}.")

# Exercise 9: Cinemax Tickets
movie_goers_age = 0
total_price = 0

while True:
    movie_goer = int(input("Please enter the age of each person in a family who wants to buy a movie ticket. Enter '0' to finish: "))
    if movie_goer == 0:
        break 

    if movie_goer < 3:
        total_price += 0
    elif movie_goer <=12:
        total_price += 10
    else:
        total_price += 15

print(f"Your total ticket price is ${total_price}")

# Bonus
movie_goer = ''
movie_goer_age = 0
movie_goer_list = []

while True:
    movie_goer = input("Please enter the name of the person who wants to buy a movie ticket. Enter 'quit' to finish: ")
    if movie_goer == 'quit':
        break 
    movie_goer_age = int(input(f"Please enter the age of {movie_goer}: "))
    if movie_goer_age >= 18:
        movie_goer_list.append(movie_goer)
    if movie_goer_age < 12:
        print("This user is too young to see the movie, but the specs didn't ask for this.")

final_movie_list = ", and ".join(movie_goer_list)

if movie_goer_list == []:
    print("Sorry, no one is going to the movies!")
else: 
    print(f"The following people can go to the movies: {final_movie_list} ") 