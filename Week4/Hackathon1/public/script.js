// Uploading TMDB ID for listed genres.
const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
];

const form = document.getElementById("filmSearchForm");
const genreInput = document.getElementById("genreInput");
// const output = document.getElementById("jsonOutput");
const output = document.getElementById("movieResults");

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


function displayMovies(movies) {
    // Clear any previous search results
    output.innerHTML = "";

    movies.forEach(movie => {
        // Create a card container
        const card = document.createElement("div");
        card.classList.add("movie-card");

        // Create a poster image
        const poster = document.createElement("img");

        if (movie.poster_path) {
            poster.src =
                `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        } else {
            poster.alt = "No poster available";
        }

        poster.alt = `Poster for ${movie.title}`;
        poster.classList.add("movie-poster");

        // Create the movie title
        const title = document.createElement("h3");
        title.textContent = movie.title;

        // Create the release year
        const year = document.createElement("p");
        year.textContent = movie.release_date
            ? `Release year: ${movie.release_date.slice(0, 4)}`
            : "Release year: Unknown";

        // Create the description
        const description = document.createElement("p");
        description.textContent =
            movie.overview || "No description available.";

        // Add the elements to the card
        if (movie.poster_path) {
            card.appendChild(poster);
        }

        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(description);

        // Add the completed card to the page
        output.appendChild(card);
    });
}

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
        output.textContent = `Searching for ${selectedGenre.name} movies...`;

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
        
        // const movieTitles = selectedMovies.map(movie => movie.title);

        // Display the titles on separate lines
        // output.textContent = movieTitles.join("\n");
        
        // output.textContent = movieTitles.join("\n");
        document.getElementById("resultsHeading").textContent =
            `Five Random ${selectedGenre.name} Movies`;
        displayMovies(selectedMovies);

    } catch (error) {
        console.error("Error fetching movies:", error);
        output.textContent = "Unable to retrieve movies.";
    }
});
