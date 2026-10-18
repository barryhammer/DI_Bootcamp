month = int(input("Please enter a month number, from 1 to 12: "))

match month:
    case 3 | 4 | 5:
        print("The season is Spring.")
    case 6| 7 | 8:
        print("The season is Summer.")
    case 9 | 10 | 11:
        print("The season is Fall.")
    case 12| 1 | 2:
        print("The season is Winter.")
    case _:
        print("The number is outside the range 1-12.")