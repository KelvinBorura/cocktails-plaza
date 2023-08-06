import React from "react";
import { Container } from "react-bootstrap"; // Import Container from react-bootstrap

const Home = () => {
  return (
    <Container className="home-bg d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Welcome To Cocktail Plaza</h1>
      </div>
    </Container>
  );
};

export default Home;
