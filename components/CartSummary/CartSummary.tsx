import React from "react";
import { useSelector } from "react-redux";

import "./CartSummary.scss";

export const CartSummary = () => {
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <div className="cart-summary">
      <h1>Your total price:</h1>
      <h2>{`€${totalPrice},-`}</h2>
      <button>Place your order</button>
    </div>
  );
};
