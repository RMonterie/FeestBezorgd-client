import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import PageLink from "../page/PageLink";

import "./CartSummary.scss";

/**
 * Summary of the price of all the shopping cart items
 *
 * @returns {JSX.Element}
 */
export const CartSummary: React.FC = () => {
  const totalPrice = useSelector((state) => state.cart.total);
  const cartItemslength = useSelector((state) => state.cart.products.length);
  return (
    <div className="cart-summary">
      <h1>Your total price:</h1>
      <h2>{`€${totalPrice},-`}</h2>
      {cartItemslength ? (
        <PageLink to="/checkout">
          <Button
            style="btn--success--solid"
            icon={<FontAwesomeIcon icon={faShoppingCart} />}
            text="Check out"
          />
        </PageLink>
      ) : (
        <button disabled>
          {<FontAwesomeIcon icon={faShoppingCart} />}To checkout
        </button>
      )}
      <h3>Enter discount code</h3>
      <input type="text" placeholder="Discount Code" />
    </div>
  );
};
