
require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

// Allow Express to serve HTML, CSS, and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
const TMDB_TOKEN = process.env.TMDB_API_TOKEN;

// Test that our Express server works
// app.get("/", (req, res) => {
//     res.send("Film Recommendation API is running!");
// });

// Retrieve movies from TMDB by genre ID
app.get("/api/movies/:genreId", async (req, res) => {
    const genreId = req.params.genreId;

    try {
        const url = new URL(
            "https://api.themoviedb.org/3/discover/movie"
        );

        url.searchParams.set("with_genres", genreId);
        url.searchParams.set("language", "en-US");

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${TMDB_TOKEN}`,
                accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`TMDB returned ${response.status}`);
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            error: "Unable to retrieve movies."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


/* 
app.get() — creates an endpoint that responds to GET requests.
req.params.genreId — reads the genre ID from the URL.
fetch() — requests data from TMDB.
await response.json() — converts the API response into a JavaScript object.
0res.json(data) — sends the movie data to your browser.
*/