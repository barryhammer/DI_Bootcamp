
// Exercise 1: DOM manipulation

// Retrieve the article and heading elements
const article = document.querySelector("article");
const h1 = article.querySelector("h1");
const h2 = article.querySelector("h2");
const h3 = article.querySelector("h3");

// Display the h1 in the console
console.log(h1);

// Remove the last paragraph from the article
const paragraphs = article.querySelectorAll("p");
const lastP = paragraphs[paragraphs.length - 1];

if (lastP) {
    lastP.remove();
}

// Change the h2 background color to red when clicked
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});

// Hide the h3 when clicked
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

// Create a button to make all paragraphs bold
const button = document.createElement("button");
button.textContent = "Make paragraphs bold";
button.type = "button";

// Append the button to the article
article.appendChild(button);

// Make all remaining paragraphs bold when clicked
button.addEventListener("click", function() {
    const elements = article.querySelectorAll("p");

    elements.forEach(function(element) {
        element.style.fontWeight = "bold";
    });
});

// BONUS 1: Change h1 font size randomly on hover
h1.addEventListener("mouseover", function() {
    const randomSize = Math.floor(Math.random() * 31) + 20;
    h1.style.fontSize = randomSize + "px";
});

// BONUS 2: Fade out the second paragraph on hover
const secondP = article.querySelectorAll("p")[1];

if (secondP) {
    secondP.style.transition = "opacity 1s";

    secondP.addEventListener("mouseover", function() {
        secondP.style.opacity = "0";
    });
}
