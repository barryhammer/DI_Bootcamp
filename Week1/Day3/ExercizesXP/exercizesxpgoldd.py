def exercize1():
    # Initialize birthdays
    birthdays = {'Barry': '1971/11/27', 
    'Shoshanna': '1980/09/08', 
    'Elishewa': '2009/09/20',
    'Awigail': '2011/11/06',
    'Test': '1999/01/01'
    }
    
    print("Welcome to the birthday look-up.")
    print("You can look up the birthdays of the people in the list!")
    name = input("Please enter a person's name: ")
    date = birthdays.get(name)
    print(f"{name} was born on {date}. Happy birthday!")
    # Should add check for None.
    
exercize1()