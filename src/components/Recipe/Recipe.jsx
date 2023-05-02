import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>
            <p>Description: {recipe.description} </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
