def challenge1():
    # Create a dictionary that stores the indices (number of the position) of each letter in a 
    # word provided by the user(input()).
    user_input = input("Please enter a word: ")
    user_input_dict = {} # Setting up dictionary
    for index, char in enumerate(user_input):
        if char in user_input_dict: # If character is key in dictionary, 
                                    # append the current index to the list associated with that key.
            user_input_dict[char].append(index)
        else:                       # else, create a new key-value pair in the dictionary.
            user_input_dict[char] = [index]
    print(user_input_dict)

def challenge2():
    # Create a program that prints a list of items that can be purchased with a given amount of money.
    # Initialize values
    items_purchase = {
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }
    wallet = "$300"
    money = int(wallet.replace("$", ""))
    basket = []

    # Convert prices to integers
    updated_items = {
        key: int(value.replace("$", "").replace(",", ""))
        for key, value in items_purchase.items()
    }

    # Sort dictionary by price
    sorted_items = dict(sorted(updated_items.items(), key=lambda item: item[1]))

    for item, price in sorted_items.items():
        if price <= money:
            basket.append(item)
            money -= price

    if len(basket) == 0:
        basket = ["Nothing"]

    print(basket)

#challenge1()
challenge2()