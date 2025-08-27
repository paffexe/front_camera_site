import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">
            СПРОЕКТИРУЕМ СИСТЕМУ ВИДЕОНАБЛЮДЕНИЯ
          </h2>
          <h3 className="contact-subtitle">РЕШИМ ВАШУ IT - ЗАДАЧУ</h3>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Меня зовут</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ваше имя"
              />
            </div>
            <div className="form-group">
              <label className="form-label">телефон</label>
              <input
                type="tel"
                className="form-input"
                placeholder="Ваш номер телефона"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              мне нужна система видеонаблюдения для
            </label>
          </div>

          <div className="form-group">
            <textarea
              className="form-textarea"
              placeholder="Пожалуйста, опишите направление Вашего бизнеса"
            />
          </div>

          <button className="form-submit" type="submit" disabled>
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
