import Card from "./Card";
import SideBar from "./SideBar";
import { placeholderCardData, testArray } from "../ItemData";
import { Stepper } from 'react-form-stepper';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function CheckoutForm({ cartItems }) {
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
        activeBgColor: '#000000'
    }

    function clickNextStep() {
        setActiveStep(activeStep+1);
    }

    function clickBackStep() {
        setActiveStep(activeStep-1);
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
                steps={[{ label: 'Personal Information' }, { label: 'Payment Information' }, { label: 'Confirm Purchase' }]}
                activeStep={activeStep}
                styleConfig={myStyle}
            />
            <div className="d-flex justify-content-center">
            {activeStep == 0 ?
                <div className='container-sm row '>
                    <div class='col-6'>
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
                                <Form.Check type="checkbox" label="Affirm that all information provided is correct." />
                            </Form.Group>
                            
                        </Form>
                    </div>
                    <div class='col-6'>
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
                                <Form.Control type="cell" placeholder="Enter phone number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Extension Number</Form.Label>
                                <Form.Control type="cell" placeholder="Enter extension number" />
                            </Form.Group>

                        </Form>
                    </div>
                    <Button onClick={clickNextStep} variant="primary">
                        Next
                    </Button>
                </div>
            : activeStep == 1 ?
                <div className='container-sm row '>
                    <div class='col-6'>
                        <h3>Payment Information</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Card Holder Name</Form.Label>
                                <Form.Control onChange={handleCardHolderName} type="text" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control onChange={handleCreditCardNumber} type="text" placeholder="Enter last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Expiration Date</Form.Label>
                                <Form.Control onChange={handleExpirationDate} type="text" placeholder="Enter last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Security Digits</Form.Label>
                                <Form.Control onChange={handleSecurityDigits} type="text" placeholder="Enter last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Billing Address</Form.Label>
                                <Form.Control onChange={handleBillingAddress} type="text" placeholder="Enter last name" />
                            </Form.Group>

                        </Form>
                    </div>
                    <div class='col-6'>
                        <h3>Delivery Options</h3>
                        <p>Shipping</p>
                         <label>
                            <input type="radio" name="myRadio" value="option1" />
                            {' Regular Shipping (1 week)'}
                        </label>
                        <br/>
                        <label>
                            <input type="radio" name="myRadio" value="option2" />
                            {' Express Shipping (2-3 days)'}
                        </label>
                        <br/>
                        <label>
                            <input type="radio" name="myRadio" value="option3" />
                            {' Urgent Shipping (1 day)'}
                        </label>
                        <br/><br/>
                        <p>Delivery Style</p>
                         <label>
                            <input type="radio" name="myRadio" value="option1" />
                            {' Doorbell, Request Signature'}
                        </label>
                        <br/>
                        <label>
                            <input type="radio" name="myRadio" value="option2" />
                            {' Doorbell, Leave Package'}
                        </label>
                        <br/>
                        <label>
                            <input type="radio" name="myRadio" value="option3" />
                            {' Phone Notification, Leave Package'}
                        </label>
                        
                    </div>
                    <div className="row d-flex">
                        <Button onClick={clickBackStep} variant="primary col-1">
                            Back
                        </Button>
                        <Button onClick={clickNextStep} variant="primary col-1 mx-auto">
                            Next
                        </Button>
                    </div>
                </div>
            :
            <>
                <div className='container-sm row '>
                    <div class='col-6'>
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
                    <div class='col-6'>
                        <h3>Order Summary</h3>
                        <div className="row">
                            <p className="col-6">{cartItems.map((currentItem) => (
                                <>
                                    <p>{currentItem.name}</p><br/>
                                </>)
                            )}</p>
                            
                            <p className="col-6">{cartItems.map((currentItem) => (
                                <>
                                    <p>${currentItem.currentPrice}</p><br/>
                                </>)
                            )}</p>
                            
                        </div>
                        <div className="row">
                            <p className="col-6">Sub Total</p>
                            
                            <p className="col-6">${orderTotal}</p>
                            
                        </div>
                    </div>
                    <div className="row d-flex">
                        <Button onClick={clickBackStep} variant="primary col-1">
                                Back
                        </Button>
                        <Button onClick={clickNextStep} variant="primary col-2 mx-auto">
                                Confirm Order
                        </Button>
                    </div>
                </div>

            </> 
            }
            </div>
        </>
    </>
  );
}

export default CheckoutForm;
