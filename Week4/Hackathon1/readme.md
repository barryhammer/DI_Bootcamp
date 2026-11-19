# Random Movie Generator — TMDB

## About the Project

A movie recommendation web application created for the Developers Institute Week 4 Hackathon.

Users enter a movie genre, and the application retrieves five random movies matching that genre using The Movie Database (TMDB) API.

**Technologies:** HTML, CSS, JavaScript, Node.js, Express.js, and TMDB API.

## How to Install and Run

1. Install [Node.js](https://nodejs.org/).
2. Clone the GitHub repository:

   ```bash
   git clone https://github.com/barryhammer/DI_Bootcamp.git
   cd DI_Bootcamp/Week4/Hackathon1
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project directory and add your TMDB API key:

   ```env
   TMDB_API_KEY=your_api_key_here
   ```

   You can obtain an API key from [The Movie Database](https://www.themoviedb.org/).

5. Start the server:

   ```bash
   node server.js
   ```

6. Open the application's local address in your browser using the port configured in `server.js`.

## How to Use

Enter a movie genre and click the search button. The application will display five randomly selected movies from that genre.

## Author

Barry Hammer  
Developers Institute — Full Stack Bootcamp, Week 4 Hackathon 1.
