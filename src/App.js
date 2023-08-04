import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Cocktails from "./components/Cocktails";
import Cocktail from "./components/Cocktail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktails">
          <Cocktails />
        </Route>
        <Route path="/cocktails/:id">
          <Cocktail />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;