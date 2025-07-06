import Card from "./Card";
import SideBar from "./SideBar";
import { placeholderCardData } from "../ItemData";
import { React, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './Body.css'

function Body({ searchQuery, addToCart, removeFromCart }) {
  const [show, setShow] = useState(true);

  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    priceBracket: [],
    country: [],
    sale: [],
  });

  const toggleFilter = (category, label) => {
    setFilters((prev) => {
      const categoryFilters = prev[category];
      const updated = categoryFilters.includes(label)
        ? categoryFilters.filter((item) => item !== label)
        : [...categoryFilters, label];

      return {
        ...prev,
        [category]: updated,
      };
    });
  };

  const filteredData = placeholderCardData.filter((item) => {
    const matchesAllCategories = Object.entries(filters).every(
      ([category, selectedValues]) => {
        if (selectedValues.length === 0) return true;
        return selectedValues.includes(item[category]);
      }
    );
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesAllCategories && matchesSearch;
  });

  return (
    <>
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading><h1 className="text-center alertthing">🍐 SHOP OUR HUGE SALE FOR A LIMITED TIME ONLY!</h1></Alert.Heading>
      </Alert>
      <div className="d-flex px-3">
        <div style={{ width: "280px" }}>
          <SideBar filters={filters} toggleFilter={toggleFilter} />
        </div>
        <div className="flex-grow-1 p-4 mx-3">
          <div className="row gx-5 gy-5">
            {filteredData.map((currItemData) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <Card
                  cardData={currItemData}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  shouldShowAddToCart={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
