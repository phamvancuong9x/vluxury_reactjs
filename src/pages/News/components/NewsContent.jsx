import React from "react";
import LazyLoad from "react-lazyload";
function NewItem({ newItem }) {
  return (
    <div className="news-item">
      <div className="image">
        <LazyLoad height={400} offset={600}>
          <img src={newItem.image} alt="Ảnh Tin Tức" />
        </LazyLoad>
      </div>
      <h2 className="news-item__name">{newItem.name}</h2>

      <div className="article-date">
        <i className="fas fa-calendar-alt"></i>
        <span>{newItem.article_date}</span>
      </div>
      <div className="news-item__describer">{newItem.newDescriber}</div>
    </div>
  );
}
function NewsContent({ newsList }) {
  return (
    <div className="news-content">
      <h1 className="news-title">TIN TỨC</h1>
      <div className="row">
        {newsList.map((newItem, i) => {
          return (
            <div className="col-sm-6" key={i}>
              <NewItem newItem={newItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsContent;
