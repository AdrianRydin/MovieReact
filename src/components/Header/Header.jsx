import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  return (
    <header className="header">
      <div className="content-wrapper header__flex">
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
        <Link to="/watchlist" className="header__fav-btn">
          Watchlist
        </Link>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
