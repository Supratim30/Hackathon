import React from 'react'
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, FormFile} from 'react-bootstrap'
import Test from './Test'
export default function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Covid Combatants</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
    <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="/Test">About</Nav.Link>
      <Nav.Link href="#deets">Resources</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
