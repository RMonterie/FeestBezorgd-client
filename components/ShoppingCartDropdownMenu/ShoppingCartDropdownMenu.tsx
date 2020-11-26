import ShoppingCart from "../ShoppingCart";

import "./ShoppingCartDropdownMenu.scss";

/**
 * Dropdown menu that displays the shopping cart.
 *
 * @returns {JSX.Element}
 */
const ShoppingCartDropdownMenu = () => {
  return (
    <div className="shoppingcart-dropdown">
      <ShoppingCart />
      <button>Order</button>
    </div>
  );
};

export default ShoppingCartDropdownMenu;
