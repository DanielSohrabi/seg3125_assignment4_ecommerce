import { useState } from 'react'
import CheckoutForm from "./CheckoutForm";
import CardCondensed from "./CardCondensed";

function Cart({ cartItems, addToCart, removeFromCart }) {
    const [cartState, setCartState] = useState("Viewing");
    const [activeStep, setActiveStep] = useState(0);

    function handleCheckoutClick() {
        setCartState("CheckingOut");
    }

  return (
    <>
      <div className="d-flex">
        <div className="flex-grow-1 p-4">
          <div className="row gx-3 gy-3">
            {cartItems.length == 0 ? 
                <p>Cart is Empty.</p> :
            cartState == "Viewing" ?

            <>
                {cartItems.map((currItemData) => (
                <div>
                    <CardCondensed
                    cardData={currItemData} 
                    removeFromCart={removeFromCart}
                    />
                </div>
                ))}
                <button
                    onClick={handleCheckoutClick}
                >Checkout</button>
            </> : 
            <CheckoutForm
                cartItems={cartItems}
            />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
