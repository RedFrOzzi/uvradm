import React, { useState } from "react";
import "../styles/NewsList.css";
import NewsItem from "./NewsItem";
import DevUpdate from "./DevUpdate";
import { ReturnObject } from "../../utility/Parser";

const NewsList: React.FC = () => {
  const [news, setNews] = useState<ReturnObject[]>([]);

  const HandleParsedItems = (objs: ReturnObject[]) => {
    setNews(objs);
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
          {news.map((obj, index) => (
            <NewsItem
              key={index}
              date={obj.date}
              title={obj.header}
              hasRef={obj.link}
            />
          ))}
          <DevUpdate onDevUpdate={HandleParsedItems} />
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
