student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

average = 0
total = 0
total_letter = ""

for key, value in student_grades.items():
    student = key
    total = sum(value)
    average = round(total / len(value), 2)
    match int(average):
        case average if average > 90:
            total_letter = "A"
        case average if average > 80 and average <= 90:  
            total_letter = "B"
        case average if average > 70 and average <= 80:  
            total_letter = "C"
        case average if average > 60 and average <= 70:  
            total_letter = "D"
        case _:
            total_letter = "F"
    print(f"{student} has an average grade of {average} which translates to a {total_letter} grade.")