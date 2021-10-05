import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Authentication from "../components/Authentication";

const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Cascade Editor</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Editor</Nav.Link>
            </Nav>
            <Authentication />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
