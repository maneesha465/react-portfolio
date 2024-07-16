import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <Navbar bg="dark"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  as={Link} to="/">MANEESHA MA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link  as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link  as={Link} to="/Contact">contact</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}


export default Header;