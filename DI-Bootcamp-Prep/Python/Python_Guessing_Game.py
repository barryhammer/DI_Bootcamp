import random

def number_guessing_game(random_number, max_attempts):
    for guesses in range(max_attempts):
        guess = int(input("Guess the number: "))

        if guess == random_number:
            print("Congratulations, you got it!")
            break

        elif guess < random_number:
            print("Too low!")

        elif guess > random_number:
            print("Too high!")

        if guesses == max_attempts - 1:
            print(f"Sorry, you ran out of guesses. The number was {random_number}")


random_number = random.randint(1, 100)
max_attempts = 7

print("""
Welcome to the guessing game!
Please try to guess the random number.
You have 7 chances to get it right!
""")

number_guessing_game(random_number, max_attempts)