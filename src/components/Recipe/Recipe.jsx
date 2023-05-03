import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(true);
    toast('Your recipe added');
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
          <ToastContainer />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
