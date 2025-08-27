import React from "react";
import "./Header.css";
import logo from "../assets/it_lance_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-content">
            <nav className="navigation">
              <img src={logo} alt="" />

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
              <button className="cta-button">ОТПРАВИТЬ ЗАЯВКУ</button>
              <span className="language-text">РУС</span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
