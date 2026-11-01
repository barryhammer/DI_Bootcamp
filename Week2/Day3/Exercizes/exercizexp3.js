
// Exercise 3: Transform the sentence

// Retrieve all bold elements inside the paragraph
const allBoldItems = document.querySelectorAll("#text strong");

// Return all bold elements
function getBoldItems() {
    return allBoldItems;
}

// Change the color of bold elements to blue
function highlight() {
    const boldItems = getBoldItems();

    boldItems.forEach(function(item) {
        item.style.color = "blue";
    });
}

// Restore the original color
function returnItemsToDefault() {
    const boldItems = getBoldItems();

    boldItems.forEach(function(item) {
        item.style.color = "";
    });
}

// Retrieve the paragraph
const paragraph = document.getElementById("text");

// Highlight bold words when the mouse enters
paragraph.addEventListener("mouseover", highlight);

// Restore colors when the mouse leaves
paragraph.addEventListener("mouseout", returnItemsToDefault);
