import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Order from "./pages/Order/Order";
import PizzaDetails from "./pages/PizzaDetails/PizzaDetails";
import AdminLoginPage from "./components/Admin/AdminLoginPage/AdminLoginPage";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

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
        <Route exact path="/admin" component={AdminLoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Modal />
    </div>
  );
};

export default App;
