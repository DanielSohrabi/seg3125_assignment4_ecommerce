import Card from "./Card";
import SideBar from "./SideBar";
import { placeholderCardData } from "../ItemData";
import { React, useState } from "react";

function Body({ searchQuery }) {
  const [filters, setFilters] = useState([]);

  const toggleFilter = (label) => {
    setFilters((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const filteredData = placeholderCardData.filter((item) => {
    const filterCheck =
      filters.length !== 0
        ? filters.some((filter) => item.categories.includes(filter))
        : true;

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return filterCheck && matchesSearch;
  });

  return (
    <>
      <div className="d-flex">
        <div style={{ width: "250px" }}>
          <SideBar filters={filters} toggleFilter={toggleFilter} />
        </div>
        <div className="flex-grow-1 p-4">
          <div className="row gx-3 gy-3">
            {filteredData.map((currItemData) => (
              <div className="col-3">
                <Card cardData={currItemData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
