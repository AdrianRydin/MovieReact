import React, { useEffect } from "react";
import "./searchResult.css";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResult({ movies, setMovies }) {
  const queryParam = useQuery().get("query");

  useEffect(() => {
    if (!queryParam) return;
    fetch(`http://www.omdbapi.com/?apikey=6d4dd304&s=${queryParam}*`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search || []))
      .catch((error) => console.error("API Error: ", error));
  }, [queryParam, setMovies]);

  return (
    <div className="search-result-container">
      {movies && movies.length > 0
        ? movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} onFavoriteToggle={() => {}}/>)
        : queryParam && <p>No results found.</p>}
    </div>
  );
}

export default SearchResult;
