import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

import "./MiniShoppingCartItem.scss";

interface MiniShoppingCartItemProps {
  name: string;
  price: number;
  quantity: number;
  index: number;
}

/**
 * Component that displays a single item in the shopping cart.
 *
 * @returns {JSX.Element}
 */
const MiniShoppingCartItem: React.FC<MiniShoppingCartItemProps> = ({
  name,
  price,
  quantity,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="mini-shoppingcart-item-container">
      <div>
        <p className="product-name">{name}</p>
        <p>{`€${price},-`}</p>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <button onClick={() => dispatch(removeProductFromCart(index))}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default MiniShoppingCartItem;
