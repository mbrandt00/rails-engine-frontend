import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
const NavbarComponent = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Rails Engine Lite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link data-cy = "merchants-link" href="/merchants">Merchants</Nav.Link> */}
          <Nav.Link data-cy = "items-link" href="/items">Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>

  )
}

export default NavbarComponent