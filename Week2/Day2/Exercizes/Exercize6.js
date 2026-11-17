
// Exercise 6 - Change the Navbar

// Step 1: Retrieve the div
const navBar = document.getElementById("navBar");

// Step 2: Change its ID
navBar.setAttribute("id", "socialNetworkNavigation");

// Step 3: Retrieve the ul
const ul = navBar.querySelector("ul");

// Create a new li
const newLi = document.createElement("li");

// Create a text node containing "Logout"
const logoutText = document.createTextNode("Logout");

// Append the text node to the li
newLi.appendChild(logoutText);

// Append the li to the ul
ul.appendChild(newLi);

// Step 4: Retrieve the first and last li
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display their text
console.log(firstLi.textContent);
console.log(lastLi.textContent);
