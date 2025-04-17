import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetails.css";
import starEmpty from "../../assets/starempty.svg";
import starFilled from "../../assets/starfilled.svg";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=f4578ae6&plot=full&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
        const found = saved.find((fav) => fav.imdbID === data.imdbID);
        setIsFavorite(!!found);
      })
      .catch((error) => console.error("API error: ", error));
  }, [id]);
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
    window.dispatchEvent(new Event("watchlist-updated"));
  };

  if (!movie) return <p>Laddar...</p>;

  return (
    <article className="movie-info">
      <section className="movie-info__head">
        <aside className="movie-info__title">
          <h2>{movie.Title}</h2>
        </aside>
        <aside className="movie-info__fav" onClick={toggleFavorite}>
          <img
            src={isFavorite ? starFilled : starEmpty}
            alt="favorite-toggle"
          />
        </aside>
      </section>
      <article className="movie-info__about">
        <section className="movie-info__poster">
          <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        </section>
        <section className="movie-info__details">
          <section className="movie-info__misc">
            <p>
              <strong>IMDb Rated:</strong> {movie.Rated}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {movie.imdbRating}
            </p>
          </section>
          <section className="movie-info__plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </section>
          <section className="movie-info__people">
            <aside className="movie-info__director">
              <p>
                <strong>Director:</strong>
              </p>
              <p>{movie.Director}</p>
            </aside>
            <aside className="movie-info__writer">
              <p>
                <strong>Writer:</strong>
              </p>
              <p>{movie.Writer}</p>
            </aside>
            <aside className="movie-info__actors">
              <p>
                <strong>Actors:</strong>
              </p>
              <p>{movie.Actors}</p>
            </aside>
          </section>
        </section>
      </article>
    </article>
  );
}

export default MovieDetails;
