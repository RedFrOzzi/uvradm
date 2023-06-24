import React from "react";

const Carousel: React.FC = () => {
  return (
    <div id="mediaCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mediaCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#mediaCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#mediaCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="6000">
          <a
            href="https://vk.com/public170900479?w=wall-170900479_6805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/DayRu.jpg"
              className="d-block w-100 object-fit-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-sm-flex flex-column align-items-start mb-5 p-2 rounded text-start"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <h5>Уваровцы отмечают День России</h5>
              <p>
                День России в городе Уварово отметили патриотическими и
                спортивными акциями, выставками и культурно-массовыми
                программами. Многие из них начались в преддверии праздника.
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <a
            href="https://vk.com/public170900479?w=wall-170900479_6830"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Soccer.jpg"
              className="d-block w-100 object-fit-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-sm-flex flex-column align-items-start mb-5 p-2 rounded text-start"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <h5>ФК "Уварово" и ФК "Котовск" г. Котовск.</h5>
              <p>
                17 июня в Уварове на футбольном стадионе ледового дворца спорта
                "Сокол" ("Химик") состоится матч 4 тура Чемпионата федерации
                футбола Тамбовской области.
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <a
            href="https://xn--80ahdnteo0a0g7a.xn--p1ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Candle.jpg"
              className="d-block w-100 object-fit-cover"
              alt="..."
            />
            <div
              className="carousel-caption d-sm-flex flex-column align-items-start mb-5 p-2 rounded text-start"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <h5>Зажгите свою виртуальную «Свечу памяти» до 22 июня!</h5>
              <p>
                В России вновь стартовала онлайн-акция «Свеча памяти». До 22-го
                июня по всей стране будут зажигать свечи в память о тех, кто
                отдал жизнь во имя Великой Победы.
              </p>
            </div>
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mediaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mediaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
