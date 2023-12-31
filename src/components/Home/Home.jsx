import React from 'react';
import { Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.jpg';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import HomeChef from '../Homechef/HomeChef';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';
const Home = () => {
  const data = useLoaderData();
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
        <h1 className=" text-center">Our Chefs</h1>
        <hr className="mb-4" />
        <div className="mb-4">
          <Row xs={1} md={3} className="g-4">
            {data.map(chef => (
              <HomeChef key={chef.id} chef={chef}></HomeChef>
            ))}
          </Row>
        </div>
        <ExtraOne></ExtraOne>
        <ExtraTwo></ExtraTwo>
      </Container>
    </div>
  );
};

export default Home;
