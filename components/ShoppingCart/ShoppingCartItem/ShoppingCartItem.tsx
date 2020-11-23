import { useDispatch } from "react-redux";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

const ShoppingCartItem = ({ name, price, index }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{index}</p>
      <button onClick={dispatch(removeProductFromCart(index))}>Delete</button>
    </div>
  );
};

export default ShoppingCartItem;
