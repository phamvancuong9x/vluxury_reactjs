import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import newApi from "../../../api/newsApi";
import CollectionNewsContentSkeleton from "../../../components/Skeleton/component/CollectionNewsContentSkeleton";
import alertSlice from "../../../redux/slice/alertSlice";

function NewItem({ newsItem }) {
  return (
    <div className="row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-3">
        <Link
          className="collection-news__item-image"
          to={`/news?id=${newsItem.id}`}
        >
          <img src={newsItem.image} alt={newsItem.name} />
        </Link>
      </div>
      <div className="col-8 col-sm-7 col-md-7 col-lg-7">
        <Link to={`/news?id=${newsItem.id}`}>
          <div className="collection-news__item-title">{newsItem.name}</div>
          <div className="article-all-info">
            <div className="article-date">
              <i className="fas fa-calendar-alt"></i>
              <span>{newsItem.article_date}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
function CollectionNewsContent({ firstNewLists, NewListsArray }) {
  return (
    <div className="row">
      {firstNewLists && (
        <Link
          className="col-12 col-sm-6 col-md-5 col-lg-6 collection-news__image  collection-news__image-hover"
          to="/news?id=n6"
        >
          <img src={firstNewLists.image} alt={firstNewLists.name} />
          <div className="new_right-info">
            <div className="collection-news__item-title">
              {firstNewLists.name}
            </div>
            <div className="article-all-info">
              <div className="article-date">
                <i className="fas fa-calendar-alt"></i>
                <span>{firstNewLists.article_date}</span>
              </div>
            </div>
          </div>
        </Link>
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
  );
}
function CollectionNews({ checkDataChange }) {
  const dispatch = useDispatch();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const newLists = await newApi.get();
        setNewsList(newLists.reverse());
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(error);

        dispatch(
          alertSlice.actions.changeAlertError({
            showAlertError: true,
            alertContentError:
              "Mất kết nối tới server .Vui lòng tải lại trang !",
          })
        );
      }
    })();
  }, [checkDataChange]);

  const [firstNewLists, ...NewListsArray] = newsList;
  return (
    <section className="collection-news">
      <div className="container">
        <div className="section__title">TIN TỨC THỚI TRANG</div>
        {!loading && (
          <CollectionNewsContent
            firstNewLists={firstNewLists}
            NewListsArray={NewListsArray}
          />
        )}
        {loading && <CollectionNewsContentSkeleton />}
      </div>
    </section>
  );
}

export default CollectionNews;
