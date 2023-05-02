import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';
import Recipe from '../Recipe/Recipe';

const Chef = () => {
  const data = useLoaderData();
  const { recipes } = data;
  return (
    <Container>
      <ChefBanner data={data}></ChefBanner>

      <Row xs={1} md={3} className="g-4">
        {recipes.map(recipe => (
          <Recipe key={recipe.name} recipe={recipe}></Recipe>
        ))}
      </Row>
    </Container>
  );
};

export default Chef;
