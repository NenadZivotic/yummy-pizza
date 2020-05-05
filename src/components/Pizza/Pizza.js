import React from "react";

import styled from "styled-components";

const Pizza = (props) => {
  const { _id, name, price, image, cart } = props.pizza;
  console.log(cart);
  return (
    <PizzaCard className="card">
      <PizzaImage src={image} alt="pizza" className="card-img-top img-fluid" />
      <div className="card-body">
        <h4 className="card-title text-center">{name}</h4>
        <h5 className="card-text text-center">Price: ${price}</h5>
        <Button>
          <p>Add to cart</p>
        </Button>
      </div>
    </PizzaCard>
  );
};

const PizzaCard = styled.div`
  margin: calc(5% - 1rem);
  margin-top: 2rem;
  height: 19rem;
`;

const PizzaImage = styled.img`
  width: 15rem;
  height: 10rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.4rem;
  border-radius: 5px;
  outline: none;
  border: none;
  color: var(--main-white);
  background: var(--main-gray);
  margin: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  p {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--main-white);
  }

  &:hover p {
    color: var(--main-gray);
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 364px) {
    padding: 0.1rem;
  }
`;

export default Pizza;
