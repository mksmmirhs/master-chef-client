import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Container className="p-0 mb-4">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">korean odyssey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link className="link-nav my-auto" to="/">
                  Home
                </Link>
                <Link className="link-nav my-auto" to="/blog">
                  Blog
                </Link>
              </Nav>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
