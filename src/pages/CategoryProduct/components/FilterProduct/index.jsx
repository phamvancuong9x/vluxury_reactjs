import React, { useEffect, useState } from "react";

const FilterValueArray = [
  { filterName: "Tất Cả", priceFilter_gte: null, priceFilter_lte: null },
  {
    filterName: "Nhỏ hơn 1,000,000₫",
    priceFilter_gte: null,
    priceFilter_lte: 100,
  },
  {
    filterName: "Từ 1,000,000₫ - 1,500,000₫",
    priceFilter_gte: 100,
    priceFilter_lte: 150,
  },
  {
    filterName: "Từ 1,500,000₫ - 2,000,000₫",
    priceFilter_gte: 150,
    priceFilter_lte: 200,
  },
  {
    filterName: "Từ 2,000,000₫ - 2,500,000₫",
    priceFilter_gte: 200,
    priceFilter_lte: 250,
  },

  {
    filterName: "Từ 2,500,000₫ - 3,000,000₫",
    priceFilter_gte: 250,
    priceFilter_lte: 300,
  },
  {
    filterName: "Lớn hơn 3,000,000₫",
    priceFilter_gte: 300,
    priceFilter_lte: null,
  },
];

function getPriceRange(FilterValueArray, filterName) {
  const filterValueCurrent = FilterValueArray.filter((value) => {
    return value.filterName == filterName;
  });
  return {
    priceFilter_gte: filterValueCurrent[0].priceFilter_gte,
    priceFilter_lte: filterValueCurrent[0].priceFilter_lte,
  };
}
function CollectionsFilterItem({ filterValue, setPriceRange }) {
  const handleChange = (e) => {
    setPriceRange(getPriceRange(FilterValueArray, e.target.value));
    window.scrollTo(0, 0);
  };
  return (
    <li className="collections__filter-item">
      <label className="label-filter">
        <input
          type="radio"
          name="filter"
          value={filterValue.filterName}
          onChange={(e) => handleChange(e)}
        />
        <div className="filterName">{filterValue.filterName}</div>
      </label>
    </li>
  );
}

function FilterProduct({ setPriceRange, params }) {
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    setShowFilter(false);
    setPriceRange({});
  }, [params.isSale, params.typeProduct]);

  return (
    <div className="collections__filter">
      <div
        className="collections__filter-name"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        <span>
          Bộ lọc<i className="fas fa-chevron-down"></i>
        </span>
      </div>
      <ul
        className={
          showFilter
            ? "collections__filter-list show-collections__filter-list"
            : "collections__filter-list"
        }
      >
        <li>
          Khoảng giá
          <i className="fas fa-times" onClick={() => setShowFilter(false)}></i>
        </li>
        {showFilter &&
          FilterValueArray.map((filterValue) => {
            return (
              <CollectionsFilterItem
                key={filterValue.filterName}
                filterValue={filterValue}
                setPriceRange={setPriceRange}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default FilterProduct;
