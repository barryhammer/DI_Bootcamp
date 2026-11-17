# Coffee Shop Menu Manager

menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    if not menu_dict:
        print("The menu is empty.")
    else:
        print("Current menu:")
        for item, price in menu_dict.items():
            print(f"{item} - {price}₪")

def add_item(menu_dict):
    new_item = input("Enter new drink name: ")

    if new_item in menu_dict:
        print("Item already exists!")
    else:
        new_price = float(input("Enter price: "))

        if new_price < 0:
            print("Invalid price.")
        else:
            menu_dict[new_item] = new_price
            print(f'"{new_item}" added!')

def update_price(menu_dict):
    menu_update = input(
        "Which drink do you want to update? "
    )

    if menu_update not in menu_dict:
        print("Item not found.")
    else:
        new_price = float(input("Enter the new price: "))

        if new_price < 0:
            print("Invalid price.")
        else:
            menu_dict[menu_update] = new_price
            print("Price updated!")

def delete_item(menu_dict):
    item = input("Which drink do you want to delete? ")

    if item not in menu_dict:
        print("Item not found.")
    else:
        del menu_dict[item]
        print("Item deleted.")

def search_item(menu_dict):
    find_item = input(
        "Please enter the drink you want to find: "
    )

    if find_item not in menu_dict:
        print("Not in the menu.")
    else:
        price = menu_dict[find_item]
        print(f"{find_item} costs {price:.2f}₪")

def show_options():
    print("""
What would you like to do?
1. Show menu
2. Add item
3. Update price
4. Delete item
5. Exit
6. Search item
""")

def run_coffee_shop():
    while True:
        show_options()
        option = input("Please choose an option: ")

        if option == "1":
            show_menu(menu)
        elif option == "2":
            add_item(menu)
        elif option == "3":
            update_price(menu)
        elif option == "4":
            delete_item(menu)
        elif option == "5":
            print("Goodbye!")
            break
        elif option == "6":
            search_item(menu)
        else:
            print("Invalid choice, try again.")

# Start the program
run_coffee_shop()
