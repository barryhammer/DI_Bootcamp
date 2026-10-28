// Using arrow function with ternary operator
// Ternary operator ? checks if a value is true; if so, it runs the next operation.
// If Ternary operator is false, it goes to the next line.
const calculator = (a, b, operator) => {
        const total =
        operator === "+" ? a + b : // If operator is +, return a + b
        operator === "-" ? a - b : // If operator is -, return a - b
        operator === "*" ? a * b : // If operator is *, return a * b
        operator === "/" ? a / b : // If operator is /, return a / b
        "Invalid operator";        // If none of the above operators, return error message

    console.log(total);
}

calculator(100, 15, "+"); // 115
calculator(100, 15, "-"); // 85
calculator(100, 15, "*"); // 1500
calculator(100, 15, "/"); // 6.666666666666667
calculator(100, 15, "."); // "Invalid operator"