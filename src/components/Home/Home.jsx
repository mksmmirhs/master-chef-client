import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.jpg';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import HomeChef from '../Homechef/HomeChef';
import ExtraOne from '../ExtraOne/ExtraOne';
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Container>
        <div className=" d-flex flex-column flex-md-row  align-items-center mb-4">
          <img className="banner-img" src={banner} alt="" />
          <h1 className="p-4">
            Welcome to our chef's website, where we celebrate the art of cooking
            and showcase the skills of culinary experts.
          </h1>
        </div>
        <div className="mb-4">
          <Row xs={1} md={3} className="g-4">
            {data.map(chef => (
              <HomeChef key={chef.id} chef={chef}></HomeChef>
            ))}
          </Row>
        </div>
        <ExtraOne></ExtraOne>
      </Container>
    </div>
  );
};

export default Home;
