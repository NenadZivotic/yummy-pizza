import React, { Component } from "react";
import Pizza from "../Pizza/Pizza";
import { PizzaConsumer } from "../../context";

import styled from "styled-components";

class PizzasList extends Component {
  render() {
    return (
      <PizzaContainer>
        <PizzaConsumer>
          {(value) => {
            return value.pizzas.map((pizza) => {
              return <Pizza key={pizza._id} pizza={pizza} cart={value.cart} />;
            });
          }}
        </PizzaConsumer>
      </PizzaContainer>
    );
  }
}

const PizzaContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default PizzasList;
