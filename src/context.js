import React, { Component } from "react";
import axios from "axios";

const PizzaContext = React.createContext();

class PizzaProvider extends Component {
  state = {
    isLoading: true,
    properties: {},
    pizzas: [],
    cart: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/pizzas").then((res) => {
      this.setState({ pizzas: res.data, isLoading: false });
    });
  }

  render() {
    return (
      <PizzaContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </PizzaContext.Provider>
    );
  }
}

const PizzaConsumer = PizzaContext.Consumer;

export { PizzaProvider, PizzaConsumer };
