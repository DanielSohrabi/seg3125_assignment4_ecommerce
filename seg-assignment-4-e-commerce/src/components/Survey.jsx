import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Rating from "react-rating";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./Survey.css";

export default function Survey({ nextStep, setCartItemsCount, setCartItems, setPageState }) {
  const [feedback, setFeedback] = useState(true);

  const changeView = () => {
    nextStep();
    setFeedback(false);
  };

  function completePurchase() {
    setCartItemsCount(0);
    setCartItems([]);
    setPageState("Shop")
  }

  return feedback ? (
    <Container className="d-flex justify-content-center text-center">
      <Card className="surveyCard">
        <h1>Thanks For Choosing Us</h1>
        <h4>Order Confirmation: #537832s38ghd</h4>

        <Form>
          <Form.Group className="mb-4 text-center ratingGroup">
            <div>
              <Rating
                emptySymbol={<span className="emptyStars">☆</span>}
                fullSymbol={<span className="fullStars">★</span>}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>How Likely Are You To Recommend Us?</Form.Label>
            <Form.Select>
              <option value="">Select an option</option>
              <option value="likely">Very likely</option>
              <option value="neutral">Neutral</option>
              <option value="unlikely">Unlikely</option>
              <option value="never">Never</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4 addComments">
            <Form.Label>Additional Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Tell us more about your experience..."
            />
          </Form.Group>
          <div className="text-center mt-5">
            <Button variant="dark" className="col-7" onClick={changeView}>
              Submit Your Feedback
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  ) : (
    <div>
      <h1 className='text-center'>Thanks for your feedback!</h1>
      <h4 className='text-center'>Please stay in touch at pearstore@gmail.com</h4>
      <Button variant="dark" className="col-12 mt-5" onClick={completePurchase}>
        Back to Shop
      </Button>
    </div>
  );
}
