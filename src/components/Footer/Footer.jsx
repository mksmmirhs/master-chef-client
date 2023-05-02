import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <Container className="d-flex bg-light p-5 mt-4">
        <div className="flex-grow-1">
          <p className="text-center">© 2023 korean odyssey</p>
        </div>
        <div>
          Follow us <FaFacebookF></FaFacebookF> <FaTwitter></FaTwitter>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
