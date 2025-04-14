import "./movieList.css";
import React, { useEffect, useState } from 'react';
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if (!response.ok) throw new Error('Failed to fetch top movies');
        const data = await response.json();
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setMovies(shuffled);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTopMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
