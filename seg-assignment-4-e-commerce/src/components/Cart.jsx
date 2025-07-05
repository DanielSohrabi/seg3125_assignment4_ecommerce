import { useState } from 'react'
import CheckoutForm from "./CheckoutForm";
import CardCondensed from "./CardCondensed";
import Button from 'react-bootstrap/Button';

function Cart({ cartItems, addToCart, removeFromCart, setPageState }) {
    const [cartState, setCartState] = useState("Viewing");
    const [activeStep, setActiveStep] = useState(0);

    function handleCheckoutClick() {
        setCartState("CheckingOut");
    }

    function handleHomeBackClick() {
      setPageState("Shop");
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
                <button
                    onClick={handleCheckoutClick}
                >Checkout</button>
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
            <Button className="px-5" onClick={handleHomeBackClick} variant="secondary">
              Back to Shop
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
