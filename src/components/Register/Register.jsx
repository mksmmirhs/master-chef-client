import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <Container>
        <Form className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="PhotoURl">
            <Form.Label>Your photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photoUrl"
              placeholder="Enter Your Photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmailVerify">
            <Form.Label>Verify Email address</Form.Label>
            <Form.Control
              type="email"
              name="verifyEmail"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordVerify">
            <Form.Label>Verify Password</Form.Label>
            <Form.Control
              type="password"
              name="verifyPassword"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Form.Text className="text-muted">
            Already user? <Link to="/login">Login</Link>
          </Form.Text>
        </Form>
        <hr />
      </Container>
    </div>
  );
};

export default Register;
