import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container>
        <Form className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Form.Text className="text-muted">
            New to site? <Link to="/register">Register</Link>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
