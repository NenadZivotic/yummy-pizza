import React, { Component } from "react";
import Title from "../../components/Title/Title";
import PizzasList from "../../components/PizzasList/PizzasList";
import Spinner from "../../components/UI/Spinner/Spinner";

import { PizzaConsumer } from "../../context";

class Homepage extends Component {
  render() {
    return (
      <PizzaConsumer>
        {(value) => {
          return value.isLoading ? (
            <Spinner />
          ) : (
            <div style={{ background: "var(--mainWhite)" }}>
              <Title title="Yummy Pizza" />
              <PizzasList />
            </div>
          );
        }}
      </PizzaConsumer>
    );
  }
}

export default Homepage;
