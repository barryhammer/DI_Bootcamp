//  Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`The #${i+1} color is ${colors[i]}`);
}

colors.includes("Violet") ? console.log("Yeah") : console.log("No...")

// Exercise 2 : Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let number = index + 1;
    let suffix = number <= 3 ? ordinal[number] : ordinal[0];

    console.log(`${number}${suffix} choice is ${color}.`);
});

// Exercise 3 : Analyzing
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// The result will display an array with 'bread', then all vegetables, then 'chicken', then all fruits.

------2------
const country = "USA";
console.log([...country]);
// This will display all variables in the array country - in this case, just 'USA'

------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// The console displays twice undefined, since neither part of the array has any variables.

// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const firstnames = users.map(user => `Hello ` + user.firstName);
console.log(firstnames); 

const fullStack = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStack);

// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const myEpic = epic.reduce((accumulator, current) => {
    accumulator = accumulator + " " + current;
    return accumulator;
});

console.log(myEpic);

// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passed = students.filter(student => student.isPassed);
console.log(passed);

passed.forEach(student => {
    console.log(`Congratulations ${student.name}, you passed the course in ${student.course}.`);
});