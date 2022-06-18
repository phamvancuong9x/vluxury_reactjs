import { useState } from "react";
import { sortValueArray } from "./constanst";

function getSortValue(sortValueArray, sortName) {
  const sortValueCurrent = sortValueArray.filter((value) => {
    return value.sortName === sortName;
  });
  return {
    _sort: sortValueCurrent[0]?.sortValue,
    _order: sortValueCurrent[0]?.order,
  };
}

function OptionSort({ sortValue }) {
  return <option value={sortValue.sortName}>{sortValue.sortName}</option>;
}

function SortProduct({ setSortProduct }) {
  const [sortValue, setSortValue] = useState("Sắp xếp ( Mặc định )");
  const handleChange = (e) => {
    setSortValue(e.target.value);
    setSortProduct(() => getSortValue(sortValueArray, e.target.value));
  };
  return (
    <select
      className="collections__sort-product"
      value={sortValue}
      onChange={handleChange}
    >
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
