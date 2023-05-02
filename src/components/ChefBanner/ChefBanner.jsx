import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ChefBanner.css';
const ChefBanner = ({ data }) => {
  const {
    chef_picture,
    chef_name,
    short_bio,
    likes,
    num_of_recipes,
    years_of_experience,
  } = data;
  return (
    <div className=" mb-5">
      <Row>
        <Col>
          <img className="bio-img" src={chef_picture} alt="" />
        </Col>
        <Col>
          <h1>Chef name: {chef_name}</h1>
          <p>Bio: {short_bio}</p>
          <p>Likes : {likes}</p>
          <p>Number of recipes: {num_of_recipes}</p>
          <p> Years of experience: {years_of_experience}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ChefBanner;
