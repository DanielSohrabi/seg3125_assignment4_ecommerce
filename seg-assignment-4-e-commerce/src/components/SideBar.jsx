import React from "react";
import Form from "react-bootstrap/Form";
import "./SideBar.css";
import { FILTERS, CATEGORIES } from "../FilterConstants";

export default function SideBar({ filters, toggleFilter }) {
  const renderCheckBox = (category, label) => {
    return (
      <Form.Check
        type="checkbox"
        label={label}
        checked={filters[category].includes(label)}
        onChange={() => toggleFilter(category, label)}
      />
    );
  };

  return (
    <div
      className="p-3 border-end "
      style={{ width: "250px", height: "calc(100vh - 100px)" }}
    >
      <h4 className="text-center">Filters</h4>
      <Form className="filters">
        <h5>Shop The Sale</h5>
        {Object.values(FILTERS.sale).map((item) =>
          renderCheckBox(CATEGORIES.SALE, item)
        )}

        <h5>Category</h5>
        {Object.values(FILTERS.types).map((item) =>
          renderCheckBox(CATEGORIES.TYPES, item)
        )}
        <h5>Brand</h5>
        {Object.values(FILTERS.brands).map((item) =>
          renderCheckBox(CATEGORIES.BRANDS, item)
        )}
        <h5>Price Range</h5>
        {Object.values(FILTERS.priceCategory).map((item) =>
          renderCheckBox(CATEGORIES.PRICE_CATEGORY, item)
        )}
        <h5>Manufactured In</h5>
        {Object.values(FILTERS.country).map((item) =>
          renderCheckBox(CATEGORIES.COUNTRY, item)
        )}
      </Form>
    </div>
  );
}
