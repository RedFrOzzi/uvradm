import React from "react";

export interface ItemProps {
  date: string;
  title: string;
  hasRef: string;
}

const NewsItem: React.FC<ItemProps> = (props: ItemProps) => {
  return (
    <li className="mb-3">
      <span className="d-inline-block fw-medium bg-white text-dark px-3">
        <b className="">{props.date}</b>
      </span>
      <a
        className="d-inline px-3 link-underline link-underline-opacity-0"
        href={props.hasRef}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </li>
  );
};

export default NewsItem;
