import React, { useEffect, useState } from "react";
import categoryApi from "../../../api/categoryApi";

function FilterByCategory(props) {
  const { onChangFilters } = props;
  const [category, setCategory] = useState([]);
  console.log("Log :  category", category);

  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await categoryApi.getAll();
        console.log("Log :  response", response);
        setCategory(
          response.map((item) => ({
            id: item.id,
            name: item.name,
          }))
        );
      } catch (error) {
        console.log("Log :  Fail fetch data category ", error);
      }
    };
    fetchDataCategory();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChangFilters) onChangFilters(category.id);
  };
  return (
    <ul>
      {category.map((category) => (
        <li
          key={category.id}
          onClick={() => {
            handleCategoryClick(category);
          }}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default FilterByCategory;
