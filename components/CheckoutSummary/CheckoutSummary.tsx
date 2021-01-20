import React from "react";
import { useSelector } from "react-redux";

import "./CheckoutSummary.scss";

/**
 * Summary of the shopping cart's items and price that is used on the checkout page.
 */
const CheckoutSummary: React.FC = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <div className="checkout-summary">
      <h3>{`Your total price: €${totalPrice},-`}</h3>
      {cartItems?.map((item, index) => {
        return (
          <div key={index} className="checkout-cart">
            <span>{item.name}</span>
            <p>{`€${item.price},-`}</p>
            <p>{`Quantity: ${item.quantity}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSummary;
