import React from "react";

function TimeArticleDate({ newItem }) {
  return (
    <div className="article-date">
      <i className="fas fa-calendar-alt"></i>
      <span>{newItem.article_date}</span>
    </div>
  );
}

export default TimeArticleDate;
