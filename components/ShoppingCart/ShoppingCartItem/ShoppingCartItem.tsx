import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

import "./ShoppingCartItem.scss";
interface ShoppingCartItemProps {
  name: string;
  price: number;
  index: number;
}

/**
 * List item that gets displayed in the shopping cart
 *
 * @returns {JSX.Element}
 */
const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  name,
  price,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="shoppingcart-item">
      <div>
        <h2>{name}</h2>
        <p>{`€${price},-`}</p>
        <p>Amount: 10</p>
      </div>
      <button onClick={() => dispatch(removeProductFromCart(index))}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

export default ShoppingCartItem;
