import React from "react";
import Form from "react-bootstrap/Form";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div
      className="p-3 border-end "
      style={{ width: "250px", height: "calc(100vh - 100px)" }}
    >
      <h4 className="text-center">Filters</h4>
      <Form className="filters">
        <h5>Brand</h5>
        <Form.Check type="checkbox" label="Phones" />
        <Form.Check type="checkbox" label="Laptops" />
        <h5>Price</h5>
        <Form.Check type="checkbox" label="Phones" />
        <Form.Check type="checkbox" label="Laptops" />
      </Form>
    </div>
  );
}
