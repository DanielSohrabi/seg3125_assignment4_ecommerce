import Card from "./Card";
import SideBar from "./SideBar";
import { Stepper } from "react-form-stepper";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./CheckoutForm.css";
import PaymentPhoto from "../assets/USPaymentMethodsKlarna.JPG";
import Survey from "./Survey";

function CheckoutForm({ cartItems, setCartItems, setCartItemsCount, handleHomeBackClick, setPageState}) {
  const [activeStep, setActiveStep] = useState(0);

  const [cardHolderName, setCardHolderName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityDigits, setSecurityDigits] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  let orderTotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    orderTotal += parseFloat(cartItems[i].currentPrice);
  }

  const myStyle = {
    activeBgColor: "#067F53",
    completedBgColor: "#023020",
    inactiveBgColor: "#687771",
  };

  function clickBackCart() {
    handleHomeBackClick();
  }

  function clickNextStep() {
    // if (activeStep == 3) {
    //     setCartItems([]);
    //     setCartItemsCount(0);
    // }
    setActiveStep(activeStep + 1);
  }

  function clickBackStep() {
    setActiveStep(activeStep - 1);
  }

  function handleCardHolderName(element) {
    setCardHolderName(element.target.value);
  }

  function handleCreditCardNumber(element) {
    setCreditCardNumber(element.target.value);
  }

  function handleExpirationDate(element) {
    setExpirationDate(element.target.value);
  }

  function handleSecurityDigits(element) {
    setSecurityDigits(element.target.value);
  }

  function handleBillingAddress(element) {
    setBillingAddress(element.target.value);
  }

  return (
    <>
      <>
        <Stepper
          steps={[
            { label: "Personal Information" },
            { label: "Payment Information" },
            { label: "Confirm Purchase" },
            { label: "Provide Feedback" },
          ]}
          activeStep={activeStep}
          styleConfig={myStyle}
        />
        <div className="d-flex justify-content-center mt-3 pt-5">
          {activeStep == 0 ? (
            <div className="container-sm row justify-content-center mt-3">
              <div class="col-5 mx-5">
                <h3>Personal</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Affirm that all information provided is correct."
                    />
                  </Form.Group>
                </Form>
              </div>
              <div class="col-5 mx-5">
                <h3>Contact</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="cell"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Extension Number</Form.Label>
                    <Form.Control
                      type="cell"
                      placeholder="Enter extension number"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="my-3" />
              <Button
                onClick={clickNextStep}
                className="mt-5 col-11"
                variant="dark"
              >
                Next
              </Button>
             <Button className="px-5 mt-5 backToShop" onClick={handleHomeBackClick} variant="secondary">
                Back to Shop
              </Button>
            </div>
          ) : activeStep == 1 ? (
            <div className="container-sm row justify-content-center">
              <div class="col-5 mx-5">
                <h3>Payment Information</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                      onChange={handleCardHolderName}
                      type="text"
                      placeholder="Enter first name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control
                      onChange={handleCreditCardNumber}
                      type="text"
                      placeholder="Enter last name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                      onChange={handleExpirationDate}
                      type="text"
                      placeholder="Enter last name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Security Digits</Form.Label>
                    <Form.Control
                      onChange={handleSecurityDigits}
                      type="text"
                      placeholder="Enter last name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control
                      onChange={handleBillingAddress}
                      type="text"
                      placeholder="Enter last name"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div class="col-5 mx-5">
                <h3>Delivery Options</h3>
                <p>Shipping</p>
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option1" />
                  {" Regular Shipping (1 week)"}
                </label>
                <br />
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option2" />
                  {" Express Shipping (2-3 days)"}
                </label>
                <br />
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option3" />
                  {" Urgent Shipping (1 day)"}
                </label>
                <br />
                <br />
                <p>Delivery Style</p>
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option1" />
                  {" Doorbell, Request Signature"}
                </label>
                <br />
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option2" />
                  {" Doorbell, Leave Package"}
                </label>
                <br />
                <label className="mx-3">
                  <input type="radio" name="myRadio" value="option3" />
                  {" Phone Notification, Leave Package"}
                </label>
                <div className="mt-4 pt-4" />
                <img className="mx-5 px-4 py-3" src={PaymentPhoto}></img>
              </div>
              <div className="row d-flex mt-5">
                <Button
                  onClick={clickBackStep}
                  variant="dark"
                  className="col-5 mx-auto"
                >
                  Back
                </Button>
                <Button
                  onClick={clickNextStep}
                  variant="dark"
                  className="col-5 mx-auto"
                >
                  Next
                </Button>
              </div>
              <Button className="px-5 mt-5 backToShop" onClick={handleHomeBackClick} variant="secondary">
                Back to Shop
              </Button>
            </div>
          ) : activeStep == 2 ? (
            <>
              <div className="container-sm row justify-content-center">
                <div class="col-5 mx-5">
                  <h3>Order Details</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Card Holder Name</Form.Label>
                      <p>{cardHolderName}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Credit Card Number</Form.Label>
                      <p>{creditCardNumber}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Expiration Date</Form.Label>
                      <p>{expirationDate}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Security Digits</Form.Label>
                      <p>{securityDigits}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Billing Address</Form.Label>
                      <p>{billingAddress}</p>
                    </Form.Group>
                  </Form>
                </div>
                <div class="col-5 mx-5">
                  <h3>Order Summary</h3>
                  <div className="row">
                    <p className="col-6">
                      {cartItems.map((currentItem) => (
                        <>
                          <p>{currentItem.name}</p>
                          <br />
                        </>
                      ))}
                    </p>

                    <p className="col-6">
                      {cartItems.map((currentItem) => (
                        <>
                          <p>${currentItem.currentPrice}</p>
                          <br />
                        </>
                      ))}
                    </p>
                  </div>
                  <div className="row">
                    <p className="col-6">Sub Total</p>

                    <p className="col-6">${orderTotal}</p>
                  </div>
                </div>
                <div className="row d-flex mt-5">
                  <Button
                    onClick={clickBackStep}
                    variant="dark"
                    className="col-5 mx-auto"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={clickNextStep}
                    variant="dark"
                    className="col-5 mx-auto"
                  >
                    Confirm Order
                  </Button>
                </div>
              <Button className="px-5 mt-5 backToShop" onClick={handleHomeBackClick} variant="secondary">
                Back to Shop
              </Button>
              </div>
            </>
          ) : (
            <Survey nextStep={clickNextStep} setCartItemsCount={setCartItemsCount} setCartItems={setCartItems} setPageState={setPageState}/>
          )}
        </div>
      </>
    </>
  );
}

export default CheckoutForm;
