import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Caroussel from "./components/Caroussel/Caroussel";
import SearchResult from "./Pages/SearchResult/SearchResult";
import { useEffect } from "react";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function HomePage() {
  return (
    <>
      <Caroussel />
      <MovieList />
    </>
  );
}

function App() {
  useEffect(() => {
    // Fetch API
  }, []);

  return (
    <section className="app-wrapper">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:title" element={<SearchResult />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
