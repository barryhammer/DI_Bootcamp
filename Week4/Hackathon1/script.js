
const form = document.getElementById("filmSearchForm");
const genreInput = document.getElementById("genreInput");
const output = document.getElementById("jsonOutput");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Read the text entered by the user
    const genre = genreInput.value.trim();

    // Check that the input is not empty
    if (genre === "") {
        output.textContent = "Please enter a film genre.";
        return;
    }

    // Create a JavaScript object
    const searchData = {
        genre: genre
    };

    // Convert the object to formatted JSON
    const jsonString = JSON.stringify(searchData, null, 2);

    // Display the JSON on the page
    output.textContent = jsonString;
});
