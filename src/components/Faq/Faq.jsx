import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>

        <div className="faq-list">
          <div className="faq-item">
            <button className="faq-question">
              <span>За нами будет закреплен какой-нибудь IT специалист ?</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              <span>Какие регионы Вы обслуживаете ?</span>
            </button>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              <span>Вы можете предоставлять круглосуточную поддержку ?</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
