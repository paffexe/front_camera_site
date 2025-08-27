import React from "react";
import "./Features.css";
import pic from "../../assets/Group 43.png";
import monitor from "../../assets/monitor 1.svg";

const Features = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <h2 className="capabilities-title">ВОЗМОЖНОСТИ</h2>

        <div className="capabilities-grid">
          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />
                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Видеонаблюдение через интернет</h3>
              <p className="feature-description">
                Для онлайн доступа к камерам достаточно иметь доступ в Интернет
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и записи в режиме времени.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />

                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Запись звука</h3>
              <p className="feature-description">
                Наличие микрофона в камере позволяет записывать качество
                обслуживания персонала, прослушать разговоры клиентов и
                регистрировать все происходящее в случае возникновения
                конфликта.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />

                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Детектор движения</h3>
              <p className="feature-description">
                Видеокамеры способны определять движение объектов. Это важно,
                когда нужно настроить запись только при обнаружении движения или
                обозначить границы при пересечении которых система отправит об
                этом.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />

                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Просмотр архивных видеозаписей</h3>
              <p className="feature-description">
                Видео с каждой камеры записывается отдельно. Зная
                приблизительное время и где произошло интересующее Вас событие,
                без труда можно найти нужный фрагмент и сохранить его на жесткий
                диск компьютера или на флеш-карту.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />

                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Запись видео в полной темноте</h3>
              <p className="feature-description">
                При снижении освещенности в помещении или на улице видеокамеры
                переходят в ночной режим съемки. Даже при съемке в темноте
                качество видео остается на очень высоком уровне.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card-content">
              <div className="feature-image-container">
                <img src={pic} alt="" />

                <div className="feature-icon">
                  <img src={monitor} alt="" />
                </div>
              </div>
              <h3 className="feature-title">Видеоконтроль и защита от краж</h3>
              <p className="feature-description">
                Наличие охраны не обеспечит круглосуточный контроль магазина,
                склада, дом погрузки/разгрузки транспорта. Но система
                видеонаблюдения, если она заменит, то станет хорошим
                инструментом для службы безопасности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
