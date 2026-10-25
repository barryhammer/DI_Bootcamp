def tictactoe():
    player1 = "X"
    player2 = "O"

    print("TIC TAC TOE")
    matrix = [
    ["*" * 17],
    ["*     |   |     *"],
    ["*  ---|---|---  *"],
    ["*     |   |     *"],
    ["*  ---|---|---  *"],
    ["*     |   |     *"],
    ["*" * 17],
    ]
    for row in matrix:
        print(*(f"{elem:4}" for elem in row))
    print()
    print(f"Player {player1}'s turn...")
    print()
    row = int(input("Enter row: "))
    column = int(input("Enter column: "))

tictactoe()