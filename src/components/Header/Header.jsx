import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  useEffect(() => {
    const updateCount = () => {
      const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
      setCount(saved.length);
    };

    updateCount();
    window.addEventListener("watchlist-updated", updateCount);
    return () => window.removeEventListener("watchlist-updated", updateCount);
  }, []);

  return (
    <header className="header">
      <section className="content-wrapper header__flex">
        <Link to="/">
          <img
            className="header__logo"
            src="./src/assets/logo.png"
            alt="logotype"
          />
        </Link>
        <form className="header__form" onSubmit={handleSubmit}>
          <input
            className="header__input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            aria-label="Search"
          />
          <button className="header__form-btn" type="submit">
            Search
          </button>
        </form>
        <span className="header__watchlist desktop-only">
        <Link to="/watchlist" className="header__fav-btn">Watchlist</Link>
        <span className="watchlist-count">{count}</span>
        </span>
        <HamburgerMenu />
      </section>
    </header>
  );
}

export default Header;
