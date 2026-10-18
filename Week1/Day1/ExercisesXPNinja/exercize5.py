len_sent = 0

sentence = input("Please enter a sentence without using the character 'A': ")

while sentence != "":
    if "A" not in sentence:
        len_sent += len(sentence)
        print(f"Congratulations! You have entered {len_sent} characters without the character 'A'!")
    else:
        break

    sentence = input("Please enter another sentence: ")

print(f"You entered {len_sent} characters without the character 'A'.")