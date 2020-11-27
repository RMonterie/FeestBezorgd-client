import { useSelector } from "react-redux";
import MiniShoppingCartItem from "./MiniShoppingCartItem/MiniShoppingCartItem";

/**
 * Component that displays items in the shopping cart from the redux store.
 *
 * @returns {JSX.Element}
 */
const MiniShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  return (
    <div>
      <div>
        {cartItems?.length ? (
          cartItems.map((item, index) => {
            return (
              <MiniShoppingCartItem
                key={index}
                name={item.name}
                price={item.price}
                index={index}
              />
            );
          })
        ) : (
          <h4>You don't have any items in your shopping cart!</h4>
        )}
      </div>
    </div>
  );
};

export default MiniShoppingCart;
