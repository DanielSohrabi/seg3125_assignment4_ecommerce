import { useState } from "react";
import "./Card.css";
import PlaceholderImage from "../assets/placeholder.png";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ cardData, addToCart, removeFromCart, shouldShowAddToCart }) {
  const notify = () =>
    toast.success("Item added to cart! 🍐", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  function handleAddToCartClick() {
    addToCart(cardData);
    notify();
  }

  function handleRemoveFromCartClick() {
    removeFromCart(cardData);
  }

  const name = cardData.name;
  const categories = cardData.categories;
  const imageUrl = cardData.imageUrl;
  const manufacturers = cardData.manufacturers;
  const countryOfProduction = cardData.countryOfProduction;
  const currentPrice = cardData.currentPrice;
  const isOnSale = cardData.sale == "On Sale";

  return (
    <>
      {/* <div className='card-component'>
        <img src={imageUrl}/>
        <h1 className="text-start"></h1>
        <h2>${isOnSale ? previousPrice : currentPrice}</h2>
        {shouldShowAddToCart ? <Button
          onClick={handleAddToCartClick}
        >Add to Cart</Button> : <Button
          onClick={handleRemoveFromCartClick}
        >Remove from Cart</Button>}

      </div> */}

      <div class={`card card-custom ${isOnSale ? "on-sale" : ""}`}>
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div class={`card-body row `}>
          <div className="col-8">
            <h2 class="card-title">{name}</h2>
            <h5>
              {isOnSale ? (
                <>
                  <s>${parseInt(currentPrice) + 100}</s> ${currentPrice}
                </>
              ) : (
                <>${currentPrice}</>
              )}
            </h5>
          </div>
          <div className="col-4 text-center">
            {shouldShowAddToCart ? (
              <Button className="button-1" onClick={handleAddToCartClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="black"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </Button>
            ) : (
              <Button onClick={handleRemoveFromCartClick}>
                Remove from Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
