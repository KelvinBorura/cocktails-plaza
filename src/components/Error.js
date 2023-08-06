import React from "react";
import { Container, Alert } from "react-bootstrap"; // Import Container and Alert from react-bootstrap

const Error = ({ message }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Alert variant="danger">{message}</Alert>
    </Container>
  );
};

export default Error;
