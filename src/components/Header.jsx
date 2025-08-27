import React, { useState } from "react";
import logo from "../assets/it_lance_logo.svg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="IT LANCE" />
          </div>

          <nav className="navigation">
            <a href="#" className="nav-link">
              НАШИ УСЛУГИ
            </a>
            <a href="#" className="nav-link">
              СТАТЬИ
            </a>
            <a href="#" className="nav-link">
              ИНФОРМАЦИЯ
            </a>
            <a href="#" className="nav-link">
              О НАС
            </a>
            <a href="#" className="nav-link">
              КОНТАКТЫ
            </a>
          </nav>

          <div className="promo-section">
            <button className="promo-button">ОТПРАВИТЬ ЗАЯВКУ</button>
            <span className="language-text">РУС</span>
          </div>

          <div className="mobile-menu-btn">
            <span className="language-text">РУС</span>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#" onClick={toggleMenu}>
            НАШИ УСЛУГИ
          </a>
          <a href="#" onClick={toggleMenu}>
            СТАТЬИ
          </a>
          <a href="#" onClick={toggleMenu}>
            ИНФОРМАЦИЯ
          </a>
          <a href="#" onClick={toggleMenu}>
            О НАС
          </a>
          <a href="#" onClick={toggleMenu}>
            КОНТАКТЫ
          </a>
          <button className="promo-button" onClick={toggleMenu}>
            ОТПРАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
