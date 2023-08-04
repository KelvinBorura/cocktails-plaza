import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Cocktails from "./components/Cocktails";
import Cocktail from "./Cocktail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cocktails} />
        <Route path="/cocktails/:id" component={Cocktail} />
        <Route path="/error">
          <div>Error! No such page exists.</div>
        </Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
};

export default App;