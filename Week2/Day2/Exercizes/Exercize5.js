// Exercise 5 - DOM Manipulation

// Part 2.1 - Retrieve the div and console.log it
const container = document.getElementById("container");
console.log(container);

// Retrieve both lists
const lists = document.querySelectorAll("ul.list");

// Part 2.2 - Change Pete to Richard
lists[0].children[1].textContent = "Richard";

// Part 2.3 - Delete the second li of the second ul
lists[1].children[1].remove();

// Part 2.4 - Change the first li of each ul to your name
for (let list of lists) {
    list.children[0].textContent = "Barry";
}

// Part 3.1 - Add student_list class to both ul elements
for (let list of lists) {
    list.classList.add("student_list");
}

// Part 3.2 - Add two classes to the first ul
lists[0].classList.add("university", "attendance");

// Part 4.1 - Style the div
container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

// Part 4.2 - Hide Dan
const allItems = document.querySelectorAll("li");

for (let item of allItems) {
    if (item.textContent === "Dan") {
        item.style.display = "none";
    }
}

// Part 4.3 - Add a border to Richard
for (let item of allItems) {
    if (item.textContent === "Richard") {
        item.style.border = "2px solid black";
    }
}

// Part 4.4 - Change the font size of the body
document.body.style.fontSize = "20px";

// Part 5 - Bonus
if (container.style.backgroundColor === "lightblue") {
    const firstUser = lists[0].children[0].textContent;
    const secondUser = lists[1].children[0].textContent;

    alert(`Hello ${firstUser} and ${secondUser}`);
}
