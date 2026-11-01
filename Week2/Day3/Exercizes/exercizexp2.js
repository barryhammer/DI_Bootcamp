
// Exercise 2: HTML Forms

// Retrieve the form and display it in the console
const form = document.querySelector("form");
console.log(form);

// Retrieve the inputs by their IDs
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

// Retrieve the inputs by their name attributes
const firstByName = document.querySelector('[name="firstname"]');
const lastByName = document.querySelector('[name="lastname"]');

console.log(firstByName);
console.log(lastByName);

// Retrieve the unordered list
const usersAnswer = document.querySelector(".usersAnswer");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Retrieve the input values
    const first = fname.value.trim();
    const last = lname.value.trim();

    // Check that neither input is empty
    if (first === "" || last === "") {
        alert("Please enter both first and last names.");
        return;
    }

    // Clear previous results
    usersAnswer.replaceChildren();

    // Create an li for the first name
    const firstLi = document.createElement("li");
    firstLi.textContent = first;

    // Create an li for the last name
    const lastLi = document.createElement("li");
    lastLi.textContent = last;

    // Append both li elements to the ul
    usersAnswer.appendChild(firstLi);
    usersAnswer.appendChild(lastLi);
});
