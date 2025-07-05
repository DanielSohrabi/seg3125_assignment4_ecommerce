import React from "react";
import Body from "./components/Body";
import Cart from "./components/Cart";
import NavHeader from "./components/NavHeader";

import { placeholderCardData } from "./ItemData";
import { useState, useEffect } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // Cart, Shop, etc.
  const [pageState, setPageState] = useState("Shop");

  function addToCart(item) {
    setCartItems([...cartItems, item]);
    setCartItemsCount(cartItemsCount + 1);
  }

  function removeFromCart(item) {
    let itemIndex = cartItems.indexOf(item);

    if ((itemIndex = 0)) {
      setCartItems(cartItems.slice(1));
    } else if (itemIndex == cartItems.length - 1) {
      setCartItems(cartItems.slice(0, itemIndex));
    } else {
      setCartItems(
        cartItems
          .slice(0, itemIndex)
          .concat(cartItems.slice(itemIndex + 1, cartItems.length))
      );
    }

    setCartItemsCount(cartItemsCount - 1);
  }

  console.log(cartItems);

  return (
    <>
      <NavHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemsCount={cartItemsCount}
        setPageState={setPageState}
      />
      {pageState == "Shop" ? (
        <Body
          searchQuery={searchQuery}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ) : (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          setPageState={setPageState}
        />
      )}
    </>
  );
}
