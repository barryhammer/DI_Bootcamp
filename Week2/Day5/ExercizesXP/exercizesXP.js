// Exercize 1: Scope
/* 
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// The value remains 3 outside the loop.
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// If a is declared a constant, there will be an error when the loop tries to change it to a 5.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // `inside the funcThree function 0`
funcTwo() // Changes value to 5
funcThree() // `inside the funcThree function 5`
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// first funcThree runs, funcTwo throws an error


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // ReferenceError: window is not defined
funcFive() // Not called

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// inside the funcSix function test - Variable a is changed inside funcSix()

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// in the if block 5 - value is true on reading if statement
// outside of the if block 2 - a remains 2 outside the if statement

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// The same as above. The a variable inside the if statement is a different variable.
*/

// Exercize 2: Ternary operator
/* 
function winBattle(){
    return true;
}
    */

// const winBattle = (win) => {return win ? 10 : 1;};
const winBattle = win => win ? 10 : 1;

console.log(winBattle(true));   // 10

// Example 3: Is it a string?
const isString = (val) => typeof val === 'string'; // Checks value 'val', returns true if typeof = "string"

// Exercise 4 : Find the sum
const add = (a, b) => a + b;

// Exercise 5 : Kg and grams
const kgToGrams = kg => {
    let grams = kg * 1000;
    return grams;
};

console.log(kgToGrams(5)); // 5000

// Exercize 6: Fortune teller
(function(numChildren, partnerName, geoLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} kids.`;
    console.log(fortune)
})(3, 'Alex', 'Paris', 'Software Engineer');

// Exercise 7 : Welcome
(function(newName) {
    const navbar = document.querySelector('.navbar');
    const newDiv = document.createElement('div');
    newDiv.textContent = newName;
    navbar.appendChild(newDiv + newDiv.profilePic); 
})('Alex');

// Exercise 8 : Juice Bar
// Part 1:
function makeJuice (size = "small"){
    const ingredients = [];
  function addIngredients(firstIngredient = "strawberries", secondIngredient = "pineapple", thirdIngredient = "milk") {
    const juiceDiv = document.createElement('div');
    juiceDiv.textcontent = (`The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}.`)
    // console.log(`The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}.`)
  }
  addIngredients();
}
makeJuice();

// Part 2:
function makeJuice(size = "small") {
    const ingredients = [];

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    }

    function displayJuice() {
        const newJuice = document.createElement('div');

        newJuice.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;

        document.body.appendChild(newJuice);
    }

    addIngredients("strawberries", "pineapple", "milk");
    addIngredients("banana", "orange", "yogurt");

    displayJuice();
}

makeJuice();
