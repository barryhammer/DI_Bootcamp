import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

def find_sums():
    if target_number == 0:                          # Boundary exception
        print("0 and 0 sums to the target number 0")
    else:
        seen_numbers = set()   # Stores numbers we have already checked - from ChatGPT
        for number in list_of_numbers:
            needed_number = target_number - number

            if needed_number in seen_numbers:
                print(f"{number} and {needed_number} sum to the target number {target_number}")
                return

            seen_numbers.add(number)

    print(f"No two numbers in the list sum to {target_number}")

find_sums()