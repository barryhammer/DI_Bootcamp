// Exercise 1 : Location

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Returns "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)""

// Exercise 2: Display Student Info
function displayStudentInfo({ first, last }) {
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 }
let newList = []
let newList2 = []

Object.entries(users).forEach(([key, value]) => {
    newList.push([key, value]);
});

Object.entries(users).forEach(([key, value]) => {
    value *= 2
    newList2.push([key, value]);
});


console.log(newList)
console.log(newList2)

// Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// ovject - new Person() creates an object from class Person.

// Exercise 5 : Dog class
// Number 2 is correct
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 : Challenges
[2] === [2] // false
{} === {} // false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // Number here has been changed from the above code.
console.log(object3.number) // Number here is simply copying number from object2.
console.log(object4.number) // Number here is referencing last object4, which changed number to 5.

console.log(Object.values(person)); // ["John", 30, "London"]

class animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

const myNewAnimal1 = new animal("Fluffy", "Dog", "Black");
const myNewAnimal2 = new animal("Snookums", "Cat", "White");
const myNewAnimal3 = new animal("Willy", "Whale", "Black");

console.log(myNewAnimal3)

// Child class
class Sounds extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color);
        this.sound = sound;
    }
}

const myNewAnimal4 = new Sounds(
    "Lily",
    "cow",
    "brown and white",
    "Moooo"
);

console.log(`${myNewAnimal4.sound} I'm a ${myNewAnimal4.type}, named ${myNewAnimal4.name} and I'm ${myNewAnimal4.color}`);