// Exercize 1: Class with Access Modifiers 

class Employee {	
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;
	
  constructor(name: string, salary: number, position: string, department: string) {	
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;	
}	
	
  getEmployeeInfo(): string {	
    return `${this.name} ${this.position}`;	
  }	
}	

// Exercise 2: Readonly Properties in a Class

class Product {	
  readonly id: number;
  public name: string;
  public price: number;
	
  constructor(id: number, name: string, price: number) {	
    this.id = id;
    this.name = name;
    this.price = price;
}	
	
  getProductInfo(): string {	
    return `${this.name} ${this.price}`;	
  }	
}	

const product = new Product(101, "Barry", 99);
product.id = 102 // Cannot assign to 'id' because it is a read-only property

// Exercize 3: Class Inheritance

class Animal {
   constructor(public name: string) {}

   makeSound(): void {
     console.log(`${this.name} makes a sound.`);
   }
}

class Dog extends Animal {
   constructor(name: string) {
      super(name);
    }

    override makeSound(): void {
      console.log(`bark!`);
    }
}

const dog = new Dog("Buddy";
dog.makeSound(); //bark!

// Exercise 4: Static Properties and Methods

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

	static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 10)); // 15
console.log(Calculator.subtract(25, 15)); // 10

// Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel: string;
}

class PrintUserDetails implements PremiumUser {
    constructor(
        public readonly id: number,
        public name: string,
        public email: string,
        public membershipLevel: string
    ) {}

    printDetails(): void {
        console.log(
            `${this.id}, ${this.name}, ${this.email}, ${this.membershipLevel}`
        );
    }
}

const user1 = new PrintUserDetails(
    101,
    "Barry",
    "barry@example.com",
    "Gold"
);

user1.printDetails();