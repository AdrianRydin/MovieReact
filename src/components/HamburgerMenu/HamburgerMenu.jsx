import React, { useState } from "react";
import "./hamburgermenu.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}

      <div className={`hamburger-overlay ${isOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <nav className="hamburger-nav">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/watchlist" onClick={closeMenu}>
            Watch List
          </Link>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;
