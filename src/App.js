import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Order from "./pages/Order/Order";
import PizzaDetails from "./pages/PizzaDetails/PizzaDetails";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/details" component={PizzaDetails} />
        <Route
          path="*"
          component={() => (
            <h1>Not Found 404 - Please go back to Home or Cart...</h1>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
