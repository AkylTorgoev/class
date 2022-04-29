import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
      
      <Navbar bg="dark" variant="danger">
        <Container className='nav'>
          <Navbar.Brand href="/">Akyl</Navbar.Brand>
          <Nav className="me-auto">
            
          <NavLink to="/">
            <Nav.Item>Home</Nav.Item>
            </NavLink>

            <NavLink to="/count">
            <Nav.Item>Counter</Nav.Item>
            </NavLink>
            
            <NavLink to="/receipts">
            <Nav.Item>Receipts</Nav.Item>
            </NavLink >

            <NavLink to="/add">
            <Nav.Item>AddContact</Nav.Item>
            </NavLink>

            <NavLink to="/list">
            <Nav.Item>ContactList</Nav.Item>
            </NavLink>

            <NavLink to="/edit">
            <Nav.Item>EditContacts</Nav.Item>
            </NavLink>

          </Nav>
        </Container>
      </Navbar>
    
  );
};

export default Header;
