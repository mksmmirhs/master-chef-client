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
          <Card.Text>
            <p>Description: {recipe.description} </p>
            <ul>
              {recipe.ingredients.map(igd => (
                <li>{igd}</li>
              ))}
            </ul>
            <p>Cooking directions:</p>
            {recipe.directions.map(mtd => (
              <>
                {mtd} <br />
              </>
            ))}
            <h3>Rating : {recipe.rating}</h3>
            <button
              onClick={handleFavorite}
              className="btn btn-info"
              disabled={isFavorite}
            >
              Add to Favorite
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
