import React from "react";

import styled from "styled-components";

const CartItem = ({ item, value }) => {
  const { _id, name, image, price, total, count } = item;
  const { increment, decrement, removePizza } = value;
  return (
    <CartContainer className="row my-4 text-capitalize text-center">
      <div className="col 10 mx-auto col-lg-2">
        <img
          src={image}
          style={{ width: "5rem", height: "5rem" }}
          alt="pizza"
          className="img-fluid"
        />
      </div>
      <div className="col 10 mx-auto col-lg-2">
        <span className="d-lg-none">pizza :</span> {name}
      </div>
      <div className="col 10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span> {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <ButtonBlack className="btn mx-1" onClick={() => decrement(_id)}>
              -
            </ButtonBlack>
            <ButtonBlack className="btn mx-1">{count}</ButtonBlack>
            <ButtonBlack className="btn mx-1" onClick={() => increment(_id)}>
              +
            </ButtonBlack>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <CartIcon onClick={() => removePizza(_id)}>
          <i className="fas fa-trash"></i>
        </CartIcon>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total}</strong>
      </div>
    </CartContainer>
  );
};

const ButtonBlack = styled.span`
  background: transparent;
  text-transform: capitalize;
  font-size: 0.8rem !important;
  color: var(--main-black);
  border-radius: 0 !important;
  border: 0.1rem solid var(--main-black) !important;

  &:hover {
    background: var(--main-black) !important;
    color: var(--main-white);
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--main-red);
`;

const CartContainer = styled.div`
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export default CartItem;
