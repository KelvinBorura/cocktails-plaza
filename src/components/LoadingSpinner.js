import React from "react";
import { Container, Spinner } from "react-bootstrap"; // Import Container and Spinner from react-bootstrap

const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Spinner animation="border" variant="primary" />
    </Container>
  );
};

export default LoadingSpinner;
