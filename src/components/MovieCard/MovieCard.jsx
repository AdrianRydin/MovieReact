import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-favorite" id="placeholder">
        <img src="../src/assets/starempty.svg" alt="favorite-star-empty" />
      </div>
      <Link to={`/movie/${movie.imdbID}`} className="link-container">
        <img
          alt={movie.Title}
          className="movie-poster"
          src={movie.Poster}
        ></img>
        <p id={movie.imdbID} className="movie-title">
          {movie.Title}
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;
