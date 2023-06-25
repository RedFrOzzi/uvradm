import React from "react";
import NewsList from "./NewsList";
import Carousel from "./Carousel";
import InfoLine from "./InfoLine";

const Page: React.FC = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row align-items-stretch">
        <div className="col-lg-7 col-md-9 col-12 p-0">
          <div className="container-fluid p-0">
            <Carousel />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 d-flex">
          <div className="row text-center">
            <a
              className="col-md-12 col-4 d-flex align-items-center justify-content-center link-underline link-underline-opacity-0 info-block-1"
              href="https://fsc-tambov.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Фонд содействия кредитованию</p>
            </a>
            <a
              className="col-md-12 col-4 d-flex align-items-center justify-content-center link-underline link-underline-opacity-0 info-block-2"
              href="https://g58.tmbreg.ru/formirovanie-komfortnoj-gorodskoj-sredy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-break">
                Формирование комфортной городской среды
              </p>
            </a>
            <a
              className="col-md-12 col-4 d-flex align-items-center link-underline link-underline-opacity-0 info-block-3"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmFwACHEVKB3xz9DwFttfA78L4FCa9Qo2_zs3oESGqaDYZ4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="row">
                <h4 className="col-12 text-decoration-underline">Опрос</h4>
                <p className="col-12">Выбор названия территории</p>
              </div>
            </a>
            <a
              className="col-md-12 d-none d-md-flex align-items-center justify-content-center link-underline link-underline-opacity-0 info-block-4"
              href="https://zan.tambov.gov.ru/content/%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B2%D0%B0%D0%BA%D1%86%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D0%B8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Стимулирование вакцинации</p>
            </a>
            <a
              className="col-md-12 d-none d-md-flex align-items-center justify-content-center link-underline link-underline-opacity-0 info-block-5"
              href="https://g58.tmbreg.ru/v-pomosch-predprinimateljam/socialnoe-predprinimatelstvo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Социальное предпринимательство</p>
            </a>
          </div>
        </div>
        <div className="news-wrapper col-lg-3 col-md-12 col-12">
          <NewsList />
        </div>
        <InfoLine />
      </div>
    </div>
  );
};

export default Page;
