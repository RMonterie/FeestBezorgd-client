import { useSelector, useDispatch } from "react-redux";
import {
  removeProductFromCart,
  clearCart,
} from "../../redux/actions/cartActions";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";

/**
 * Component that displays items in the shopping cart from the redux store.
 *
 * @returns {JSX.Element}
 */
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log("cartitems", cartItems);
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>
        {cartItems?.length ? (
          cartItems.map((item) => {
            return (
              <ShoppingCartItem
                name={item.name}
                price={item.price}
                index={cartItems.indexOf(item)}
              />
            );
          })
        ) : (
          <h4>You don't have any items in your shopping cart!</h4>
        )}
        <button onClick={() => dispatch(clearCart())}>
          Clear the shopping cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
