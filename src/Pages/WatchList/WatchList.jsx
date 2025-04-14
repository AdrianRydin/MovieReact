import React, { useEffect, useState, useCallback } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./watchList.css";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const fetchWatchlist = useCallback(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  useEffect(() => {
    fetchWatchlist();
  }, [fetchWatchlist]);

  return (
    <section className="watchlist-wrapper">
      <h2>Min Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Inga filmer tillagda ännu.</p>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onFavoriteToggle={fetchWatchlist} />
          ))}
        </div>
      )}
    </section>
  );
}

export default WatchList;
