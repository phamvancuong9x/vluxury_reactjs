import React from "react";
import { Link } from "react-router-dom";

function CollectionItem({ productItem }) {
  return (
    <Link
      to={`/category-product?typeProduct=${productItem.typeProduct}&isSale=false`}
      className="collection__item typeProduct"
    >
      <p className="collection__item-image">
        <img src={productItem.image} alt="image-collection" />
      </p>
      <div className="collection-title wow animate__animated animate__fadeInUp animate__delay-1s">
        {productItem.name}
      </div>
      <div className="bttn collection__bttn">XEM THÊM</div>
    </Link>
  );
}
function CollectionList({ collectionList }) {
  if (!collectionList || collectionList.length == 0) return <></>;
  const [firstCollectionList, ...newCollectionList] = collectionList;
  return (
    <section className="collection-list">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <CollectionItem productItem={firstCollectionList} />
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="row">
            {newCollectionList.map((productItem) => {
              return (
                <div className="col-6" key={productItem.id}>
                  <CollectionItem productItem={productItem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionList;
