import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner"
import Error from "./components/Error";

const Cocktail = () => {
      const { id } = useParams();
      const [drink, setDrink] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const getDrink = async () => {
          setIsLoading(true);
          setError(null);
    
          try {
            const response = await axios.get(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            setDrink(response.data.drinks[0]);
          } catch (e) {
            setError("Failed to fetch drink details!");
          }
    
          setIsLoading(false);
        };
    
        getDrink();
      }, [id]);
    
      if (isLoading) {
        return <LoadingSpinner />;
      }
    
      if (error) {
        return <Error message={error} />;
      }
    
      if (!drink) {
        return null;
      }
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={drink.strDrinkThumb} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>
              <Card.Text>{drink.strInstructions}</Card.Text>
              <Card.Text>
                <strong>Category:</strong> {drink.strCategory}
              </Card.Text>
              <Card.Text>
                <strong>Ingredients:</strong>
              </Card.Text>
              <ul>
                {Object.keys(drink)
                  .filter(
                    (key) =>
                      key.startsWith("strIngredient") &&
                      drink[key] !== null &&
                      drink[key] !== ""
                  )
                  .map((key) => (
                    <li key={key}>{drink[key]}</li>
                  ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  
}

export default Cocktail