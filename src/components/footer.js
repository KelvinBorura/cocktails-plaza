import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container">
        <p className="text-center text-muted my-2">
          Made with ❤️ by Crystal Kariuki | © 2023 All rights reserved
        </p>
        <div className="d-flex justify-content-center">
          <a href="https://twitter.com" className="mx-2">
            <i className="fab fa-twitter fa-2x text-primary"></i>
          </a>
          <a href="https://facebook.com" className="mx-2">
            <i className="fab fa-facebook fa-2x text-primary"></i>
          </a>
          <a href="https://instagram.com" className="mx-2">
            <i className="fab fa-instagram fa-2x text-primary"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;