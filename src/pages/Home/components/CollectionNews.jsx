import React, { useEffect, useState } from "react";
import newApi from "../../../api/newsApi";

function NewItem({ newsItem }) {
  return (
    <div className="row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-3">
        <a className="collection-news__item-image" href="#0">
          <img src={newsItem.image} alt={newsItem.name} />
        </a>
      </div>
      <div className="col-8 col-sm-7 col-md-7 col-lg-7">
        <a href="#0">
          <div className="collection-news__item-title">{newsItem.name}</div>
          <div className="article-all-info">
            <div className="article-date">
              <i className="fas fa-calendar-alt"></i>
              <span>{newsItem.article_date}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function CollectionNews() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    (async () => {
      const newLists = await newApi.get();
      setNewsList(newLists.reverse());
    })();
  }, []);

  const [firstNewLists, ...NewListsArray] = newsList;
  return (
    <section className="collection-news">
      <div className="container">
        <div className="section__title">TIN TỨC THỚI TRANG</div>
        <div className="row">
          {firstNewLists && (
            <a
              className="col-12 col-sm-6 col-md-5 col-lg-6 collection-news__image"
              href="#0"
            >
              <img src={firstNewLists.image} alt={firstNewLists.name} />
            </a>
          )}

          <div className="col-sm-6 col-md-7 col-lg-6">
            <div className="collection-news__item">
              {NewListsArray?.map((newsItem, i) => {
                if (i > 3) return;
                return <NewItem newsItem={newsItem} key={newsItem.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionNews;
