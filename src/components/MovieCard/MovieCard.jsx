import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";
import starEmpty from "../../assets/starempty.svg";
import starFilled from "../../assets/starfilled.svg";

function MovieCard({ movie, onFavoriteToggle }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    const found = saved.find((fav) => fav.imdbID === movie.imdbID);
    setIsFavorite(!!found);
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    let updated;

    if (isFavorite) {
      updated = saved.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updated = [...saved, movie];
    }

    localStorage.setItem("watchlist", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) onFavoriteToggle();
  };

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

return (
    <div className="movie-card">
      <div className="movie-favorite" onClick={toggleFavorite}>
        <img
          src={isFavorite ? starFilled : starEmpty}
          alt="favorite-toggle"
        />
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
