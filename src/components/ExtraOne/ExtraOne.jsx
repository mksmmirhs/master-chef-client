import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ExtraOne = () => {
  return (
    <div className="mb-5">
      <h1 className="text-center">They Specialize in Intimate Catering</h1>
      <hr />
      <Row xs={1} md={3} className="g-4 mt-5">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-6-1170x658.jpg"
            />
            <Card.Body>
              <Card.Title>Corporate Events</Card.Title>
              <Card.Text>
                Experienced corporate event chef with a passion for creating
                delicious and visually appealing dishes to impress guests and
                exceed expectations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-4-1170x658.jpg"
            />
            <Card.Body>
              <Card.Title>Weddings And Galas</Card.Title>
              <Card.Text>
                Experienced chef creating exquisite dishes with seasonal
                ingredients, impeccable presentation, and attention to detail
                for weddings and galas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-7-1170x658.jpg"
            />
            <Card.Body>
              <Card.Title>Cooking Classes</Card.Title>
              <Card.Text>
                Passionate and knowledgeable chef teaching hands-on cooking
                classes with a focus on technique, creativity, and fun culinary
                experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ExtraOne;
