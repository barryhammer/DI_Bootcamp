import random

wordslist = [
    'correction', 'childish', 'beach', 'python', 'assertive',
    'interference', 'complete', 'share', 'credit card',
    'rush', 'south'
]

word = random.choice(wordslist)

def hangman():
    correct_letters = list(word)    # Creating a list with the values in word

    answer = []
    for letter in word:             # Initializing answer list to be filled with asterisks
        if letter == " ":
            answer.append(" ")      # Preserve spaces
        else:
            answer.append("*")

    counter = 7                     # Max amount of guesses user has to play
    game_counter = 0                # Initialize game counter

    while game_counter < counter:                   # Game play
        print("".join(answer))

        guess = input("Please enter a letter: ").lower()    # Input letter

        if guess not in word:
            game_counter += 1                   # One less chance to get word right

            if game_counter == counter:         # game_counter = 7
                print("Sorry, you lose!")
                print(f"The word you were looking for is {word}")
                break
            else:                               # Incorrect guessed letter
                print(f"Sorry, '{guess}' was incorrect.")
                print(f"You have {counter - game_counter} guesses remaining.")
        else:                                   # Guessed letter is correct

            for i in range(len(word)):
                if word[i] == guess:
                    answer[i] = guess         
                    print("Good job, you got a letter correct!")
                    print("".join(answer))
            
            if answer == correct_letters:
                print(f"Congratulations, you guessed the word '{word}'!")
                break

hangman()