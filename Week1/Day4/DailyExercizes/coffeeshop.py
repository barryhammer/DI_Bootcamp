# Coffee Shop Menu Manager

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0,
    "tea": 7.0,
    "hot_chocolate": 9.5
}

menu_dict = menu # Adding this only because the specs want me to use menu_item when calling each function.

def show_menu(menu_dict):
    if not menu_dict:
        print(f"The menu is empty.")
    else: 
        print("Current menu:")
        for item, price in menu_dict.items():
            print(f"{item} - {price:.2f}₪") # Sorry, I like having two digits for the price

def add_item(menu_dict):
    new_item = input(f"Enter new drink name: ")
    if new_item in menu_dict:
        print(f"Item already exists!")
    else:
        new_price = float(input(f"Enter price: "))
        if new_price < 0:
            print("Invalid price!")
        else: 
            menu_dict[new_item] = new_price
            return menu_dict

def update_price(menu_dict):
    menu_update = input(f"Please enter which drink you want to update: ")
    if menu_update not in menu_dict:
        print(f"Item not found.")
    else:
        update_price = float(input(f"Please give the new price for {menu_update}: "))
        if update_price < 0:
            print("Invalid price!")
        else: 
            menu_dict[menu_update] = update_price
            return menu_dict

def delete_item(menu_dict):
    delete_item = input(f"Enter drink to be deleted: ")
    if delete_item not in menu_dict:
        print(f"Item not found.")
    else:
        del menu_dict[delete_item]
        print("Item deleted.")
        return menu_dict

def search_item(menu_dict):
    find_item = input(f"Please enter the drink you want to find: ")
    if find_item not in menu_dict:
        print(f"Not in the menu.")
    else:
        price = menu_dict.get(find_item)
        print(f"{find_item} costs {price:.2f}₪")

def show_options():
    print("""What would you like to do?
            1. Show menu
            2. Add item
            3. Update price
            4. Delete item
            5. Exit
            6. Search item""")

def apply_discount(menu_dict, percent): # Not adding it to the final program, just adding it here.
    if not menu_dict:
        print(f"The menu is empty.")
    else: 
        print("Current menu:")
        for item, price in menu_dict.items():
            price = price * (100 / percent) # 10% discount
            print(f"{item} - {price:.2f}₪")

def run_coffee_shop():
    while True:
        show_options()
        option = input(f"Please choose an option: ")
        if option == 1:
            show_menu(menu_dict)
        elif option == 2:
            add_item(menu_dict)
        elif option == 3:
            update_price(menu_dict)
        elif option == 4:
            delete_item(menu_dict)
        elif option == 5:
            print("Goodbye!")
            break
        elif option == 6:
            search_item(menu_dict)
        else:
            print(f"Invalid choice.")

# Start the program
run_coffee_shop()