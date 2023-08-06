import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Cocktail from "./components/Cocktail";
import Footer from "./components/footer";

const App = () => {
  const navStyle = {
    display: 'inline-block',
    margin: '10px',
    textDecoration: 'none',
    color: 'green'
  };

  const activeStyle = {
    borderBottom: '2px solid green',
    color: 'green'
  };

  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/" style={navStyle} activeStyle={activeStyle}>Home</Link>
        <Link to="/about" style={navStyle} activeStyle={activeStyle}>About</Link>
        <Link to="/cocktails" style={navStyle} activeStyle={activeStyle}>Cocktail List</Link>
        <Link to="/cocktails/:id" style={navStyle} element={<Cocktail />}>View Cocktail</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
