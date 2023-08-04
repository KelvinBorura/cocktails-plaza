import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

const Cocktails = () => {
    const [query, setQuery] = useState("");
    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const searchDrinks = async () => {
        setIsLoading(true);
        setError(null);
  
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
          );
          setDrinks(response.data.drinks);
        } catch (e) {
          setError("Failed to fetch drinks!");
        }
  
        setIsLoading(false);
      };
  
      if (query && query.trim()) {
        searchDrinks();
      }
    }, [query]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(e.target.elements.search.value);
    };

    return (
        <Container>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control type="text" name="search" placeholder="Search cocktails" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
          {isLoading && <LoadingSpinner />}
          {error && <Error message={error} />}
          {drinks.length > 0 && (
            <Row className="mt-3">
              {drinks.map((drink) => (
                <Col md={4} key={drink.idDrink}>
                  <Card>
                    <Card.Img variant="top" src={drink.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{drink.strDrink}</Card.Title>
                      <Link to={`/cocktails/${drink.idDrink}`} className="btn btn-primary">
                        Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      );
    };

export default Cocktails