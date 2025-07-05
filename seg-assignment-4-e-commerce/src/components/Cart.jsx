import { useState } from 'react'
import CheckoutForm from "./CheckoutForm";
import CardCondensed from "./CardCondensed";
import Button from 'react-bootstrap/Button';

function Cart({ cartItems, addToCart, removeFromCart, setPageState, setCartItems, setCartItemsCount }) {
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
                <h1 className="text-center py-5 my-5">Your cart is empty, nothing to see here!</h1> :
            cartState == "Viewing" ?

            <>
                <h1 className="text-center">Shopping Cart</h1>
                {/* <Button variant='dark'
                    onClick={handleCheckoutClick}
                >Checkout</Button> */}
                {cartItems.map((currItemData) => (
                <div>
                    <CardCondensed
                    cardData={currItemData} 
                    removeFromCart={removeFromCart}
                    />
                </div>
                ))}
                <Button variant='dark'
                    onClick={handleCheckoutClick}
                >Checkout</Button>
            </> : 
            <CheckoutForm
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartItemsCount={setCartItemsCount}
            />
            }
            <Button className="px-5 backToShop" onClick={handleHomeBackClick} variant="secondary">
              Back to Shop
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
