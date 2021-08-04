import React from "react";
import FilterByCategory from "./FilterByCategory/FilterByCategory";

function ProductFilters(props) {
  const { filters, onChangFilters } = props;

  const handleCategoryChange = (newCategoryID) => {
    if (onChangFilters) {
      const newFilters = {
        ...filters,
        "category.id": newCategoryID,
      };
      onChangFilters(newFilters);
    }
  };

  return (
    <div>
      <FilterByCategory onChangFilters={handleCategoryChange} />
    </div>
  );
}

export default ProductFilters;
