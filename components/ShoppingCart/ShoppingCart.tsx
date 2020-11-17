import { useSelector, useDispatch } from "react-redux";
import {
  removeProductFromCart,
  clearCart,
} from "../../redux/actions/cartActions";

//TODO: Make the shopping cart render out a list of ShoppingCartItems instead of hardcoded divs
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products in shopping cart</h2>
      <div>
        {cartItems.length != 0 &&
          cartItems.map((item) => {
            return (
              <div>
                <p>{item.name}</p>
                <p>{`€${item.price}`}</p>
                <p>{cartItems.indexOf(item)}</p>
                <button
                  onClick={() =>
                    dispatch(removeProductFromCart(cartItems.indexOf(item)))
                  }
                >
                  Delete🗑
                </button>
              </div>
            );
          })}
        <button onClick={() => dispatch(clearCart())}>
          Clear the shopping cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
