import React from "react";

const sortValueArray = [
  {
    sortName: "Sắp xếp ( Mặc định )",
    sortValue: null,
    order: null,
  },
  {
    sortName: "Theo bảng chữ cái từ A-Z",
    sortValue: "name_product",
    order: "desc",
  },
  {
    sortName: "Theo bảng chữ cái từ Z-A",
    sortValue: "name_product",
    order: "asc",
  },
  {
    sortName: "Giá từ thấp tới cao",
    sortValue: "priceFilter",
    order: "asc",
  },
  {
    sortName: "Giá từ cao tới thấp",
    sortValue: "priceFilter",
    order: "desc",
  },
];

function getSortValue(sortValueArray, sortName) {
  const sortValueCurrent = sortValueArray.filter((value) => {
    return value.sortName == sortName;
  });
  return {
    _sort: sortValueCurrent[0].sortValue,
    _order: sortValueCurrent[0].order,
  };
}

function OptionSort({ sortValue }) {
  return <option value={sortValue.sortName}>{sortValue.sortName}</option>;
}

function SortProduct({ setSortProduct }) {
  const handleChange = (e) => {
    if (e.target.value == sortValueArray[0].sortValue) return;
    setSortProduct(getSortValue(sortValueArray, e.target.value));
  };
  return (
    <select className="collections__sort-product" onClick={handleChange}>
      {sortValueArray.map((sortValue) => {
        return (
          <OptionSort
            key={sortValue.sortName}
            sortValue={sortValue}
            setSortProduct={setSortProduct}
          />
        );
      })}
    </select>
  );
}

export default SortProduct;
