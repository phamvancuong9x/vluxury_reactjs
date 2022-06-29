import NewItem from "./NewItem";

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
