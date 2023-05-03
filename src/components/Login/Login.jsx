import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const Login = () => {
  const { loginWithPopUp, signIn } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    loginWithPopUp(provider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    const provider = new GithubAuthProvider();
    loginWithPopUp(provider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div>
      <Container>
        <Form className="w-50 mx-auto" onSubmit={handleSignIn}>
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
        <hr />
        <div className="text-center">
          <button onClick={handleGoogle} className="btn btn-primary me-2">
            Login with google
          </button>
          <button onClick={handleGithub} className="btn btn-primary">
            Login with Github
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
