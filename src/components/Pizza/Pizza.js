import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { PizzaConsumer } from "../../context";

import styled from "styled-components";

const Pizza = ({ pizza, cart }) => {
  const { _id, name, price, image, inCart } = pizza;
  return (
    <PizzaConsumer>
      {(value) => (
        <PizzaCard className="card">
          <PizzaImage
            src={image}
            alt="pizza"
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <h5 className="card-text text-center">Price: ${price}</h5>
          </div>
          <div className="card-footer">
            <Link
              to="/"
              style={{ color: "var(--main-white)", textDecoration: "none" }}
            >
              <Button
                onClick={() => {
                  value.handleDetail(_id);
                  value.openModal(_id);
                }}
              >
                Info
              </Button>
            </Link>
            <Button
              style={{ marginLeft: "1rem" }}
              disabled={inCart ? true : false}
              onClick={() => value.addToCart(_id)}
            >
              {inCart ? "in cart" : "add to cart"}
            </Button>
          </div>
        </PizzaCard>
      )}
    </PizzaConsumer>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const PizzaCard = styled.div`
  margin: calc(5% - 1rem);
  margin-top: 2rem;
  height: 20rem;

  &:hover {
    box-shadow: 2px 2px 2px 2px var(--main-gray);
    transition: all 0.4s ease-in-out;
  }
`;

const PizzaImage = styled.img`
  width: 16.5rem;
  height: 10rem;
`;

const Button = styled.button`
  text-transform: capitalize;
  width: 6.5rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--main-white);
  background: var(--main-gray);
  margin: 0;
  position: relative;

  &:hover {
    background: var(--main-white);
    color: var(--main-gray);
    border: 1px solid var(--main-gray);
  }
`;

export default Pizza;
