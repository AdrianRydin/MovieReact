import React, { useState } from "react";
import "./hamburgermenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      <div className={`hamburger-overlay ${isOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faXmark} />
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
