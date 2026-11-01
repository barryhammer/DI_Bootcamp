
// Select the form and story elements
const myForm = document.getElementById("libform");
const mySpan = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

// Store the user's input values
let noun, adjective, person, verb, place;

// Store the current story template
let currentStory = 0;

// Function to generate a story
function generateStory(storyNumber) {
    let story = "";

    if (storyNumber === 0) {
        story = `Once upon a time, ${person} was ${verb} through the ${adjective} ${place}. ${person} looked down and saw a ${noun}.`;
    } else if (storyNumber === 1) {
        story = `${person} discovered a ${adjective} ${noun} while ${verb} near the ${place}. It was a day to remember!`;
    } else {
        story = `One day, ${person} went to the ${place} and found a ${adjective} ${noun}. Everyone was surprised to see ${person} ${verb}!`;
    }

    mySpan.textContent = story;
}

// Listen for the form submission
myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(event.target);

    noun = formData.get("noun").trim();
    adjective = formData.get("adjective").trim();
    person = formData.get("person").trim();
    verb = formData.get("verb").trim();
    place = formData.get("place").trim();

    // Check that all fields contain data
    if (noun === "" || adjective === "" || person === "" ||
        verb === "" || place === "") {
        alert("Please enter data for all input fields.");
    } else {
        currentStory = 0;
        generateStory(currentStory);
    }
});

// Shuffle between different story templates
shuffleButton.addEventListener("click", function() {
    // Make sure a story has already been generated
    if (mySpan.textContent === "") {
        alert("Please generate a story first.");
        return;
    }

    // Randomly select a different story template
    let newStory;

    do {
        newStory = Math.floor(Math.random() * 3);
    } while (newStory === currentStory);

    currentStory = newStory;
    generateStory(currentStory);
});
