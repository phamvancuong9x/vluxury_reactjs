import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import TimeArticleDate from "./TimeArtcleDate";

export function NewItem({ newItem }) {
  return (
    <div className="news-item">
      <Link to={`/news?id=${newItem.id}`}>
        <div className="image">
          <LazyLoad height={400} offset={600}>
            <img src={newItem.image} alt="Ảnh Tin Tức" />
          </LazyLoad>
        </div>
        <h2 className="news-item__name">{newItem.name}</h2>

        <TimeArticleDate newItem={newItem} />
        <div className="news-item__describer">{newItem.newDescriber}</div>
      </Link>
    </div>
  );
}

export default NewItem;
