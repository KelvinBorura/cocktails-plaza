import React from 'react'
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
}

export default Cocktails