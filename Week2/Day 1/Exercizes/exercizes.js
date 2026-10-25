// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

/* Write code to remove “Greg” from the people array. */
people.splice(0, 1); //index, amount to be deleted

/* Write code to replace “James” to “Jason”. */
people[people.indexOf("James")] = "Jason";

/* Write code to add your name to the end of the people array. */
people.push("Barry");

/* Write code that console.logs Mary’s index. take a look at the indexOf method on Google. */
console.log(people.indexOf("Mary"));

/* Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name. */
const peopleCopy = people.slice(1, 3);

/* Write code that gives the index of “Foo”. Why does it return -1 ? */
console.log(people.indexOf["foo"])
// Currently returns undefined (?)

/* Create a variable called last which value is the last element of the array. */
let last = people[people.length - 1];
console.log(last)

/* Using a loop, iterate through the people array and console.log each person. */
for (let person of people) {
    console.log(person);
}

/* Using a loop, iterate through the people array and exit the loop after you console.log “Devon” . */
for (let person of people) {
    if (person == "Devon") {
        break;
    }
    console.log(person);
}

// Exercise 2 : Your favorite colors
const colors = ["Blue", "Red", "Violet", "Green"]

/* Create an array called colors where the value is a list of your five favorite colors. */
for (let myColor of colors) {
    console.log(myColor);
}

/* Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, 
“My #2 choice is red” ect… */

for (let i = 0; i < colors.length; i++) {               // I starts at 0, goes through length of array
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

/* Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, 
picking the correct suffix for each number. */
const rank = ["first", "second", "third", "fourth"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${rank[i]} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat the question
/* Prompt the user for a number. */
let value = 0
while (value < 10) {
  let myNum = prompt("Please enter a number: ");

  myNum = Number(myNum);
  
  if (isNaN(myNum)) {
      console.log("Please enter a valid number next time.");
  } else if (myNum < 10) {  /* While the number is smaller than 10 continue asking the user 
                                for a new number. */
      console.log("Enter a number greater than or equal to 10 to exit.");
  } else {
    value = myNum;
  }
}
 console.log("You exited the while loop.")

 // Exercise 4 : Building Management
 const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

/* Console.log the number of floors in the building. */
console.log(building.numberOfFloors)

/* Console.log how many apartments are on the floors 1 and 3. */
console.log(`The first floor has ${building.numberOfAptByFloor.firstFloor} floors`)
console.log(`The third floor has ${building.numberOfAptByFloor.thirdFloor} floors`)

/* Console.log the name of the second tenant and the number of rooms he has in his apartment. */
console.log(
    `The second tenant is ${building.nameOfTenants[1]}, and he has ${building.numberOfRoomsAndRent.dan[0]} rooms.`
);

/* Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
If it is, than increase Dan’s rent to 1200. */

let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

// console.log(building.numberOfRoomsAndRent);

// Exercise 5 : Family
let family = {
  name: "Barry",
  age: 54,
  occupation: "Student",
};

/* Using a for in loop, console.log the keys of the object. */
for (let key in family) {
    console.log(key);
}

/* Using a for in loop, console.log the values of the object. */
for (let key in family) {
    console.log(family[key]);
}

// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let newString = ""

for (let key in details) {
    newString += (key)
    newString += " "
    newString += (details[key])
    newString += " "
}

console.log(newString)

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
/* A group of friends have decided to start a secret society. The society’s name will be 
the first letter of each of their names sorted in alphabetical order. */

let secret = [];

for (let key in names) {
    secret.push(names[key][0]);
}

secret.sort();

console.log(secret.join("")); // Converts array to string without spaces.