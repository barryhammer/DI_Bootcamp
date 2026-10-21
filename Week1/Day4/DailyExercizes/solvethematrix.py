MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%
'''


# Step 1: Transform the string into a 2D list
def create_matrix(matrix_str):
    # Remove only the newlines at the beginning and end.
    # Keep spaces inside the rows.
    rows = matrix_str.strip("\n").split("\n")

    matrix = []

    for row in rows:
        matrix.append(list(row))

    return matrix


# Step 2: Read the matrix column by column
def read_columns(matrix):
    text = ""

    rows = len(matrix)
    cols = max(len(row) for row in matrix)

    for col in range(cols):
        for row in range(rows):
            # Prevent index errors if a row is shorter
            if col < len(matrix[row]):
                text += matrix[row][col]

    return text


# Step 3 & 4: Filter letters and replace symbols with spaces
def decode_message(text):
    message = ""
    previous_was_letter = False
    space_needed = False

    for char in text:

        if char.isalpha():
            # Add a space before the next word
            # if symbols were found between letters
            if space_needed:
                message += " "
                space_needed = False

            message += char
            previous_was_letter = True

        else:
            # A symbol after a letter means we may need a space
            if previous_was_letter:
                space_needed = True

    return message


# Step 5: Print the secret message
def print_message(message):
    print(message)


def main():
    matrix = create_matrix(MATRIX_STR)

    # Optional: See the matrix structure
    print("Matrix:")
    for row in matrix:
        print(row)

    column_text = read_columns(matrix)

    print("\nColumn text:")
    print(column_text)

    decoded_message = decode_message(column_text)

    print("\nSecret message:")
    print_message(decoded_message)


main()