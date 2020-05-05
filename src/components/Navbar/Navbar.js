import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <div>
            <Button>
              <span>
                <i
                  style={{ color: "var(--main-black)" }}
                  className="fas fa-home"
                ></i>
                <p>Home</p>
              </span>
            </Button>
          </div>
        </Link>
        <Link style={{ marginLeft: "auto" }} to="/order">
          <div>
            <Button>
              <span>
                <i
                  style={{ color: "var(--main-black)" }}
                  className="fas fa-shopping-cart"
                ></i>
                <p>Cart</p>
              </span>
            </Button>
          </div>
        </Link>
      </nav>
    );
  }
}

const Button = styled.button`
  color: var(--main-white);
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  outline: none;

  p {
    display: inline;
    color: var(--main-black);
    margin-left: 5px;
    font-weight: bold;
  }

  &:hover {
    background: var(--main-black);
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

export default Navbar;
