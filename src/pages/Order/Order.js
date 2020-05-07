import React, { Component } from "react";
import Title from "../../components/Title/Title";
import CartColumns from "../../components/Cart/CartColumns/CartColumns";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import CartList from "../../components/Cart/CartList/CartList";
import CartTotals from "../../components/Cart/CartTotals/CartTotals";
import OrderForm from "../../components/OrderForm/OrderForm";
import { PizzaConsumer } from "../../context";

class Order extends Component {
  render() {
    return (
      <div>
        <PizzaConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title title="Your Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                  <OrderForm />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </PizzaConsumer>
      </div>
    );
  }
}

export default Order;
