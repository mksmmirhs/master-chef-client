import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const { user, createUser, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState('');

  const userFormSubmit = event => {
    setError('');
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const confirmEmail = form.verifyEmail.value;
    const verifyPassword = form.verifyPassword.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    if (email !== confirmEmail) {
      setError('Email did not match');
      return;
    } else if (password !== verifyPassword) {
      setError('Password did not match');
      return;
    } else if (password.length < 6) {
      setError('Password Must be more than six characters');
      return;
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        profileUpdate(name, photoUrl);
      })
      .catch(err => {
        setError(err);
      });
  };
  return (
    <div>
      <Container>
        <Form className="w-50 mx-auto" onSubmit={userFormSubmit}>
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
              required
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
        <p className=" text-danger text-center">{error}</p>
      </Container>
    </div>
  );
};

export default Register;
