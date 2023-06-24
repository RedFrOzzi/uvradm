import React from "react";
import NewsItem from "./NewsItem";
import DevUpdate from "./DevUpdate";
import { ReturnObject } from "../../utility/Parser";

const NewsList: React.FC = () => {
  const HandleParsedItems = (objs: ReturnObject[]) => {
    console.log(objs);
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="d-flex justify-content-start mt-4 mb-3">
          Главные новости
        </h4>
        <span className="d-flex justify-content-end">
          <a
            className="link-underline link-underline-opacity-0"
            href="https://g58.tmbreg.ru/novosti.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Все новости...
          </a>
        </span>
      </div>
      <div>
        <ul className="">
          <NewsItem
            date="12.06.2023"
            title="Уваровцы отмечают День России"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/uvarovcy-otmechayut-den-rossii.html"
          />
          <NewsItem
            date="09.06.2023"
            title="График работы поликлиники Уваровской ЦРБ с 10 по 12 июня"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/grafik-raboty-polikliniki-uvavrovskoj-crb-s-10-po-12-iyunya.html"
          />
          <NewsItem
            date="09.06.2023"
            title="Социальных работников поздравили с профессиональным праздником"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/socialnyh-rabotnikov-pozdravili-s-professionalnym-prazdnikom.html"
          />
          <NewsItem
            date="09.06.2023"
            title="График движения общественного транспорта 12 июня"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/grafik-dvizheniya-obshhestvennogo-transporta-12-iyunya.html"
          />
          <NewsItem
            date="08.06.2023"
            title="Патриотические акции, концерты, соревнования:  как в городе Уварово пройдет День России"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/patrioticheskie-akcii-koncerty-sorevnovaniya-%20-kak-v-gorode-uvarovo-projdet-den-rossii.html"
          />
          <NewsItem
            date="08.06.2023"
            title="Уваровцы могут получить социально значимые услуги  через портал Госуслуг"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/uvarovcy-mogut-poluchit-socialno-znachimye-uslugi%20-cherez-portal-gosuslug1.html"
          />
          <NewsItem
            date="07.06.2023"
            title="Участники автопробега ТГТУ побывали в городе Уварово"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/uchastniki-avtoprobega-tgtu-pobyvali-v-gorode-uvarovo.html"
          />
          <NewsItem
            date="06.06.2023"
            title="Перед уваровцами выступит концертный оркестр духовых инструментов Донецкой государственной академической филармонии"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/pered-uvarovcami-vystupit-koncertnyj-orkestr-duhovyh-instrumentov-doneckoj-gosudarstvennoj-akademicheskoj-filarmonii.html"
          />
          <NewsItem
            date="06.06.2023"
            title="Пострадавшие при чрезвычайной ситуации смогут получить выплату"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/postradavshie-pri-chrezvychajnoj-situacii-smogut-poluchit-vyplatu.html"
          />
          <NewsItem
            date="06.06.2023"
            title="В  2024 году  продолжится благоустройство парка Сахарного завода"
            hasRef="https://g58.tmbreg.ru/novosti/novosti-administracii-goroda-uvarovo/v%20-2024-godu%20-prodolzhitsya-blagoustrojstvo-parka-saharnogo-zavoda.html"
          />
          <DevUpdate onDevUpdate={HandleParsedItems} />
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
