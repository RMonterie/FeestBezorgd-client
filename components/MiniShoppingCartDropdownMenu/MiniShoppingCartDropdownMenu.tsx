import Router from "next/router";
import { useSelector } from "react-redux";
import Button from "../Button";

import MiniShoppingCart from "../MiniShoppingCart";

import "./MiniShoppingCartDropdownMenu.scss";

/**
 * Dropdown menu that displays the shopping cart.
 *
 * @returns {JSX.Element}
 */
const MiniShoppingCartDropdownMenu: React.FC = () => {
  const totalPrice = useSelector((state) => state.cart.total);
  const onClickHandler = () => {
    Router.push("/shoppingCart");
  };

  return (
    <div className="mini-shoppingcart-dropdown">
      <div className="mini-shoppingcart-dropdown-title">
        <h3>Your shopping cart</h3>
        <div className="total-price-container">
          <p className="total-price-title">{`Total price: `}</p>
          <p>{`€${totalPrice},-`}</p>
        </div>
        <div className="order-button">
          <Button onClick={onClickHandler} text="Order" />
        </div>
      </div>
      <MiniShoppingCart />
    </div>
  );
};

export default MiniShoppingCartDropdownMenu;
