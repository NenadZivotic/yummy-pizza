import React, { Component } from "react";
import axios from "axios";

const PizzaContext = React.createContext();

class PizzaProvider extends Component {
  state = {
    isLoading: true,
    properties: {},
    pizzas: [],
    detailPizza: {},
    cart: [],
  };

  // pazi ovde
  componentDidMount() {
    axios.get("http://localhost:5000/pizzas").then((res) => {
      this.setState({ pizzas: res.data, isLoading: false });
      this.setPizzas();
    });
  }

  setPizzas = () => {
    let tempPizzas = [];
    this.state.pizzas.forEach((pizza) => {
      const singlePizza = { ...pizza };
      tempPizzas = [...tempPizzas, singlePizza];
    });
    this.setState(() => {
      return { pizzas: tempPizzas };
    });
  };

  getPizza = (id) => {
    const pizza = this.state.pizzas.find((pizza) => pizza._id === id);
    return pizza;
  };

  handleDetail = (id) => {
    const pizza = this.getPizza(id);
    localStorage.setItem("pizza", JSON.stringify(pizza));
    this.setState(() => {
      return {
        detailPizza: pizza,
      };
    });
  };

  addToCart = (id) => {
    console.log(`add to cart ${id}`);
  };

  render() {
    return (
      <PizzaContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </PizzaContext.Provider>
    );
  }
}

const PizzaConsumer = PizzaContext.Consumer;

export { PizzaProvider, PizzaConsumer };
