import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { PizzaConsumer } from "../../context";

const PizzaDetails = ({ history }) => {
  return (
    <PizzaConsumer>
      {(value) => {
        const localStoragePizza = JSON.parse(localStorage.getItem("pizza"));
        const { _id, name, details, image, price, inCart } = localStoragePizza;
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col mx-auto text-center">
                <h1>{name}</h1>
              </div>
            </div>
            <InnerPizzaContainer className="row mt-5">
              <div className="col mx-auto">
                <img src={image} className="img-fluid" alt="pizza" />
              </div>
              <div className="col mx-auto">
                <h1 className="text-capitalize">Pizza: {name}</h1>
                <h3>
                  Price: <strong>${price}</strong>
                </h3>
                <h4>
                  <strong>Ingredients:</strong> {details}
                </h4>
                <div style={{ marginTop: "2rem" }}>
                  <Link to="/">
                    <Button>Homepage</Button>
                  </Link>
                  <Button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(_id);
                      history.push("/");
                    }}
                    style={{ marginLeft: "2rem" }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </Button>
                </div>
              </div>
            </InnerPizzaContainer>
          </div>
        );
      }}
    </PizzaConsumer>
  );
};

const Button = styled.button`
  text-transform: capitalize;
  padding: 0.3rem 0.4rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  color: var(--main-white);
  background: var(--main-gray);
  position: relative;

  &:hover {
    background: var(--main-white);
    color: var(--main-gray);
    border: 1px solid var(--main-gray);
  }

  &:active,
  &:focus {
    outline: none;
    border: 1px solid var(--main-gray);
  }
`;

const InnerPizzaContainer = styled.div`
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`;

export default PizzaDetails;
