// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.splice(0, 1); //index, amount to be deleted

// Write code to replace “James” to “Jason”.
people[people.indexOf("James")] = "Jason";

//Write code to add your name to the end of the people array.
people.push("Barry");

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
const peopleCopy = people.slice(1, 3);

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf["foo"])
//Currently returns undefined (?)

//Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last)