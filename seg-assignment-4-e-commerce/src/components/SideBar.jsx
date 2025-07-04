import React from "react";
import Form from "react-bootstrap/Form";
import "./SideBar.css";

export default function SideBar({ filters, toggleFilter }) {
  const renderCheckBox = (label) => {
    return (
      <Form.Check
        type="checkbox"
        label={label}
        checked={filters.includes(label)}
        onChange={() => toggleFilter(label)}
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
        <h5>Category</h5>
        {["Phones", "Laptops"].map((item) => renderCheckBox(item))}
        <h5>Price</h5>
        {["Under $1000", "$1000 and over"].map((item) => renderCheckBox(item))}
        <h5>Brand</h5>
        {["Apple", "Samsung"].map((item) => renderCheckBox(item))}
      </Form>
    </div>
  );
}
