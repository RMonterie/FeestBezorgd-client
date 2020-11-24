import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

interface ShoppingCartItemProps {
  name: string;
  price: number;
  index: number;
}

/**
 * Component that displays a single item in the shopping cart
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
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{index}</p>
      <button onClick={() => dispatch(removeProductFromCart(index))}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ShoppingCartItem;
