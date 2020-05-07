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
                      <h4 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                        thank you for your order!
                      </h4>
                      <h5 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                        go to homepage to start a new order...
                      </h5>
                      <h5 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                        eat yummy good and stay safe!
                      </h5>
                      <h5 style={{ marginTop: "2rem" }}>
                        {" "}
                        <span role="img" aria-label="smiley">
                          &#128521;
                        </span>{" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={() => closeModal()}
                          to="/"
                        >
                          <Button>Home</Button>
                        </Link>
                      </h5>
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
  display: block;
  margin: auto;
  margin-top: 1rem;

  &:hover {
    background: var(--main-white);
    color: var(--main-gray);
    border: 1px solid var(--main-gray);
  }
`;

export default Modal;
