import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

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
    <div>Cocktail</div>
  )
}

export default Cocktail