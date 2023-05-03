import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch(err => {
        console.log(err);
      });
  };
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
              {user?.photoURL ? (
                <Image
                  className="me-4 display-pic"
                  src={user.photoURL}
                  roundedCircle
                  title={user?.displayName ? user.displayName : ''}
                />
              ) : (
                <></>
              )}
              {user ? (
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
