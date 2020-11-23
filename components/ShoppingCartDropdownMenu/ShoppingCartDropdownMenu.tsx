import ShoppingCart from "../ShoppingCart";

import "./ShoppingCartDropdownMenu.scss";

const ShoppingCartDropdownMenu = () => {
  return (
    <div className="shoppingcart-dropdown">
      <ShoppingCart />
      <button>Order</button>
    </div>
  );
};

export default ShoppingCartDropdownMenu;
