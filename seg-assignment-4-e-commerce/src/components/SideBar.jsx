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
      className="pt-3 px-5 border-end sidebar"
      style={{ width: "280px", height: "calc(100vh - 100px)" }}
    >
      <h4 className="text-center filterText my-3 pb-3"><svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></h4>
      <Form className="filters">
        <h5 className="boldHeader">Shop The Sale</h5>
        {Object.values(FILTERS.sale).map((item) =>
          renderCheckBox(CATEGORIES.SALE, item)
        )}

        <h5 className="boldHeader mt-3">Category</h5>
        {Object.values(FILTERS.types).map((item) =>
          renderCheckBox(CATEGORIES.TYPES, item)
        )}
        <h5 className="boldHeader mt-3">Brand</h5>
        {Object.values(FILTERS.brands).map((item) =>
          renderCheckBox(CATEGORIES.BRANDS, item)
        )}
        <h5 className="boldHeader mt-3">Price Range</h5>
        {Object.values(FILTERS.priceCategory).map((item) =>
          renderCheckBox(CATEGORIES.PRICE_CATEGORY, item)
        )}
        <h5 className="boldHeader mt-3">Manufactured In</h5>
        {Object.values(FILTERS.country).map((item) =>
          renderCheckBox(CATEGORIES.COUNTRY, item)
        )}
      </Form>
    </div>
  );
}
