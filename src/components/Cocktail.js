import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

const Cocktail = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrink = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`
        );
        setDrink(response.data.drinks[0]);
      } catch (e) {
        setError("Failed to fetch drink details.");
      }

      setIsLoading(false);
    };

    fetchDrink();
  }, [id]);

  const renderIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (drink && drink[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {drink[`strMeasure${i}`]} {drink[`strIngredient${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!drink) {
    return <p>No drink found. Please try again.</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src={drink.strDrinkThumb} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>
              <Card.Text>{drink.strInstructions}</Card.Text>
              <Card.Text>
                <strong>Category:</strong> {drink.strCategory}
              </Card.Text>
              <Card.Text>
                <strong>Ingredients:</strong>
              </Card.Text>
              <ul>{renderIngredients()}</ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cocktail;