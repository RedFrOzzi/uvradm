import React from "react";
import { ReturnObject } from "../../utility/Parser";
import NewsItem from "./NewsItem";

const NewsUpdater: React.FC<ReturnObject[]> = (objs) => {
  return (
    <>
      {objs.map((obj, index) => (
        <NewsItem
          key={index}
          date={obj.date}
          title={obj.header}
          hasRef={obj.link}
        />
      ))}
    </>
  );
};

export default NewsUpdater;
