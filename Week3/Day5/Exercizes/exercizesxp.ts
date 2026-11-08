// Exercize 1: Hello world
console.log("Hello world")

// Exercize 2: Type annotations
export {}; // Used to remove TypeScript error.
const age: number = 54;
const name: string = "Barry";

console.log(`${name} is currently ${age}`);

// Exercize 3: Union Types
let id: string | number;

// Exercize 4: Control flow with if... else
    function numType(num: number) {
    if (num > 0) {
        return(`${num} is a positive mumber.`);
    } else if (num < 0) {
        return(`${num} is a negative number.`);
    } else {
        return(`${num} is equal to 0.`);
    }
}

console.log(numType(3));
console.log(numType(-3));
console.log(numType(0));

// Exercise 5: Tuple Types

function getDetails(name: string, age: number): [string, number, string] {
  const greeting = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, greeting];
}

const result = getDetails("Alice", 30);

const [retrievedName, retrievedAge, message] = result; 
console.log(result);
console.log(message); 

// Exercize 6: Object Type Annotations

type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return {
    name,
    age, // Must match the Person shape
  };
}

const person = createPerson("Barry", 54);
console.log(person);

// Exercise 7: Type Assertions

const inputElement = document.getElementById("username") as HTMLInputElement; // treat the retrieved element as an HTML input element

inputElement.value = "Barry";

console.log(inputElement.value);

// Exercise 8: switch Statement with Complex Conditions

function getAction(user: string): string {
    switch (user) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

// Exercise 9: Function Overloading with Default Parameters
function greet(name?: string): string {
    return name ? `Hi there ${name}!` : "Hi there!";
}

console.log(greet("Barry"));
console.log(greet());