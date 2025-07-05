import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavHeader.css"

export default function NavHeader({ searchQuery, setSearchQuery, cartItemsCount, setPageState }) {

  function handleCartClick() {
    setPageState("Cart")
  }

  function handleIconClick() {
    setPageState("Shop")
  }

  return (
    <Navbar
      expand="lg"
      className="navbar"
      style={{ height: "100px" }}
    >
      <Container fluid>
        <Navbar.Brand className="px-5 pearstore" onClick={handleIconClick}>pearStore 🍐</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="flex-grow-1">
            <Form className="d-flex searchbar">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav className="pe-5">
            <Nav.Link onClick={handleCartClick}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> <h4 className="cartText">{cartItemsCount}</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
