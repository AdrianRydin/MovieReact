import React, { useEffect, useState } from 'react';
import React from "react";
import "./movieList.css";



function MovieList() {
  //I made an array to hold the movies
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  //Fetching Jespers api
    useEffect(() => {
        fetch('https://santosnr6.github.io/Data/favoritemovies.json')
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch movies');
          return res.json();
      })
      .then(data => {
          setMovies(data);
          setLoading(false);
      })
      .catch(err => {
          setError(err.message);
          setLoading(false);
      });
}, []);

if (loading) return <p>Loading movies...</p>;
if (error) return <p>Error: {error}</p>;

return (
  <div className="movie-list">
      {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
              <h2>{movie.Title}</h2>
              <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
              <div>
                  <iframe
                      width="300"
                      height="170"
                      src={movie.Trailer_link}
                      title={`Trailer for ${movie.Title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
          </div>
      ))}
  </div>
);
}

export default MovieList;