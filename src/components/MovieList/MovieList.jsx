import React, { useEffect, useState } from "react";
import "./movieList.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieList() {
  //Made an array to hold the movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://santosnr6.github.io/Data/favoritemovies.json")
      .then((res) => {
        if (!res.ok)
          throw new Error(
            "Failed to fetch movies, you should be ashamed of yourself"
          );
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <section key={movie.imdbID} className="movie-list-item">
          <MovieCard movie={movie} />
        </section>
      ))}
    </section>
  );
}

export default MovieList;
