import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(true);
  };
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>

          <p>Description: {recipe.description} </p>
          <ul>
            {recipe.ingredients.map(igd => (
              <li key={igd}>{igd}</li>
            ))}
          </ul>
          <p>Cooking directions:</p>
          {recipe.directions.map(mtd => (
            <p key={mtd}>
              {mtd} <br />
            </p>
          ))}
          <h3>Rating : {recipe.rating}</h3>
          <button
            onClick={handleFavorite}
            className="btn btn-info"
            disabled={isFavorite}
          >
            Add to Favorite
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
