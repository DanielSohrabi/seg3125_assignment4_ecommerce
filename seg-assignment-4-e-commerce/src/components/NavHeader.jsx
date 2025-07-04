import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavHeader({ searchQuery, setSearchQuery }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ height: "100px" }}
    >
      <Container fluid>
        <Navbar.Brand className="px-5">LOGO</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="flex-grow-1 justify-content-center">
            <Form className="d-flex w-50 mx-auto">
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
            <Nav.Link>CART</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
