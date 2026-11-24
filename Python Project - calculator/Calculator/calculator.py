
import tkinter as tk
import tkinter.simpledialog as simpledialog
import ast
import operator


# Mathematical calculation functions

OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.UAdd: operator.pos,
    ast.USub: operator.neg
}


def calculate(expression):
    """Safely evaluate a mathematical expression."""

    def evaluate(node):
        if isinstance(node, ast.Constant):
            if type(node.value) in (int, float):
                return node.value

        elif isinstance(node, ast.BinOp):
            operation = OPERATORS.get(type(node.op))

            if operation is not None:
                return operation(
                    evaluate(node.left),
                    evaluate(node.right)
                )

        elif isinstance(node, ast.UnaryOp):
            operation = OPERATORS.get(type(node.op))

            if operation is not None:
                return operation(evaluate(node.operand))

        raise ValueError("Invalid mathematical expression")

    tree = ast.parse(expression.strip(), mode="eval")
    return evaluate(tree.body)


def increase_percentage(total, percent):
    return round(total * (1 + percent / 100), 2)


def decrease_percentage(total, percent):
    return round(total * (1 - percent / 100), 2)


def remove_vat(total, vat=18):
    return round(total / (1 + vat / 100), 2)


# Calculator GUI

class Calculator:

    def __init__(self, master):
        self.master = master

        master.title("Percentage Calculator")
        master.configure(bg="black")
        master.resizable(False, False)

        # Result display
        self.display = tk.Entry(
            master,
            width=30,
            justify="right",
            font=("Arial", 20),
            bg="black",
            fg="white",
            insertbackground="white"
        )

        self.display.grid(
            row=0,
            column=0,
            columnspan=4,
            padx=5,
            pady=5,
            sticky="ew"
        )

        # Calculator state
        self.result_shown = False

        # Button layout
        buttons = [
            "1", "2", "3", "/",
            "4", "5", "6", "*",
            "7", "8", "9", "-",
            "0", ".", "C", "+",
            "+10%", "+18%", "+Custom%", "=",
            "-Custom%", "Excl. VAT", "⌫", "±"
        ]

        # Create calculator buttons
        for index, button in enumerate(buttons):

            row = index // 4 + 1
            col = index % 4

            tk.Button(
                master,
                text=button,
                command=lambda x=button: self.click(x),
                width=9,
                height=2,
                bg="orange",
                fg="black",
                font=("Arial", 11)
            ).grid(
                row=row,
                column=col,
                padx=2,
                pady=2,
                sticky="nsew"
            )

        # Keep columns evenly sized
        for col in range(4):
            master.columnconfigure(col, weight=1)

        # Keyboard shortcuts
        master.bind("<Return>", self.keyboard_calculate)
        master.bind("<KP_Enter>", self.keyboard_calculate)
        master.bind("<Escape>", self.keyboard_clear)

        self.display.bind("<KeyPress>", self.keyboard_input)
        self.display.focus_set()

    def click(self, key):
        """Handle calculator button clicks."""

        if key == "=":
            self.perform_calculation()

        elif key == "C":
            self.clear()

        elif key == "⌫":
            self.backspace()

        elif key == "+10%":
            self.add_percentage(10)

        elif key == "+18%":
            self.add_percentage(18)

        elif key == "+Custom%":
            self.add_percentage()

        elif key == "-Custom%":
            self.subtract_percentage()

        elif key == "Excl. VAT":
            self.calculate_without_vat()

        elif key == "±":
            self.change_sign()

        else:
            # Clear previous errors
            if self.display.get() == "Error":
                self.clear()

            # Start a new calculation after a result
            # unless the user presses an operator
            if self.result_shown:
                if key not in "+-*/":
                    self.clear()

                self.result_shown = False

            self.display.insert(tk.END, key)

    def show_result(self, result):
        """Display a result with two decimal places."""

        self.display.delete(0, tk.END)
        self.display.insert(0, f"{result:.2f}")
        self.result_shown = True

    def show_error(self):
        """Display an error message."""

        self.display.delete(0, tk.END)
        self.display.insert(0, "Error")
        self.result_shown = False

    def perform_calculation(self):
        """Calculate the expression in the display."""

        try:
            result = calculate(self.display.get())
            self.show_result(result)

        except (SyntaxError, ValueError, ArithmeticError):
            self.show_error()

    def clear(self):
        """Clear the calculator display."""

        self.display.delete(0, tk.END)
        self.result_shown = False

    def backspace(self):
        """Delete the last character."""

        current = self.display.get()

        if current == "Error":
            self.clear()

        elif current:
            self.display.delete(len(current) - 1, tk.END)
            self.result_shown = False

    def add_percentage(self, percent=None):
        """Increase the total by a percentage."""

        try:
            total = calculate(self.display.get())

            if percent is None:
                percent = simpledialog.askfloat(
                    "Add Percentage",
                    "Enter percentage to add:",
                    initialvalue=0,
                    minvalue=0,
                    parent=self.master
                )

            if percent is not None:
                result = increase_percentage(total, percent)
                self.show_result(result)

        except (SyntaxError, ValueError, ArithmeticError):
            self.show_error()

    def subtract_percentage(self):
        """Decrease the total by a custom percentage."""

        try:
            total = calculate(self.display.get())

            percent = simpledialog.askfloat(
                "Subtract Percentage",
                "Enter percentage to subtract:",
                initialvalue=0,
                minvalue=0,
                maxvalue=100,
                parent=self.master
            )

            if percent is not None:
                result = decrease_percentage(total, percent)
                self.show_result(result)

        except (SyntaxError, ValueError, ArithmeticError):
            self.show_error()

    def calculate_without_vat(self):
        """Calculate the original price before VAT."""

        try:
            total = calculate(self.display.get())
            result = remove_vat(total)
            self.show_result(result)

        except (SyntaxError, ValueError, ArithmeticError):
            self.show_error()

    def change_sign(self):
        """Change a positive number to negative or vice versa."""

        try:
            total = calculate(self.display.get())
            self.show_result(-total)

        except (SyntaxError, ValueError, ArithmeticError):
            self.show_error()

    def keyboard_calculate(self, event):
        self.perform_calculation()
        return "break"

    def keyboard_clear(self, event):
        self.clear()
        return "break"

    def keyboard_input(self, event):
        """Handle keyboard input and error recovery."""

        if event.char and event.char in "0123456789.+-*/()":

            if self.display.get() == "Error":
                self.clear()

            elif self.result_shown:

                if event.char not in "+-*/":
                    self.clear()

                self.result_shown = False

        elif event.keysym in ("BackSpace", "Delete"):
            self.result_shown = False


def main():
    root = tk.Tk()
    app = Calculator(root)
    root.mainloop()


if __name__ == "__main__":
    main()
