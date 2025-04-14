import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=f4578ae6&plot=full&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  if (!movie) return <p>Laddar...</p>;

  return (
    <article className="movie-info">
      <div className="movie-info__head">
        <div className="movie-info__title">
          <h2>{movie.Title}</h2>
        </div>
        <div className="movie-info__fav" id={movie.imdbID}>
          <img
            src="../src/assets/starempty.svg"
            id="favIcon"
            alt="favorite-star-empty"
          />
        </div>
      </div>
      <article className="movie-info__about">
        <div className="movie-info__poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info__details">
          <div className="movie-info__misc">
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
          </div>
          <div className="movie-info__plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          <div className="movie-info__people">
            <div className="movie-info__director">
              <p>
                <strong>Director:</strong>
              </p>
              <p>{movie.Director}</p>
            </div>
            <div className="movie-info__writer">
              <p>
                <strong>Writer:</strong>
              </p>
              <p>{movie.Writer}</p>
            </div>
            <div className="movie-info__actors">
              <p>
                <strong>Actors:</strong>
              </p>
              <p>{movie.Actors}</p>
            </div>
          </div>
        </div>
      </article>
    </article>
  );
}

export default MovieDetails;
