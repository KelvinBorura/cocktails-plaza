import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

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
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
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

    if (drinks.length === 0) {
      return <p>No drinks found. Please try again.</p>;
    }

    return (
      <Row className="mt-3">
        {drinks.map((drink) => (
          <Col md={4} key={drink.idDrink}>
            <Card onClick={() => handleCardClick(drink.idDrink)}>
              <Card.Img variant="top" src={drink.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Form className="mb-3" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search cocktails"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {renderCards()}
      </Row>
    </Container>
  );
};

export default Cocktails;