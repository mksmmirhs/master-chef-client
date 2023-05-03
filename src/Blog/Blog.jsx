import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <div>
      <Container>
        <h1>
          Tell us the differences between uncontrolled and controlled components
        </h1>
        <p>
          Ans:Controlled components have their state and behavior controlled by
          parent component on the other hand uncontrolled component have their
          own state or behavior.
        </p>
        <h1>How to validate React props using PropTypes?</h1>
        <p>
          Ans: Using PropTypes followed by dot like{' '}
          <span className=" text-danger">PropTypes.string</span> we can validate
          the type of props. it will show error in console if type is
          mismatched.
        </p>
        <h1>Tell us the difference between nodejs and express js</h1>
        <p>
          Ans: Node js is javascript runtime on the other hand express js is
          framework of node.js.
        </p>
        <h1>What is a custom hook, and why will you create a custom hook?</h1>
        <p>
          Custom hook is javascript function allow to use stateful logics
          between multiple component. When facing data from an api across
          multiple component we use custom hook beside that validate state of
          multi step form we use custom hook.
        </p>
      </Container>
    </div>
  );
};

export default Blog;
