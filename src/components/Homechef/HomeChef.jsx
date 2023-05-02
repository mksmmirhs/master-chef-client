import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeChef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
  } = chef;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={chef_picture} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            <p>Years of experience: {years_of_experience} Years</p>
            <p>Numbers of recipes: {num_of_recipes} </p>
            <p>Likes: {likes}</p>
            <Link to={`chef/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeChef;
