import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

let id = 0;

class AdminLoginPage extends Component {
  state = {
    orders: [],
    adminName: "",
    adminPassword: "",
    errorMessage: "",
    isLogged: false,
    orderString: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.state.adminName;
    const password = this.state.adminPassword;

    axios
      .post("http://localhost:5000/admins", {
        name: name,
        password: password,
      })
      .then((response) => {
        this.setState(
          () => {
            return { isLogged: true, errorMessage: "" };
          },
          () => {
            axios.get("http://localhost:5000/orders", {}).then((response) => {
              this.setState(() => {
                return { orders: response };
              });
            });
          }
        );
      })
      .catch((error) => {
        return this.setState({
          errorMessage: "Please provide the valid name and password...",
        });
      });
  };

  render() {
    return (
      <>
        <FormTitle>
          {this.state.isLogged ? "Welcome Admin" : "Hello admin"}{" "}
        </FormTitle>
        {this.state.isLogged ? (
          <>
            <div className="container-fluid">
              <Button onClick={() => this.setState({ isLogged: false })}>
                Log Out
              </Button>
              <h1 style={{ textAlign: "center" }}>Orders:</h1>
              {this.state.orders.data !== undefined ? (
                <div>
                  {this.state.orders.data.map((order) => {
                    return (
                      <div
                        key={order._id}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <Wrapper>
                          <h4>Name: {order.name}</h4>
                          <h4>Address: {order.address}</h4>
                          <h4>Phone: {order.phone}</h4>
                          <h4>Price: ${order.price}</h4>
                          <h4 style={{ display: "inline", border: "none" }}>
                            Orders:{" "}
                          </h4>
                          {order.orders.map((order) => (
                            <h4
                              key={id++}
                              style={{ display: "inline", border: "none" }}
                            >
                              {this.state.orderString.concat(order)},{" "}
                            </h4>
                          ))}
                        </Wrapper>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <FormInnerDiv>
              <label>Name: </label>
              <input
                minLength="5"
                type="text"
                name="adminName"
                value={this.state.adminName}
                onChange={this.handleChange}
              />
              <label>Password: </label>
              <input
                minLength="6"
                type="password"
                name="adminPassword"
                value={this.state.adminPassword}
                onChange={this.handleChange}
              />
            </FormInnerDiv>
            {this.state.errorMessage ? (
              <div>
                <p style={{ color: "var(--main-red)" }}>
                  {this.state.errorMessage}
                </p>
              </div>
            ) : null}
            <FormButton
              style={{ marginTop: "2rem" }}
              className="btn btn-large btn-outline-success text-uppercase"
              type="submit"
            >
              Submit
            </FormButton>
          </Form>
        )}
      </>
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
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  color: var(--main-black);
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--main-black);
  outline: none;

  p {
    display: inline;
    color: var(--main-black);
    margin-left: 5px;
    font-weight: bold;
  }

  &:hover {
    background: var(--main-black);
    color: var(--main-white);
  }

  &:hover p {
    color: var(--main-white);
  }

  &:hover i {
    color: var(--main-white) !important;
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;

const Wrapper = styled.div`
  border: 1px solid black;

  h4 {
    border: 1px solid black;
    margin: 0;
  }
`;

export default AdminLoginPage;
