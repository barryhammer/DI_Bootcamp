expenses = []
choice = 0

def personal_expense_tracker():
    while choice != 6:
        print('''===== PERSONAL EXPENSE TRACKER =====

        1. Add an expense
        2. View all expenses
        3. Calculate total expenses
        4. Search expenses by category
        5. Delete an expense
        6. Exit
        ''')
        choice = int(input("Enter your choice: "))
        print(choice)

        match choice:
            case 1:
                name = input("Enter the expense: ")
                category = input("Enter the category: ")
                amount = float(input("Enter the amount: "))
                expense = {
                    "name": name,
                    "category": category,
                    "amount": amount
                }
                expenses.append(expense)
                return
            case 2:
                return
            case 3:
                return
            case 4:
                return
            case 5:
                return