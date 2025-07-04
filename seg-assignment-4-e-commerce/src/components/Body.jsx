import Card from "./Card";
import SideBar from "./SideBar";
import { placeholderCardData } from "../ItemData";

function Body() {
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "250px" }}>
          <SideBar />
        </div>
        <div className="flex-grow-1 p-4">
          <div className="row gx-3 gy-3">
            {placeholderCardData.map((currItemData) => (
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
