import React from "react";

import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
  const { cartSubTotal, delivery, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="ml-auto mr-4 text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span>subtotal: </span> <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span>delivery: </span> <strong>${delivery}</strong>
            </h5>
            <h5>
              <span>total: </span> <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
