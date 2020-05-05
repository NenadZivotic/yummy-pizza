import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PizzaProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <Router>
        <App />
      </Router>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
