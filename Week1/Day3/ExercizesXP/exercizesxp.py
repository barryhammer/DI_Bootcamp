def exercize1():
    # You are given two lists. Convert them into a dictionary where the first list contains the keys 
    # and the second list contains the corresponding values.

    keys = ['Ten', 'Twenty', 'Thirty']
    values = [10, 20, 30]

    first_dict = dict(zip(keys, values))
    print(first_dict)

def exercize2():
    # Write a program that calculates the total cost of movie tickets for a family based on their ages.
    # Family members’ ages are stored in a dictionary.
    # Ticket prices: Under 3 = Free; 3 - 12 years: $10; Over 12 years: $15
    # Print ticket price for each family member.
    # Print total cost at the end.

    family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

    total_price = 0

    for name, age in family.items():
        if age < 3:
            price = 0
            print(f"The price for {name} is ${price}.")
        elif age <= 12:
            price = 10
            print(f"The price for {name} is ${price}.")
        else:
            price = 15
            print(f"The price for {name} is ${price}.")

        total_price += price

    print(f"Your total ticket price is ${total_price}.")

def exercize2bonus():
    # Allow the user to input family members’ names and ages, then calculate the total ticket cost.

    movie_goers_dict = {}
    total_price = 0

    while True:
        movie_goers_name = input("Please enter the name of the movie goer: ")
        movie_goers_age = int(input(
            "Please enter the age the person (enter 0 to finish): "
        ))

        if movie_goers_age == 0:
            break

        movie_goers_dict[movie_goers_name] = movie_goers_age

        if movie_goers_age < 3:
            price = 0
            print(f"The price for {movie_goers_name} is ${price}.")
        elif movie_goers_age <= 12:
            price = 10
            print(f"The price for {movie_goers_name} is ${price}.")
        else:
            price = 15
            print(f"The price for {movie_goers_name} is ${price}.")

        total_price += price

    print(f"\nYour total ticket price is ${total_price}")
    print(movie_goers_dict)

def exercize3():
    # Create and manipulate a dictionary that contains information about the Zara brand.

    # Create a dictionary called 'brand' with the provided data.
    brand = {
        "name": "Zara",
        "creation_date": 1975,
        "creator_name": "Amancio Ortega Gaona",
        "type_of_clothes": ["men", "women", "children", "home"],
        "international_competitors": ["Gap", "H&M", "Benetton"],
        "number_stores": 7000,
        "major_color": {
            "France": "blue", 
            "Spain": "red", 
            "US": ["pink", "green"]
        }
    }
    # Change the value of number_stores to 2.
    brand.update({"number_stores": 2})
    # Print a sentence describing Zara’s clients using the ["user1"]["profile"] key.
    clothes = ", ".join(brand["type_of_clothes"])
    print(f"Zara's clients buy clothes for {clothes}.")
    # Add a new key country_creation with the value Spain.
    brand["country_creation"] = "Spain"
    # Check if international_competitors exists and, if so, add “Desigual” to the list.
    if "international_competitors" in brand:
        brand["international_competitors"].append("Desigual")
    # Delete the creation_date key.
    del brand["creation_date"]
    # Print the last item in international_competitors.
    print(brand["international_competitors"][-1])
    # Print the major colors in the US.
    print(brand["major_color"]["US"])
    # Print the number of keys in the dictionary.
    print(len(brand))
    # Print all keys of the dictionary.
    num_keys = brand.keys()
    print(num_keys)

    print(brand)
    return brand #returns dictionary for use in other function.

def exercize3bonus():
    # Create another dictionary called more_on_zara with creation_date and number_stores. 
    # Merge this dictionary with the original brand dictionary and print the result.
    zara = exercize3() # Gets dictionary from exercize3 function.
    more_on_zara = {
        "creation_date" : 1980,
        "number_stores" : 357
    }

    merged_zara = zara | more_on_zara
    print(merged_zara)

def exercize4():
    # You are given a list of Disney characters. Create three dictionaries based on different patterns 
    # as shown below:
    users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
    # Create a dictionary that maps characters to their indices:
    disney_characters = {element: index for index, element in enumerate(users)}
    print(disney_characters)

    # Create a dictionary that maps indices to characters:
    disney_indices = dict(enumerate(users))
    print(disney_indices)

    # Create a dictionary where characters are sorted alphabetically and mapped to their indices:
    disney_sorted_and_mapped = {item: idx for idx, item in enumerate(sorted(users))}
    print(disney_sorted_and_mapped)

exercize1()
exercize2()
exercize2bonus()
exercize3()
exercize3bonus()
exercize4()