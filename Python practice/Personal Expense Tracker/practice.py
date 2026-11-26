def display_expenses(expenses):
    if not expenses:
        print("No expenses to display.")
        return

    for number, expense in enumerate(expenses, start=1):
        print(
            f"{number}. Name: {expense['name']} | "
            f"Category: {expense['category']} | "
            f"Amount: ₪{expense['amount']:.2f}"
        )


def personal_expense_tracker():
    expenses = []

    while True:
        print("""
===== PERSONAL EXPENSE TRACKER =====
1. Add an expense
2. View all expenses
3. Calculate total expenses
4. Search expenses by category
5. Delete an expense
6. Exit
""")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("Enter a whole number from 1 to 6.")
            continue

        match choice:
            case 1:
                name = input("Enter the expense name: ").strip()
                category = input("Enter the category: ").strip()

                try:
                    amount = float(input("Enter the amount: "))
                except ValueError:
                    print("Enter a numeric amount, such as 12.50.")
                    continue

                expenses.append({
                    "name": name,
                    "category": category,
                    "amount": amount,
                })
                print("Expense added.")

            case 2:
                display_expenses(expenses)

            case 3:
                total = 0
                for expense in expenses:
                    total += expense["amount"]
                print(f"Total expenses: ₪{total:.2f}")

            case 4:
                category = input("Enter the category to search for: ")
                category = category.strip().lower()
                matching_expenses = []

                for expense in expenses:
                    if expense["category"].lower() == category:
                        matching_expenses.append(expense)

                if matching_expenses:
                    display_expenses(matching_expenses)
                else:
                    print("No expenses found in that category.")

            case 5:
                display_expenses(expenses)
                if not expenses:
                    continue

                try:
                    number = int(input("Enter the expense number to delete: "))
                except ValueError:
                    print("Enter a whole number.")
                    continue

                if 1 <= number <= len(expenses):
                    deleted_expense = expenses.pop(number - 1)
                    print(f"Deleted {deleted_expense['name']}.")
                else:
                    print("That expense number is out of range.")

            case 6:
                print("Goodbye!")
                break

            case _:
                print("Choose a number from 1 to 6.")


personal_expense_tracker()