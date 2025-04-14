import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Caroussel from "./components/Caroussel/Caroussel";
import SearchResult from "./Pages/SearchResult/SearchResult";

import { useEffect, useState } from "react";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Watchlist from "./Pages/WatchList/WatchList";

function HomePage() {
  return (
    <>
      <Caroussel />
      <MovieList />
    </>
  );
}

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // Fetch API
  }, []);

  return (
    <section className="app-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<SearchResult movies={movies} setMovies={setMovies} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
