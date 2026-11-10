// Uploading TMDB ID for listed genres.
const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 36, name: "History" }
];

const form = document.getElementById("filmSearchForm");
const genreInput = document.getElementById("genreInput");
const output = document.getElementById("jsonOutput");

/*
form.addEventListener("submit", function(event) {
    // Prevents page from reloading
    event.preventDefault();

    // Removes spaces and changes to lowercase
    const genre = genreInput.value.trim().toLowerCase();

    // Search the genres array
    const selectedGenre = genres.find(
        item => item.name.toLowerCase() === genre
    );

    // If genre selected is not found in array, send message.
    if (!selectedGenre) {
        output.textContent = "Genre not found. Please try again.";
        return;
    }

    // Create an object with the matching genre information
    const searchData = {
        genre: selectedGenre.name,
        genreId: selectedGenre.id
    };

    // JSON string with results
    output.textContent = JSON.stringify(searchData, null, 2);
});
*/


form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const genre = genreInput.value.trim().toLowerCase();

    const selectedGenre = genres.find(
        item => item.name.toLowerCase() === genre
    );

    if (!selectedGenre) {
        output.textContent = "Genre not found. Please try again.";
        return;
    }

    try {
        output.textContent = "Searching for movies...";

        const response = await fetch(
            `/api/movies/${selectedGenre.id}`
        );

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        // Code from original steps.
        // output.textContent = JSON.stringify(data, null, 2);

        // Get the array of movies from the API response
        // const movies = data.results;
        const movies = [...data.results];

        const selectedMovies = [];

        for (let i = 0; i < 5 && movies.length > 0; i++) {
            // Generate a random array index
            const randomIndex = Math.floor(Math.random() * movies.length);

            // Remove the selected movie from the available movies
            const randomMovie = movies.splice(randomIndex, 1)[0];

            // Add the movie to our selected list
            selectedMovies.push(randomMovie);
        }

        // Extract the title of each movie from every movie object and creates a new array 
        // containing only the movie titles.
        // const movieTitles = movies.map(movie => movie.title);
        const movieTitles = selectedMovies.map(movie => movie.title);

        // Display the titles on separate lines
        // output.textContent = movieTitles.join("\n");
        output.textContent = movieTitles.join("\n");

    } catch (error) {
        console.error("Error fetching movies:", error);
        output.textContent = "Unable to retrieve movies.";
    }
});
