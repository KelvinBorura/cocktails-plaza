import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";
import './Cocktail.css';

const Cocktails = () => {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      setDrinks(response.data.drinks || []);
    } catch (e) {
      setError("Failed to fetch drinks.");
    }

    setIsLoading(false);
  };

  const handleCardClick = (id) => {
    navigate(`/cocktails/${id}`);
  };

  const renderCards = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <Error message={error} />;
    }

    if (drinks.length === 0 && !isLoading) {
      return <p>No drinks found. Please try again.</p>;
    }

    return (
      <div className="cocktail-cards"> {/* Added a wrapper div */}
        {drinks.map((drink) => (
          <Card
            key={drink.idDrink}
            onClick={() => handleCardClick(drink.idDrink)}
            className="cocktail-card" // Apply styles for inline-block
          >
            <Card.Img variant="top" src={drink.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Container className="cocktail-container" style={{ overflow: 'hidden' }}>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                name="search"
                placeholder="Search cocktails"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mr-2"
                style={{ width: '20%' }}
              />
            
            </Form.Group><br></br>
            <Button variant="primary" type="submit">
                Search
              </Button>
          </Form>
        </Col>
      </Row>
      <div style={{ overflow: 'hidden' }}>
        {renderCards()}
      </div>
    </Container>
  );
};

export default Cocktails;
