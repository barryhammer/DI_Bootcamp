import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: 2014},
        {id: 2, title: "John Wick: Chapter 2", release_date: 2017},
        {id: 3, title: "John Wick: Chapter 3 - Parabellum", release_date: 2019},
        {id: 4, title: "John Wick: Chapter 4", release_date: 2023},
    ]

    const handleSearch = () => {

    }

    return (<div className="Home">
        <form onSubmit={handleSearch} className="seacrh-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="searchButton">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id} />
        ))}
        </div>
    </div>

);
}

export default Home