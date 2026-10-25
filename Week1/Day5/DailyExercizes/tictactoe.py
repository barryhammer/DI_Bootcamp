def tictactoe():
    player1 = "X"
    player2 = "O"

    print("TIC TAC TOE")

    # Actual game board
    board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]

    def display_board():
        matrix = [
            ["*" * 17],
            [f"*  {board[0][0]} | {board[0][1]} | {board[0][2]}  *"],
            ["*  ---|---|---  *"],
            [f"*  {board[1][0]} | {board[1][1]} | {board[1][2]}  *"],
            ["*  ---|---|---  *"],
            [f"*  {board[2][0]} | {board[2][1]} | {board[2][2]}  *"],
            ["*" * 17],
        ]

        for row in matrix:
            print(*(f"{elem:4}" for elem in row))
        print()

    def check_winner(player):
        # 8 possible winning combinations
        winning_combinations = [
            # rows
            [(0,0), (0,1), (0,2)],
            [(1,0), (1,1), (1,2)],
            [(2,0), (2,1), (2,2)],

            # columns
            [(0,0), (1,0), (2,0)],
            [(0,1), (1,1), (2,1)],
            [(0,2), (1,2), (2,2)],

            # diagonals
            [(0,0), (1,1), (2,2)],
            [(0,2), (1,1), (2,0)]
        ]

        for combination in winning_combinations:
            if all(board[row][column] == player 
                   for row, column in combination):
                return True

        return False

    def board_full():
        for row in board:
            if " " in row:
                return False
        return True

    current_player = player1

    while True:
        display_board()

        print(f"Player {current_player}'s turn...")

        row = int(input("Enter row (0-2): "))
        column = int(input("Enter column (0-2): "))

        # Check if space is available
        if board[row][column] != " ":
            print("That space is already taken. Try again.")
            continue

        # Place player's symbol
        board[row][column] = current_player

        # Check winner
        if check_winner(current_player):
            display_board()
            print(f"Player {current_player} wins!")
            break

        # Check tie
        if board_full():
            display_board()
            print("It's a tie!")
            break

        # Switch players
        if current_player == player1:
            current_player = player2
        else:
            current_player = player1


tictactoe()