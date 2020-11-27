import { useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";

import "./ShoppingCart.scss";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const price = useSelector((state) => state.cart.total);
  return (
    <ul className="cart">
      {cartItems?.length ? (
        cartItems.map((item, index) => {
          return (
            <ShoppingCartItem
              key={index}
              name={item.name}
              price={item.price}
              index={index}
            />
          );
        })
      ) : (
        <h1>It seems there are no items in your shopping cart...</h1>
      )}
    </ul>
  );
};

export default ShoppingCart;
