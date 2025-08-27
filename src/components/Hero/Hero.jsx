import React from "react";
import "./Hero.css";
import pics from "../../assets/Group 87.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Проектирование и установка
            <br />
            систем видеонаблюдения
          </h1>
          <p className="hero-subtitle">
            Защитите свой бизнес от неожиданных сбоев!
          </p>
          <button className="hero-button">УЗНАТЬ БОЛЬШЕ</button>
        </div>

        <div className="hero-image-container">
          <img src={pics} alt="camera"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
