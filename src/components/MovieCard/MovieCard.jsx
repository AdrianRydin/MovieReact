import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import starEmpty from "../../assets/starempty.svg";
import starFilled from "../../assets/starfilled.svg";
import missingPoster from "../../assets/icons/missing-poster.svg";

function MovieCard({ movie, onFavoriteToggle }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = missingPoster;
  };

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

  return (
    <article className="movie-card">
      <aside className="movie-favorite" onClick={toggleFavorite}>
        <img src={isFavorite ? starFilled : starEmpty} alt="favorite-toggle" />
      </aside>
      <Link to={`/movie/${movie.imdbID}`} className="link-container">
        <img
          alt={`Poster of ${movie.Poster}`}
          className="movie-poster"
          src={movie.Poster}
          onError={handleImgError}
        ></img>
        <p id={movie.imdbID} className="movie-title">
          {movie.Title}
        </p>
      </Link>
    </article>
  );
}

export default MovieCard;
