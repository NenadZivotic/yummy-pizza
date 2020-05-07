import React, { Component } from "react";
import { PizzaConsumer } from "../../context";
import { Link } from "react-router-dom";

import styled from "styled-components";

class Modal extends Component {
  render() {
    return (
      <PizzaConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { image, name, price, details } = value.detailPizza;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <img src={image} className="img-fluid" alt="pizza" />
                      <h5 className="mt-2">{name}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <h5>Ingredients: {`${details.substr(0, 75)}...`}</h5>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/"
                        onClick={() => closeModal()}
                      >
                        {" "}
                        <Button>More Pizzas</Button>{" "}
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/order"
                        onClick={() => closeModal()}
                      >
                        {" "}
                        <Button>Go To Cart</Button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </PizzaConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--main-white);
  }
`;

const Button = styled.button`
  border: none;
  background: var(--main-gray);
  color: var(--main-white);
  border: 1px solid var(--main-black);
  border-radius: 0.3rem;

  &:hover {
    background: var(--main-white);
    color: var(--main-black);
  }
`;

export default Modal;
