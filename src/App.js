import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Cocktail from "./components/Cocktail";
import Footer from "./components/footer";

const App = () => {
  const style = {
    marginRight: '10px'
  }
  return (
    <BrowserRouter>
      <Link to="/" style={style} element={<Home />}>Home</Link>
      <Link to="/about" style={style} element={<About />}>About</Link>
      <Link to="/cocktails" style={style} element={<Cocktails />}>Cocktail List</Link>
      <Link to="/cocktails/:id" style={style} element={<Cocktail />}>View Cocktail</Link>
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