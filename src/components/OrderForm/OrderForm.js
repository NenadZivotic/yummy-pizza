import React, { Component } from "react";

import { PizzaConsumer } from "../../context";

import styled from "styled-components";

class OrderForm extends Component {
  render() {
    return (
      <PizzaConsumer>
        {(value) => {
          return (
            <>
              <FormTitle>
                Please provide your info to complete the order:{" "}
              </FormTitle>
              <Form onSubmit={value.handleSubmit}>
                <FormInnerDiv>
                  <label>Name: </label>
                  <input
                    minLength="5"
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={value.handleChange}
                  />
                  <label>Address: </label>
                  <input
                    minLength="6"
                    type="text"
                    name="address"
                    value={value.address}
                    onChange={value.handleChange}
                  />
                  <label>Phone: </label>
                  <input
                    minLength="9"
                    type="number"
                    name="phone"
                    value={value.phone}
                    onChange={value.handleChange}
                  />
                  <div>
                    <h5 style={{ marginTop: "1rem" }}>
                      Total Price: ${value.cartTotal}
                    </h5>
                  </div>
                </FormInnerDiv>
                <FormButton
                  className="btn btn-large btn-outline-success text-uppercase"
                  type="submit"
                >
                  Submit
                </FormButton>
              </Form>
            </>
          );
        }}
      </PizzaConsumer>
    );
  }
}

const Form = styled.form`
  display: flex;
  display: flex;
  margin: 0rem 5rem;
  margin-bottom: 2rem;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid var(--main-gray);
  border-radius: 0.5rem;
`;

const FormTitle = styled.h1`
  margin: 5rem 2rem 3rem 2rem;
  text-align: center;
`;

const FormInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButton = styled.button`
  margin-top: 4rem;
  height: 40px;
  width: 100px;
  margin: 0px -50px;
  position: relative;
  top: 50%;
  left: 50%;
`;

export default OrderForm;
