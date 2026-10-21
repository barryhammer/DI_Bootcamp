# Exercize 1 - What Are You Learning?
def display_message():
    print("I am learning about functions in Python.")

display_message()

# Exercise 2 - What’s Your Favorite Book?
def favorite_book(title):
    print(f"My favorite book is {title}")

favorite_book("The Hitchiker's Guide To The Galaxy")

# Exercise 3 - Some Geography
def describe_city(city, country="Unknown"):         # Provides default value for country
    print(f"{city} is in {country}")

describe_city("New York", "US")
describe_city("Paris")

# Exercise 4 - Random
import random

def exercize4(my_num):
    my_random = random.randint(1, 100)
    if my_num == my_random:
        print("Success!")
    else:
        print(f"Fail! Your number: {my_num}, Random number: {my_random}.")
    
exercize4(44)

# Exercise 5 - Let’s Create Some Personalized Shirts!
def make_shirt(size = "large", text = "I love Python"):
    print(f"The shirt's size is {size} and the text is '{text}'.")

# Call make_shirt() to make a large shirt with the default message.
make_shirt()
# Call make_shirt() to make a medium shirt with the default message.
make_shirt("medium")
# Call make_shirt() to make a shirt of any size with a different message
make_shirt("X-large", "No one expects the Spanish inquisition!")
# Call make_shirt() using keyword arguments (e.g., make_shirt(size="small", text="Hello!")).
make_shirt(size="small", text="Hello!")

# Exercise 6 - Magicians…
# Create a List of Magician Names.
magicians = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians, position="end"):
    great_magicians = []

    for magician in magicians:
        if position == "end":
            great_magicians.append(f"{magician} the Great")
        else:
            great_magicians.append(f"the Great {magician}")

    return great_magicians

# Display original magician names
show_magicians(magicians)

# Display names with "the Great" at the end
show_magicians(make_great(magicians))

# Display names with "the Great" at the beginning
show_magicians(make_great(magicians, "start")) #IMPORTANT!

# Exercise 7 - Temperature Advice
# Generate a random temperature and provide advice based on the temperature range.

import random

def get_random_temp():
    # Floating-Point Temperatures
    temp = round(random.uniform(-10, 40), 2) # Lower limit, Upper limit
    return temp

def month_based_temp():
    month = int(input(f"Please enter the number for a month to find the temperature: "))
    match month:
        case 12 | 1 | 2:
            temp = round(random.uniform(-10, 10), 2)
        case 3 | 4 | 5:
            temp = round(random.uniform(11, 25), 2)  
        case 6 | 7 | 8:
            temp = round(random.uniform(26, 40), 2)
        case 9 | 10 | 11:
            temp = round(random.uniform(11, 25), 2)  
    return temp

def main():
    temp = get_random_temp()
    temp_round = int(temp)
    print(f"The temperature right now is {temp_round} °C.")
    #Temperature advice
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif temp >=0 and temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temp >= 16 and temp < 23:
        print("Nice weather.")
    elif temp >= 23 and temp < 32: #NOTE: In specs, this is between 24-32, should be between 23-32.
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

    season = month_based_temp()
    if season < 0:
        print(f"Sounds like winter weather to me!")
    elif season >=0 and season <16:
        print(f"Autumn can sometimes be cold!")
    elif season >= 16 and season < 23:
        print(f"Sounds like a nice Spring day to me!")
    else:
        print(f"Stay hydrated in that summer weather!")

main()