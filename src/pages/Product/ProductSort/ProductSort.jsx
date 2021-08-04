import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function ProductSort(props) {
  const { currentValue, onChange } = props;

  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentValue}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá từ thấp đến cao" value="salePrice:ASC" />
      <Tab label="Giá từ cao đến thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
