import React from "react";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  }

  return (
    <div className="movie-card">
      <div className="movie-favorite" id="placeholder">
        <img src="../src/assets/starempty.svg" alt="favorite-star-empty"/> 
      </div>
      <img alt={movie.Title} className="movie-poster" src={movie.Poster}></img>
      <p onClick={handleClick} id={movie.imdbID} className="movie-title">{movie.Title}</p>
    </div>);
}

export default MovieCard;
