import React from "react";
import { Container } from "react-bootstrap"; // Import Container from react-bootstrap

const About = () => {
  return (
    <Container className="mt-5"> {/* Add Bootstrap Container */}
      <div>
        <h1>About This Site</h1>
        <p>
          This site is a collection of cocktail recipes with detailed instructions
          on how to make them. Cheers!
        </p>
      </div>
    </Container>
  );
};

export default About;
