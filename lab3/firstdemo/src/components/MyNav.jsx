import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export class MyNav extends Component {
  render() {
    return (
        <Navbar bg="dark" className='navbar-dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home">Furniture App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Products</NavLink>
              <NavLink className="nav-link" to="/products/0/edit">Add Product</NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNav
