"""
Iterative Approach - Uses for loop in range n. Each new number is calculated by adding the last two Fibonacci numbers.

def fibonacci_iterative(n):
  a, b = 0, 1
  sequence = []
  for _ in range(n):
    sequence.append(a)
    a, b = b, a + b
  return sequence

fib_num = int(input("Please enter a non-negative number: "))
print(fibonacci_iterative(fib_num))
"""

"""
Recursion approach - Recursively calling the function for the previous two terms.

def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

fib_num = int(input("Please enter a non-negative number: "))
for i in range(fib_num):
    print(fib(i), end=" ")
"""

"""
Dynamic programming - This approach stores previously calculated Fibonacci numbers in a list. Instead of recalculating values again and again, it reuses stored results to generate the sequence.

fib_num = int(input("PLease enter a non-negative number: "))
fib = [0, 1]

for i in range(2, fib_num):
    fib.append(fib[i - 1] + fib[i - 2])

print(*fib)

Using print(*fib) is a short and elegant way to unpack and print all elements of an iterable (like a 
list, tuple, generator named fib) separated by spaces, rather than printing the container itself.
"""