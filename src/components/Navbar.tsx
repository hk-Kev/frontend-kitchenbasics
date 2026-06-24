import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-content">
        <div className="logo-info">
          <img src="/logo.png" alt="Our Kithen Logo" id="logo" />
          <p>KitchenBasics</p>
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Cookware
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Tableware
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Appliances
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </div>
        <div className="nav-actions">
          <a href="#" id="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
}
